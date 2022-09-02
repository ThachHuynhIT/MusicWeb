import { httpRequests } from "../utils";
export const search = async (q, type = "less") => {
  try {
    const res = await httpRequests.get("album", {});
    return res.album;
  } catch (error) {
    console.log(error);
  }
};
