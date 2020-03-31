import React, { Component } from 'react'

class PostRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }

  }

  componentDidMount() {
    const rut = '121081784'
    const email = 'floyd70s@gmail.com'
    const password = 'Galloviejo2'
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'rut': rut, 'email': email, 'password': password })
    };

    return  fetch('http://192.168.0.93:3977/api/get-user-by-rut', requestOptions, { mode: 'cors' })
      // fetch('http://192.168.0.93:3977/api/get-users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });
  }

  /**
       * render

       * Render UI
       */
  render() {

    const { isLoaded, items } = this.state;

    const myObjStr = JSON.stringify(items);
    console.log(myObjStr);

    if (!isLoaded)
      return <div>Loading...</div>;
    return (
      <div>
        <center><h1>Usuarios registrados</h1></center>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{items.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{items.account}</h6>
            <p class="card-text">{items.bank} - {items.bank} </p>
          </div>
        </div>
      </div>
    );
  }

}

export default  PostRequest ;

































// function login(rut, email, password) {

//   console.log(rut + ' ' + email + ' ' + password)
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     //body: JSON.stringify({ 'rut': rut, 'email': email, 'password': password })
//     body: JSON.stringify({ title: 'React POST Request Example' })
//   };
//   console.log('BODY--->' + requestOptions.body)
//   // return fetch('http://192.168.0.93:3977/api/get-user-by-rut', requestOptions)
//   return fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
//     .then(response => {
//       console.log(response.statusText)
//       if (!response.ok) throw Error(response.status);
//       return response;
//     })
//     .then(response => console.log("ok"))
//     .catch(error => console.log(error));

// }

