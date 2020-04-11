import React from 'react'

// const validate = values => {
//   const errors = {}

//   if (!values.name_1) {
//     errors.name_1 = 'El nombre de la iniciativa es obligatorio'
//   }
//   if (!values.description) {
//     errors.description = 'La descripción de la iniciativa es obligatoria'
//   }
//   if (!values.name) {
//     errors.name = 'El nombre del responsable es obligatorio'
//   }
//   if (!values.rut) {
//     errors.rut = 'El rut del responsable es obligatorio'
//   }
//   // else {
//   //   if (validaRut(values.rut)) {
//   //     errors.rut = 'RUT incorrecto'
//   //   }
//   // }
//   if (!values.email) {
//     errors.email = 'El email del responsable es obligatorio'
//   }
//   if (!values.phone) {
//     errors.phone = 'El teléfono del responsable es obligatorio'
//   }
//   if (!values.account_type) {
//     errors.account_type = 'Seleccione un tipo de cuenta'
//   }
//   if (!values.bank) {
//     errors.bank = 'Seleccione el banco'
//   }
//   if (!values.bank_account) {
//     errors.bank_account = 'El número de cuenta bancaria es obligatorio'
//   }
//   if (!values.password) {
//     errors.password = 'El password debe cumplir: A lo menos 1 Mayúscula - 1 Número y largo minimo de 8 '
//   }
//   return errors
// }


class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      errors: {},
      status: [],

      _id: '',
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
    }
  }

  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value })
  // }
  // submit(e) {
  //   console.log("entra en handleChange")
  //   //e.preventDefault()
  //   const { errors, ...noErrors } = this.state
  //   const result = validate(noErrors)
  //   this.setState({ errors: result })
  //   console.log(Object.keys(result).length)
  //   if (Object.keys(result).length > 0) {
  //     //se envia el formulario
  //     console.log(errors)
  //     console.log("formulario valido")
  //     //JSON.stringify(this.state)
  //     //const values = JSON.stringify(this.state)
  //     //this.UserExist(values.email, values.password, values.rut)
  //   }
  // }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name_1"]) {
      formIsValid = false;
      errors["name_1"] = "El nombre de la iniciativa es obligatorio.";
    }

    if (typeof fields["name_1"] !== "undefined") {
      if (!fields["name_1"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name_1"] = "solo letras";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  formSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.")
    }
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    //const { name_1, description, name, rut, email, phone, account_type, bank, bank_account, password, password_2 } = this.state
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form name="registerform" className="registerform" onSubmit={this.formSubmit.bind(this)}>
          <fieldset>
            <h3>Inscripción</h3>
            <h3>Datos de la Iniciativa</h3>
            <div className="form-group">
              <input ref="name_1" type="text" placeholder="Nombre Iniciativa" onChange={this.handleChange.bind(this, "name_1")} value={this.state.fields["name_1"]} />
              <span style={{ color: "red" }}>{this.state.errors["name_1"]}</span>
            </div>
            <button className="btn btn-primary btn-block">Inscribir</button>
            <p className="forgot-password text-right">
              usted ya se encuentra registrado <a href="#login">ingresar?</a>
            </p>
          </fieldset>
        </form>
        <div>
          <p>{JSON.stringify(this.state)}</p>
        </div>
      </div>
    )
  }

  async  UserExists(email, password, rut) {
    rut = '121081784'
    email = 'floyd70s@gmail.com'
    password = 'Galloviejo1'

    var getUserbyRut = 'get-user-by-rut'

    var url = 'http://192.168.0.93:3977/api/' + getUserbyRut,
      params = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ 'rut': rut, 'email': email, 'password': password }),
        headers: { 'Content-Type': 'application/json' },
      };

    var request = new Request(url, params);
    var resp_aux

    fetch(request)
      .then(res => resp_aux = res.clone())
      .then(res => res.json())
      .then(res => {

        this.setState({ status: res })
        console.log('resp_aux')
        console.log(resp_aux)

        console.log('res')
        console.log(res)
        console.log('resp_aux.status')
        console.log(resp_aux.status)

        //si el usuario existe.
        if (resp_aux.status === 200) {
          console.log('estado(200) --> el usuario existe')
          console.log(res['user'].bank)
          console.log(res['user']._id)
          localStorage.setItem('_id', res['user']._id);
          console.log('el usuario existe ,solo  se debe registrar solo la iniciativa')
          //this.register(this.name_1, this.description, this.name, this.rut, this.email, this.phone, this.account_type, this.bank, this.bank_account, this.password, this.password_2)

        }
        else {
          console.log('el usuario no existe , se debe registrar el usuario y la iniciativa')

        }

      })
      .catch((err) => {
        return "error";
      })

    console.log('respuesta del fetch')
  }


  async  register(name_1, description, name, rut, email, phone, account_type, bank, bank_account, password, password_2) {
    //async  register(name,rut,email,password,role,phone,account_type,bank,bank_account,date,status) {
    //var role = 'cat1'
    //var date = '29-02-2020'
    //var status = 'CREATED'
    name = 'claudio perez'
    rut = '121081784'
    email = 'floyd70s@gmail.com'
    password = 'Galloviejo1'
    phone = '123'
    account_type = 'Cuenta Corriente'
    bank = 'BCI'
    bank_account = '11117777'

    console.log('REGISTER')
    console.log(name_1 + ' ' + description + ' ' + name + ' ' + rut + ' ' + email + ' ' + phone + ' ' + account_type + ' ' + bank + ' ' + bank_account + ' ' + password + ' ' + password_2)
    // var payload='register'

    // var url = 'http://192.168.0.93:3977/api/'+payload,
    //   params = {
    //     method: 'POST',
    //     mode: 'cors',
    //     body: JSON.stringify({ 'rut': rut, 'email': email, 'password': password }),
    //     headers: { 'Content-Type': 'application/json' },
    //   };

    // var request = new Request(url, params);
    // fetch(request)
    //   .then(res => res.json())
    //   .catch((err) => {
    //     return "error";
    //   })
    //   .then(response => {
    //     this.setState({ status: response })
    //     var respuesta = response

    //   })
    // console.log('respuesta del fetch')
  }


}


export default Register;



