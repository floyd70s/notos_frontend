import React, { Component } from 'react';
 //import { getPost } from '../utils/api';
import { getPost } from '../../../utils/api.js';
import { Link } from 'react-router-dom';


class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { _id } = this.props.match.params;
    getPost(_id)
      .then((res) => {
        const { name, description } = res.data[0];

        this.setState({
          name,
          description,
          loading: false,
        });
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { name, description, loading } = this.state

    return (
      loading ?
      'loading...'
      :
      <div>
        <Link to='/'>Back</Link>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default Post;
