import { httpRequests } from "../utils";
export const getAllAlbum = async (page) => {
  try {
    const res = await httpRequests.get(`api/media/get-album`);

    return res;
  } catch (error) {
    console.log(error);
  }
};
