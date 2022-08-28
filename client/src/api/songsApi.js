/* eslint-disable no-undef */
const songsApi = {
  getAll: (params) => {
    const url = "/songs";
    return axiosClient.get(url, { params });
  },
};

export default songsApi;
