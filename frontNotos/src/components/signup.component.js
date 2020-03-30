import React, { Component } from "react";


export default class SignUp extends Component {

  constructor(props) {

    super()
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
      password_2: ''
    }

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

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.name === 'isGoing' ? target.checked : target.value;
  //   const name_1 = target.name_1;
  // }

   login(rut,email, password) {

    console.log(rut + ' ' + email + ' ' + password)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rut,email, password })
    };

    return fetch('http://192.168.0.93:3977/api/get-users', requestOptions)
      .then(res => res.json())
      .then(user => {
        // login successful if there's a user in the response
        if (user) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          console.log('usuario: '+user.name + ' logeado')
          localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
      });
  }



  onSubmit(e) {
    console.log(this.state.name_1);
    console.log(this.state.description);
    console.log(this.state.name);
    console.log(this.state.rut);
    console.log(this.state.email);
    console.log(this.state.phone);
    console.log(this.state.accountType);
    console.log(this.state.account);
    console.log(this.state.password);
    console.log(this.state.password_2);

    /* validacion de usuario */
    const email= this.state.email
    const password= this.state.password
    const rut= this.state.rut
    const userLogin=  SignUp.login(email, password,rut)
    console.log(userLogin)
  }




//   componentDidMount() {
//     fetch('http://192.168.0.93:3977/api/get-users')
//    //fetch('https://jsonplaceholder.typicode.com/users')
//      .then(res => res.json())
//      .then(json => {
//        this.setState({
//          items: json,
//          isLoaded: true,
//        })
//      }).catch((err) => {
//        console.log(err);
//      });
//  }














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
          usted ya se encuentra registrado <a href="#">ingresar?</a>
        </p>
      </form>
    );
  }
}
