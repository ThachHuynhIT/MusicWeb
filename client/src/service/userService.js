import { httpRequests } from "../utils";
export const register = (user) => {
  return httpRequests
    .post("/user/signupStore", user)
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
    .post("/user/author", user)
    .then((response) => {
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
          msgBody: "Sai tai khoan hoac",
          msgError: true,
        },
        err,
      };
    });
};
