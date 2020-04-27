import 'core-js';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
import React, { useState, useRef } from 'react';
import { isEqual } from 'lodash-es';
import validaRut from 'views/index-sections/rut.js';

import {
  FormWithConstraints,
  Input,
  FieldFeedbacks,
  FieldFeedback
} from 'react-form-with-constraints-bootstrap4';

function Form() {
  const form = useRef(null);
  const [inputs, setInputs] = useState(getInitialInputsState());
  const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(true);
  const [resetButtonDisabled, setResetButtonDisabled] = useState(true);

  function getInitialInputsState() {
    return {
      name_1: '',
      description: '',
      name: '',
      rut: '',
      email: '',
      role: '',
      phone: '',
      account_type: '',
      acc_type: '',
      bank: '',
      bank_account: '',
      account_typeValidate: ''
    };
  }
  async function UserExists(rut) {

    var getUserbyRut = 'get-user-by-rut'
    var url = 'http://192.168.0.93:3977/api/' + getUserbyRut,
      params = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ 'rut': rut }),
        headers: { 'Content-Type': 'application/json' },
      };

    var request = new Request(url, params);
    var resp_aux

    fetch(request)
      .then(res => resp_aux = res.clone())
      .then(res => res.json())
      .then(res => {

        console.log(resp_aux.status)
        //si el usuario existe.
        if (resp_aux.status === 200) {
          console.log('estado(200) --> el usuario existe')
          console.log(res['user'].bank)
          console.log(res['user']._id)
          console.log('el usuario existe ,solo  se debe registrar la iniciativa')

        }
        else {
          console.log('el usuario no existe , se debe registrar el usuario y la iniciativa')
          saveUser(inputs.name, inputs.rut, inputs.email, inputs.phone, inputs.account_type, inputs.bank, inputs.bank_account)
        }

      })
      .catch((err) => {
        console.log(err)
        return "error";
      })

    console.log('fin de userExist')
  }//------------------------------------------------------------------------------------
  async function saveUser(name, rut, email, phone, account_type, bank, bank_account) {
    console.log('saveUser')
    console.log(name + ' ' + rut + ' ' + email + ' ' + phone + ' ' + account_type + ' ' + bank + ' ' + bank_account + ' ')
    var payload = 'saveUser'
    var url = 'http://192.168.0.93:3977/api/' + payload,
      params = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ 'name': name, 'rut': rut, 'email': email, 'phone': phone, 'account_type': account_type, 'bank': bank, 'bank_account': bank_account }),
        headers: { 'Content-Type': 'application/json' },
      };

    var request = new Request(url, params);
    fetch(request)
      .then(res => {
        res.json()
        console.log('respuesta del servicio:' + res.status)
        console.log('respuesta del servicio:' + res._id)
        return (res.status)
      })
      .catch((err) => {
        return "error";
      })

  }//------------------------------------------------------------------------------------
  function shouldDisableResetButton(state) {
    return isEqual(getInitialInputsState(), state) && !form.current.hasFeedbacks();
  }//------------------------------------------------------------------------------------
  async function handleChange({ target }) {
    setInputs(prevState => {
      return { ...prevState, [target.name]: target.value };
    });
    await form.current.validateFields(target);
    setSignUpButtonDisabled(!form.current.isValid());
    setResetButtonDisabled(shouldDisableResetButton(inputs));
  }//------------------------------------------------------------------------------------
  async function handleRutChange({ target }) {
    setInputs(prevState => {
      return { ...prevState, [target.name]: target.value };
    });
    console.log(target.value.length)
    if (target.value.length > 8) {
      let bRut = validaRut.validate(target.value)
      console.log(bRut)
      if(bRut){
        await form.current.validateFields(target);
      }
    }

    setSignUpButtonDisabled(!form.current.isValid());
    setResetButtonDisabled(shouldDisableResetButton(inputs));
  }//------------------------------------------------------------------------------------
  async function handleSubmit(e) {
    e.preventDefault();
    var bAccountType = false
    var bBank = false
    var bRut = validaRut.validate(inputs.rut)

    // validacion de tipo de cuenta.
    if (inputs.account_type !== "") {
      bAccountType = true
    }
    else {
      bAccountType = false
    }

    // validacion de banco.
    if (inputs.bank !== "") {
      bBank = true
    }
    else bBank = false

    // aca se valida el resto del formulario.
    await form.current.validateForm();
    var formIsValid = form.current.isValid();

    if (!bAccountType) {
      formIsValid = false
      setSignUpButtonDisabled(!form.current.isValid());
      setResetButtonDisabled(shouldDisableResetButton(inputs));
      alert('falta completar su tipo de cuenta')
      inputs.account_typeValidate = 'falta completar su tipo de cuenta'
    }
    else if (!bBank) {
      formIsValid = false
      setSignUpButtonDisabled(!form.current.isValid());
      setResetButtonDisabled(shouldDisableResetButton(inputs));
      alert('falta completar su banco')
    }
    else if(!bRut){
      alert('corrija su rut')
    }
    else {
      if (formIsValid) {
        UserExists(inputs.rut)
      }
    }
  }//------------------------------------------------------------------------------------
  function handleReset() {
    setInputs(getInitialInputsState());
    form.current.resetFields();
    setSignUpButtonDisabled(false);
    setResetButtonDisabled(true);
  }
  function prueba() {
    const newPassword = Math.floor(100000 + Math.random() * 900000)
    console.log(newPassword)
  }


  return (
    <FormWithConstraints ref={form} onSubmit={handleSubmit} noValidate>
    <h3 className="title">Formulario de inscripción</h3>
      {/*-- Name_1 ----------------------------------------------------------------------------------------------------  */}
      <div className="form-group">
        <label htmlFor="name_1">
          Nombre de la iniciativa <small></small>
        </label>
        <Input
          id="name_1"
          name="name_1"
          value={inputs.name_1}
          onChange={handleChange}
          required
          minLength={1}
          className="form-control is-pending-sm"
        />
        <FieldFeedbacks for="name_1">
          <FieldFeedback when="tooShort">Nombre demasiado corto</FieldFeedback>
          <FieldFeedback when="*" />
          <FieldFeedback when="valid">vamos bien!</FieldFeedback>
        </FieldFeedbacks>
      </div>
      {/*-- Description ----------------------------------------------------------------------------------------------------  */}
      <div className="form-group">
        <label htmlFor="description">
          Descripción de la iniciativa <small></small>
        </label>
        <textarea
          id="description"
          name="description"

          value={inputs.Description}
          onChange={handleChange}
          required
          minLength={10}
          className="form-control is-pending-sm"
        />
        <FieldFeedbacks for="description">
          <FieldFeedback when="tooShort">Nombre demasiado corto</FieldFeedback>
          <FieldFeedback when="*" />
          <FieldFeedback when="valid">vamos bien!</FieldFeedback>
        </FieldFeedbacks>
      </div>

      {/*-- name  ----------------------------------------------------------------------------------------------------  */}
      <div className="form-group">
        <label htmlFor="name">
          Nombre del responsable <small></small>
        </label>
        <Input
          id="name"
          name="name"
          value={inputs.Name}
          onChange={handleChange}
          required
          minLength={3}
          className="form-control is-pending-sm"
        />
        <FieldFeedbacks for="name">
          <FieldFeedback when="tooShort">Nombre demasiado corto</FieldFeedback>
          <FieldFeedback when="*" />
          <FieldFeedback when="valid">vamos bien!</FieldFeedback>
        </FieldFeedbacks>
      </div>
      {/*-- rut ----------------------------------------------------------------------------------------------------  */}
      <div className="form-group">
        <label htmlFor="rut">
          Rut <small></small>
        </label>
        <Input
          id="rut"
          name="rut"
          value={inputs.rut}
          onChange={handleRutChange}
          required
          minLength={8}
          className="form-control is-pending-sm"
        />
        <FieldFeedbacks for="rut">
          <FieldFeedback when="tooShort">Nombre demasiado corto</FieldFeedback>
          <FieldFeedback when="*" />
          <FieldFeedback when="valid"></FieldFeedback>
        </FieldFeedbacks>
      </div>
      {/*-- email ----------------------------------------------------------------------------------------------------  */}
      <div className="form-group">
        <label htmlFor="email">
          Correo Eletrónico <small></small>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={inputs.email}
          onChange={handleChange}
          required
          minLength={3}
          className="form-control is-pending-sm"
        />
        <FieldFeedbacks for="email">
          <FieldFeedback when="*" />
          <FieldFeedback when="valid">vamos bien!</FieldFeedback>
        </FieldFeedbacks>
      </div>
      {/*-- phone ----------------------------------------------------------------------------------------------------  */}
      <div className="form-group">
        <label htmlFor="phone">
          Teléfono <small></small>
        </label>
        <Input
          type="number"
          id="phone"
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
          required
          minLength={3}
          className="form-control is-pending-sm"
        />
        <FieldFeedbacks for="phone">
          <FieldFeedback when="*" />
          <FieldFeedback when="valid">vamos bien!</FieldFeedback>
        </FieldFeedbacks>
      </div>
      {/*-- account_type ----------------------------------------------------------------------------------------------------  */}
      <div className="form-group">
        <label htmlFor="account_type">
          Tipo de cuenta {inputs.account_typeValidate} <small></small>
        </label>

        <select
          id="account_type"
          name="account_type"
          value={inputs.account_type}
          onChange={handleChange}
          required
          className="form-control is-pending-sm"
        >
          <option value="">Seleccione el tipo de cuenta</option>
          <option value="corriente">Cuenta Corriente</option>
          <option value="vista">Cuenta Vista</option>
        </select>
      </div>

      {/*-- bank ----------------------------------------------------------------------------------------------------  */}
      <div className="form-group">
        <label htmlFor="bank">
          Banco <small></small>
        </label>
        <select
          id="bank"
          name="bank"
          value={inputs.bank}
          onChange={handleChange}
          required
          className="form-control is-pending-sm"
        >
          <option value="">Seleccione su banco</option>
          <option>Banco Bci</option>
          <option>Banco de Chile</option>
          <option>Banco Estado</option>
          <option>Banco Santander</option>
          <option>Banco BICE</option>
          <option>Banco Condell</option>
          <option>Banco CrediChile</option>
          <option>Banco Edwards Citi</option>
          <option>Banco Falabella</option>
          <option>Banco Internacional</option>
          <option>Banco Itaú</option>
          <option>Banco Ripley</option>
          <option>Banco Security</option>
          <option>CorpBanca</option>
          <option>Santander Banefe</option>
          <option>Scotiabank</option>
        </select>
      </div>
      {/*-- bank_account ----------------------------------------------------------------------------------------------------  */}
      <div className="form-group">
        <label htmlFor="bank_account">
          Número de Cuenta <small></small>
        </label>
        <Input
          id="bank_account"
          name="bank_account"
          value={inputs.bank_account}
          onChange={handleChange}
          required
          minLength={3}
          className="form-control is-pending-sm"
        />
        <FieldFeedbacks for="bank_account">
          <FieldFeedback when="*" />
          <FieldFeedback when="valid">vamos bien!</FieldFeedback>
        </FieldFeedbacks>
      </div>
      {/*-- boton  ----------------------------------------------------------------------------------------------------  */}
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
      <button type="submit" className="btn btn-primary" onClick={prueba} >
        prueba
      </button>
    </FormWithConstraints >
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