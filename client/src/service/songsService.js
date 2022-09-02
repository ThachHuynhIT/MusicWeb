import { httpRequests } from "../utils";
export const getSongsFromAlbum = async () => {
  try {
    const res = await httpRequests.get(`api/media/song-type/Pop/1`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
