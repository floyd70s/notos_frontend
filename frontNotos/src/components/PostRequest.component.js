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
    const password = 'Galloviejo1'
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'rut': rut, 'email': email, 'password': password })
    };
    return fetch('http://192.168.0.93:3977/api/get-user-by-rut', requestOptions, { mode: 'no-cors' })
      .then(res => res.json())
      .catch((err) => {
        console.log(err);
      })
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });
  }

  render() {

      const { isLoaded, items } = this.state;

      for (var _id in items) {
        console.log(' name=' + _id  + ' value=' + items[_id].rut);
    }



    if (!isLoaded)
      return <div>Loading...</div>;
    return (
      <div>
        <center><h1>Usuarios registrados</h1></center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{items['user'].name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{items['user'].rut}</h6>
            <p className="card-text">{items['user'].bank} - {items['user'].email} </p>
          </div>
        </div>
      </div>
    );
  }

}

export default PostRequest;
