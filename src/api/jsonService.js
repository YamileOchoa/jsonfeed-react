import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data;
};

export const getPosts = async () => {
  const { data } = await axios.get(`${BASE_URL}/posts`);
  return data;
};

export const getComments = async () => {
  const { data } = await axios.get(`${BASE_URL}/comments`);
  return data;
};
