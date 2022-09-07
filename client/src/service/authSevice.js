import { httpRequests } from "../utils";
export const getAuthen = async () => {
  try {
    const res = await httpRequests.get(`api/user/authen`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
