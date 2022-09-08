import { httpRequests } from "../utils";
import Cookies from "js-cookie";

export const register = (user) => {
  return httpRequests
    .post("api/user/signup", user)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return {
        message: {
          msgBody: "Tao tai khoang khong thanh cong",
          msgError: true,
        },
        err,
      };
    });
};
export const login = (user) => {
  return httpRequests
    .post("api/user/login", user)
    .then((response) => {
      console.log(response);
      if (response.status !== 401) {
        return response.data;
      } else {
        return {
          user: { username: "" },
          message: { msgBody: "Error", msgError: true },
        };
      }
    })
    .catch((err) => {
      return {
        message: {
          msgBody: "Sai tai khoan hoac mat khau",
          msgError: true,
        },
        err,
      };
    });
};
export const logOut = () => {
  return httpRequests.get("/api/user/logout");
};

export const isAuthen = () => {
  const token = Cookies.get("access_token");
  return httpRequests.get(`api/user/authen/${token}`).then((res) => {
    if (res.status !== 401) {
      return res;
    } else {
      return { user: { username: "" } };
    }
  });
};
