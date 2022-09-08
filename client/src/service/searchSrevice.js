import { httpRequests } from "../utils";
export const search = async (name) => {
  try {
    const res = await httpRequests.get("api/media/searchSong", {
      params: {
        name,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
