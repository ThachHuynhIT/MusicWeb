import { httpRequests } from "../utils";
export const getSongsFromAlbum = async (type) => {
  try {
    const res = await httpRequests.get(`api/media/song-type/${type}/1`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
