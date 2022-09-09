import { httpRequests } from "../utils";
import Cookies from "js-cookie";

export const createPlayList = (playlist) => {
  const userId = Cookies.get("userId");
  return httpRequests
    .post(`api/playlist/create-playlist/${userId}`, playlist)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.code === "ERR_NETWORK") {
        return { message: error.message, isSuccess: false };
      }
      console.log(error);
      return { message: error.response.data, isSuccess: false };
    });
};
export const getPlayList = async () => {
  const userId = Cookies.get("userId");
  try {
    const res = await httpRequests.get(`api/media/song-album/${userId}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};