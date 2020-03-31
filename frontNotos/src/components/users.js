import React, { Component } from 'react'


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }

  }

  componentDidMount() {
     fetch('http://192.168.0.93:3977/api/get-users')
    //fetch('https://jsonplaceholder.typicode.com/users')
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
       *
       * Render UI
       */
  render() {

    const { isLoaded, items } = this.state;

    const myObjStr = JSON.stringify(items);
    console.log(myObjStr);
    //items.user.map(item => (

    if (!isLoaded)
      return <div>Loading...</div>;
    return (
      <div>
      <center><h1>Usuarios registrados</h1></center>
      {items.user.map((item) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{item.email}</h6>
            <p class="card-text">{item.phone} - {item.bank} </p>
          </div>
        </div>
      ))}
    </div>
    );
  }

}

export default Users
