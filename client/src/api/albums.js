import axiosClient from "./axiosClient";
const albumsApi = 
  axiosClient.get('/album');

export default albumsApi;
