import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/Home.component";


function App() {
  
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Notos</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>Como Funciona</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>Preguntas Frecuentes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>Comisiones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>Términos y Condiciones</Link>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Ingresar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Registrarse</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
