import 'core-js';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
import React, { useState, useRef } from 'react';
import { isEqual } from 'lodash-es';
import validaRut from 'views/index-sections/rut.js';
import Modal from 'views/index-sections/modal.js';
import Index from 'views/Index.js'
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import RegisterHeader from "components/Headers/RegisterHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  FormWithConstraints,
  // Input,
  FieldFeedbacks,
  FieldFeedback
} from 'react-form-with-constraints-bootstrap4';


// reactstrap components
import {
  Input,
  Col,
  Row,
  Container
} from "reactstrap";

function ListCampaign() {
  const form = useRef(null);
  const [inputs, setInputs] = useState(getInitialInputsState());
  const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(true);
  const [resetButtonDisabled, setResetButtonDisabled] = useState(true);


  return (
    <>
      <IndexNavbar />
      <RegisterHeader />
      <div className="wrapper">
        <div className="section section-about-us">
          <Container>
            
          </Container>
        </div>
      </div>
      <TransparentFooter />
    </>
  );
}

export default ListCampaign;
