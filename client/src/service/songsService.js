import { httpRequests } from "../utils";
export const getSongsFromAlbum = async (id) => {
  try {
    const res = await httpRequests.get(`album/{id}}`);
    return res.songs;
  } catch (error) {
    console.log(error);
  }
};
