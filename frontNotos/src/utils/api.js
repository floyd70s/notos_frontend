import axios from 'axios';

const BASE_URL = 'http://localhost:3977/api/get-campaigns'

export function getPosts() {
  return axios.get(BASE_URL);
}

export function getPost(_id) {
  return axios({
    method: 'get',
    url: BASE_URL,
    params: { _id },
  })
}

export function postPost({ name, description }) {
  return axios({
    method: 'post',
    url: BASE_URL,
    data: {
      name,
      description,
    }
  })
}
