import { httpRequests } from "../utils";
export const getAllAlbum = async (page) => {
  try {
    const res = await httpRequests.get(`api/media/get-album/${page}`);

    return res.album;
  } catch (error) {
    console.log(error);
  }
};
