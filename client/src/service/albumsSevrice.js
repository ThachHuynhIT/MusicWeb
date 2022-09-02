import { httpRequests } from "../utils";
export const getAllAlbum = async () => {
  try {
    const res = await httpRequests.get("album");

    return res.album;
  } catch (error) {
    console.log(error);
  }
};
