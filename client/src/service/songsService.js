import { httpRequests } from "../utils";
export const getSongsFromAlbum = async (name) => {
  try {
    const res = await httpRequests.get(`api/media/song-album/${name}/0`);

    return res.song;
  } catch (error) {
    console.log(error);
  }
};
