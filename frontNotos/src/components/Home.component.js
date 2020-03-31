import React, { Component } from "react";
import { Container } from "reactstrap";
import { Button } from 'reactstrap';
//import Contacts from "./contacts";
import Users from "./users"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Login extends Component {


  render() {

    return (
      <Container>
        <h1>Notos:</h1>
        <h6>Bienvenido a Notos, un sitio comunitario donde podrás inscribir tu propia iniciatiativa para recolectar dinero o bien apoyar otras iniciativas inscritas.</h6>

        <h4>Inscribe tu iniciativa o aporta.</h4>
        <Button className="btn btn-outline-info" outline size="lg" to={"/sign-up"}>
          Inscribir
        </Button>
        <Button className="btn btn-outline-info" outline size="lg">
          Aportar
        </Button>
        <Users/>

      </Container>
    );
  }
}