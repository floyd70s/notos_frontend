import React, { Component } from 'react';
// import Post from '../components/Post';
import Post from '../../post/containers/Post';
//import { getPosts } from '../utils/api';
import { getPosts } from '../../../utils/api';

import {Container} from "reactstrap"

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    getPosts()
      .then((res) => {
        this.setState({
          posts: res.data,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  renderPosts = () => {
    const { posts } = this.state;

    return posts.map(post => {
      const { name, description, _id } = post;

      return (
        <Post
          key={_id}
          _id={_id}
          name={name}
          description={description}
        />
      );
    });
  }

  render() {
    const { loading } = this.state;

    return (
       <Container>
        {loading ? 'loading...' : this.renderPosts()}
       </Container>
    );
  }
}

export default Posts;
