import React, { Component } from "react";

export default class SignUp extends Component {

  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName_1 = this.onChangeName_1.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangerut = this.onChangerut.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangeaccountType = this.onChangeaccountType.bind(this);
    this.onChangebank = this.onChangebank.bind(this);
    this.onChangeaccount = this.onChangeaccount.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangepassword2 = this.onChangepassword2.bind(this);

    this.state = {
      name_1: '',
      description: '',

      name: '',
      rut: '',
      email: '',
      role: '',
      phone: '',
      account_type: '',
      bank: '',
      bank_account: '',
      password: '',
      password_2: '',

      items: [],
    }
    this.UserExists = this.UserExists.bind(this)
  }

  // Form Events
  onChangeName_1(e) {
    this.setState({ name_1: e.target.value })
  }
  // Form Events
  onChangedescription(e) {
    this.setState({ description: e.target.value })
  }
  // Form Events
  onChangename(e) {
    this.setState({ name: e.target.value })
  }
  // Form Events
  onChangerut(e) {
    this.setState({ rut: e.target.value })
  }
  // Form Events
  onChangeemail(e) {
    this.setState({ email: e.target.value })
  }
  // Form Events
  onChangephone(e) {
    this.setState({ phone: e.target.value })
  }
  // Form Events
  onChangeaccountType(e) {
    this.setState({ accountType: e.target.value })
  }
  // Form Events
  onChangebank(e) {
    this.setState({ bank: e.target.value })
  }
  // Form Events
  onChangeaccount(e) {
    this.setState({ account: e.target.value })
  }
  // Form Events
  onChangepassword(e) {
    this.setState({ password: e.target.value })
  }
  // Form Events
  onChangepassword2(e) {
    this.setState({ password_2: e.target.value })
  }

  onSubmit(e) {
    /*validacion de usuario */
    const email = this.state.email
    const password = this.state.password
    const rut = this.state.rut

    this.UserExists(email, password, rut)
    // UserApi.then(response => response.json())
    //   .then(response => items => response['user'].name)
    //   .then(response => console.log(response))

  }


  render() {
    return (
      <form>
        <h3>Inscripción</h3>
        <h3>Datos de la Iniciativa</h3>
        <div className="form-group">
          {/* <label>Nombre Iniciativa</label> */}
          <input type="text" className="form-control" placeholder="Nombre Iniciativa" id="name_1" value={this.state.name_1} onChange={this.onChangeName_1.bind(this)} />
        </div>
        <div className="form-group">
          {/* <label>Descripción</label> */}
          {/* <input type="text" className="form-control" placeholder="Descripción" name="description" value={this.state.description} onChange={this.onChangedescription.bind(this)} /> */}
          <textarea name="description" className="form-control" placeholder="Ingresa una Descripción de tu iniciativa, esta deber ser lo mas clara posible." rows="7" cols="80" value={this.state.description} onChange={this.onChangedescription.bind(this)}></textarea>
        </div>
        <h3>Datos del Responsable</h3>
        <div className="form-group">
          {/* <label>Nombre</label> */}
          <input type="text" className="form-control" placeholder="Nombre Responsable" name="name" value={this.state.name} onChange={this.onChangename.bind(this)} />
        </div>

        <div className="form-group">
          {/* <label>Rut</label> */}
          <input type="text" className="form-control" placeholder="Rut" name="rut" value={this.state.rut} onChange={this.onChangerut.bind(this)} />
        </div>

        <div className="form-group">
          {/* <label>Correo</label> */}
          <input type="email" className="form-control" placeholder="Correo" name="email" value={this.state.email} onChange={this.onChangeemail.bind(this)} />
        </div>
        <div className="form-group">
          {/* <label>Teléfono</label> */}
          <input type="phone" className="form-control" placeholder="Teléfono" name="phone" value={this.state.phone} onChange={this.onChangephone.bind(this)} />
        </div>
        <div className="form-group">
          {/* <label>Tipo de Cuenta</label> */}
          {/* <input type="text" className="form-control" placeholder="Tipo de Cuenta" name="accountType" value={this.state.accountType} onChange={this.onChangeaccountType.bind(this)} /> */}
          <select id="accountType" name="size" className="form-control">
            <option>Cuenta Corriente</option>
            <option>Cuenta Vista</option>
          </select>
        </div>
        <div className="form-group">
          {/* <label>Banco</label> */}
          {/* <input type="text" className="form-control" placeholder="Banco" name="bank" value={this.state.bank} onChange={this.onChangebank.bind(this)} /> */}
          <select id="bank" name="size" className="form-control">
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
        <div className="form-group">
          {/* <label>Nº Cuenta</label> */}
          <input type="text" className="form-control" placeholder="Nº Cuenta" name="account" value={this.state.account} onChange={this.onChangeaccount.bind(this)} />
        </div>
        <div className="form-group">
          {/* <label>Nº Cuenta</label> */}
          <input type="password" className="form-control" placeholder="Contraseña" name="password" value={this.state.password} onChange={this.onChangepassword.bind(this)} />
        </div>
        <div className="form-group">
          {/* <label>Nº Cuenta</label> */}
          <input type="password" className="form-control" placeholder="Repetir Contraseña" name="password_2" value={this.state.password2} onChange={this.onChangepassword2.bind(this)} />
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={() => this.onSubmit()}>Inscribir</button>
        <p className="forgot-password text-right">
          usted ya se encuentra registrado <a href="#login">ingresar?</a>
        </p>
      </form>
    );
  }

  async UserExists(email, password, rut) {
    console.log('entra en UserExists:' + email + ' - ' + password + ' - ' + rut)
    rut = '121081784'
    email = 'floyd70s@gmail.com'
    password = 'Galloviejo1'

    var url = 'http://192.168.0.93:3977/api/get-user-by-rut',
      params = {
        method: 'POST',
        mode: 'cors',
        //redirect: 'follow',
        body: JSON.stringify({ 'rut': rut, 'email': email, 'password': password }),
        headers: { 'Content-Type': 'application/json' },
      };

    var request = new Request(url, params);
    fetch(request)
    //let res = await fetch('http://192.168.0.93:3977/api/get-users')
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function (data) {
            console.log(data);
            console.log('respuesta')
          });
        }
      )
      .catch(function (err) {
        console.log(err)
        console.log('Fetch Error :-S', err);
      });


  }

}
