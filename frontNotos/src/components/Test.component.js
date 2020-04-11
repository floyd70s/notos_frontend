// @ts-check

import 'core-js';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
import React, { useState, useRef } from 'react';
import { isEqual } from 'lodash-es';

import {
  FormWithConstraints,
  Input,
  FieldFeedbacks,
  FieldFeedback
} from 'react-form-with-constraints-bootstrap4';
import { DisplayFields } from 'react-form-with-constraints-tools';

// import './index.html';
// import './src/App.css';


// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function checkUsernameAvailability(value) {
//   console.log('checkUsernameAvailability');
//   await sleep(1000);
//   return !['john', 'paul', 'george', 'ringo'].includes(value.toLowerCase());
// }

function Form() {
  const form = useRef(null);
  const password = useRef(null);

  function getInitialInputsState() {
    return {
      Name_1: '',
      password: '',
      passwordConfirm: ''
    };
  }

  const [inputs, setInputs] = useState(getInitialInputsState());
  const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(false);
  const [resetButtonDisabled, setResetButtonDisabled] = useState(true);

  function shouldDisableResetButton(state) {
    return isEqual(getInitialInputsState(), state) && !form.current.hasFeedbacks();
  }

  async function handleChange({ target }) {
    setInputs(prevState => {
      return { ...prevState, [target.name]: target.value };
    });

    await form.current.validateFields(target);

    setSignUpButtonDisabled(!form.current.isValid());
    setResetButtonDisabled(shouldDisableResetButton(inputs));
  }

  async function handlePasswordChange({ target }) {
    setInputs(prevState => {
      return { ...prevState, [target.name]: target.value };
    });

    await form.current.validateFields(target, 'passwordConfirm');
    setSignUpButtonDisabled(!form.current.isValid());
    setResetButtonDisabled(shouldDisableResetButton(inputs));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await form.current.validateForm();
    const formIsValid = form.current.isValid();

    setSignUpButtonDisabled(!form.current.isValid());
    setResetButtonDisabled(shouldDisableResetButton(inputs));

    if (formIsValid) {
      alert(`Valid form\n\ninputs =\n${JSON.stringify(inputs, null, 2)}`);
    }
  }

  function handleReset() {
    setInputs(getInitialInputsState());
    form.current.resetFields();
    setSignUpButtonDisabled(false);
    setResetButtonDisabled(true);
  }

  return (
    <FormWithConstraints ref={form} onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        {/*-- Name_1 ----------------------------------------------------------------------------------------------------  */}
        <label htmlFor="Name_1">
          Username <small></small>
        </label>
        <Input
          id="Name_1"
          name="Name_1"
          value={inputs.Name_1}
          onChange={handleChange}
          required
          minLength={3}
          className="form-control is-pending-sm"
        />
        <FieldFeedbacks for="Name_1">
          <FieldFeedback when="tooShort">Nombre demasiado corto</FieldFeedback>
          <FieldFeedback when="*" />
          <FieldFeedback when="valid">vamos bien!</FieldFeedback>
        </FieldFeedbacks>
      </div>

      {/*------------------------------------------------------------------------------------------------------  */}

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          name="password"
          innerRef={password}
          value={inputs.password}
          onChange={handlePasswordChange}
          required
          pattern=".{5,}"
          className="form-control"
        />
        <FieldFeedbacks for="password">
          <FieldFeedback when="valueMissing" />
          <FieldFeedback when="patternMismatch">Debe contener a lo menos un largo de 5</FieldFeedback>
          <FieldFeedback when={value => !/\d/.test(value)} warning>
            Debe contener Números
          </FieldFeedback>
          <FieldFeedback when={value => !/[a-z]/.test(value)} warning>
            Debe contener minúsculas
          </FieldFeedback>
          <FieldFeedback when={value => !/[A-Z]/.test(value)} warning>
            Debe contener Mayúsculas
          </FieldFeedback>
          <FieldFeedback when="valid">Vamos bien!</FieldFeedback>
        </FieldFeedbacks>
      </div>
      <div className="form-group">
        <label htmlFor="password-confirm">Confirmar Contraseña</label>
        <Input
          type="password"
          id="password-confirm"
          name="passwordConfirm"
          value={inputs.passwordConfirm}
          onChange={handleChange}
          required
          className="form-control"
        />
        <FieldFeedbacks for="passwordConfirm">
          <FieldFeedback when="*" />
          <FieldFeedback when={value => value !== password.current.value}>
            Contraseñas no coinciden
          </FieldFeedback>
          <FieldFeedback when="valid">Vamos bien!</FieldFeedback>
        </FieldFeedbacks>
      </div>
      <button type="submit" disabled={signUpButtonDisabled} className="btn btn-primary">
        Registrarse
      </button>{' '}
      <button
        type="button"
        onClick={handleReset}
        disabled={resetButtonDisabled}
        className="btn btn-secondary"
      >
        limpiar
      </button>
      <pre>
        <small>
          Fields = <DisplayFields />
        </small>
      </pre>
    </FormWithConstraints>
  );
}

function RegisterNotos() {
  return (
    <div className="container">
      <Form />
    </div>
  );
}

export default RegisterNotos;
