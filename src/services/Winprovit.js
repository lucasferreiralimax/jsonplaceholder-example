import axios from "axios";

const api = "https://jsonplaceholder.typicode.com";

export async function getUserList() {
  const response = await axios
    .get(`${api}/users`)
  return response.data;
}

export async function getPostList() {
  const response = await axios
    .get(`${api}/posts`)
  return response.data;
}