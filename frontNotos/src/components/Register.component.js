import React from 'react'

const validate = values => {
  const errors = {}

  if (!values.name_1) {
    errors.name_1 = 'El nombre de la iniciativa es obligatorio'
  }
  if (!values.description) {
    errors.description = 'La descripción de la iniciativa es obligatoria'
  }
  if (!values.name) {
    errors.name = 'El nombre del responsable es obligatorio'
  }

  // if (!values.rut) {
  //   errors.rut = 'El rut del responsable es obligatorio'
  // }
  // else {
  //   if (validaRut(values.rut)) {
  //     errors.rut = 'RUT incorrecto'
  //   }
  // }
  // if (!values.email) {
  //   errors.email = 'El email del responsable es obligatorio'
  // }
  // if (!values.phone) {
  //   errors.phone = 'El teléfono del responsable es obligatorio'
  // }
  // if (!values.account_type) {
  //   errors.account_type = 'Seleccione un tipo de cuenta'
  // }
  // if (!values.bank) {
  //   errors.bank = 'Seleccione el banco'
  // }
  // if (!values.bank_account) {
  //   errors.bank_account = 'El número de cuenta bancaria es obligatorio'
  // }
  // if (!values.password) {
  //   errors.password = 'El password debe cumplir: A lo menos 1 Mayúscula - 1 Número y largo minimo de 8 '
  // }
  return errors
}

function validaRut(rut) {
  return true;

}

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
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
      status: [],
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleClick(e) {
    e.preventDefault()

    const { errors, ...noErrors } = this.state
    const result = validate(noErrors)

    if (Object.keys(result)) {
      return this.setState({ errors: result })
    }
    JSON.stringify(this.state)
    const values = JSON.stringify(this.state)
    this.UserExist(values.email, values.password, values.rut)


  }



  render() {
    const { name_1, description, name, rut, email, phone, account_type, bank, bank_account, password, password_2 } = this.state
    const { errors } = this.state
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form>
          <h3>Inscripción</h3>
          <h3>Datos de la Iniciativa</h3>
          <div className="form-group">
            {errors.name_1 && <label class="text-danger">{errors.name_1}</label>}
            <input type="text" required className="form-control" placeholder="Nombre Iniciativa" name="name_1" value={name_1} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            {/* <label>Descripción</label> */}
            {errors.name_1 && <label class="text-danger">{errors.description}</label>}
            <textarea required name="description" className="form-control" placeholder="Ingresa una Descripción de tu iniciativa, esta deber ser lo mas clara posible." rows="7" cols="80" value={description} onChange={this.handleChange}></textarea>
          </div>
          <h3>Datos del Responsable</h3>
          <div className="form-group">
            {/* <label>Nombre</label> */}
            {errors.name_1 && <label class="text-danger">{errors.name}</label>}
            <input required type="text" className="form-control" placeholder="Nombre Responsable" name="name" value={name} onChange={this.handleChange} />
          </div>

          <div className="form-group">
            {/* <label>Rut</label> */}
            {errors.name_1 && <label class="text-danger">{errors.rut}</label>}
            <input required type="text" className="form-control" placeholder="Rut" name="rut" value={rut} onChange={this.handleChange} />
          </div>

          <div className="form-group">
            {/* <label>Correo</label> */}
            {errors.name_1 && <label class="text-danger">{errors.email}</label>}
            <input required type="email" className="form-control" placeholder="Correo" name="email" value={email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            {/* <label>Teléfono</label> */}
            {errors.name_1 && <label class="text-danger">{errors.phone}</label>}
            <input required type="phone" className="form-control" placeholder="Teléfono" name="phone" value={phone} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            {/* <label>Tipo de Cuenta</label> */}
            {errors.name_1 && <label class="text-danger">{errors.account_type}</label>}
            <select required id="accountType" name="account_type" className="form-control" value={account_type} onChange={this.handleChange}>
              <option>Cuenta Corriente</option>
              <option>Cuenta Vista</option>
            </select>
          </div>
          <div className="form-group">
            {/* <label>Banco</label> */}
            {errors.name_1 && <label class="text-danger">{errors.bank}</label>}
            <select required id="bank" name="bank" className="form-control" value={bank} onChange={this.handleChange}>
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
            {errors.name_1 && <label class="text-danger">{errors.bank_account}</label>}
            <input required type="text" className="form-control" placeholder="Nº Cuenta" name="bank_account" value={bank_account} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            {/* <label>Password</label> */}
            {errors.name_1 && <label class="text-danger">{errors.password}</label>}
            <input required type="password" className="form-control" placeholder="Contraseña" name="password" value={password} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            {/* <label>Password_2</label> */}
            <input required type="password" className="form-control" placeholder="Repetir Contraseña" name="password_2" value={password_2} onChange={this.handleChange} />
          </div>
          <button className="btn btn-primary btn-block" onClick={(e) => this.handleClick(e)}>Inscribir</button>
          <p className="forgot-password text-right">
            usted ya se encuentra registrado <a href="#login">ingresar?</a>
          </p>
        </form>

        <div>
          <h2>Values of the form</h2>
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
    var role = 'cat1'
    var date = '29-02-2020'
    var status = 'CREATED'
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


