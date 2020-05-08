
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from 'reactstrap'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import Register from "views/index-sections/Register.js"
import ListCampaigns from "views/index-sections/ListCampaigns.js"
import registerServiceWorker from 'registerServiceWorker.js';


class ModalExample extends React.Component {

  CloseModal = () => {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Switch>
            <Route path="/index" render={props => <Index {...props} />} />
            <Route path="/nucleo-icons" render={props => <NucleoIcons {...props} />} />
            <Route path="/register" render={props => <Register {...props} />} />
            <Route path="/listCampaigns" render={props => <ListCampaigns {...props} />} />
            <Redirect to="/index" />
            <Redirect from="/" to="/index" />
          </Switch>
        </Switch>
      </BrowserRouter>,
      document.getElementById("root"),
      registerServiceWorker()
    )
  }



  render() {
    return (
      // <main>
      //   <h1>Felicitaciones</h1>
      //   <Modal show={this.state.show} handleClose={this.hideModal} >
      //     <p>Estamos muy felices y esperamos que puedas cumplir con tu meta.</p>
      //     <p>Cuenta con nosotros √√√</p>
      //   </Modal>
      //   <Button type='button' onClick={this.CloseModal}>Cerrar</Button>
      // </main>
      <Modal show={true}>
        <Modal.Header>Bravo !!!!</Modal.Header>
        <Modal.Body>
          <p>Estamos muy felices y esperamos que puedas cumplir con tu meta.</p>
          <p>Cuenta con nosotros √√√</p></Modal.Body>
        <Modal.Footer>
          <Button type='button' onClick={this.CloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

    )
  }
}

export default ModalExample;
