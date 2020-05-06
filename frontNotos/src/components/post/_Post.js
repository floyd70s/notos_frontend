import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid #333;
  box-sizing: border-box;
  flex-grow: 1;
  margin: 10px;
  min-width: 280px;
  padding: 0 20px;
  width: 30%;
  background-color: #fff;
`;

const Post = ({ name, description, _id }) => {
  return (
    <Container>
      <h1>{name}</h1>
      <p>{description}</p>
      <Link to={`/post/${_id}`}>More</Link>
    </Container>
  );
};

export default Post;
