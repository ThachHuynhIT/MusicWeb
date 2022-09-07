import { httpRequests } from "../utils";
export const getAllAlbum = async (page) => {
  try {
    const res = await httpRequests.get(`api/media/get-album/${page}`);

    return res.album;
  } catch (error) {
    console.log(error);
  }
};
export const getAlbumType = async (type, page) => {
  try {
    const res = await httpRequests.get(`api/media/get-album/${type}/${page}`);
    console.log(res);
    return res.album;
  } catch (error) {
    console.log(error);
  }
};
