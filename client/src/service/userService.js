import { httpRequests } from "../utils";
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

export const isAuthen = () => {
  return httpRequests.get("api/user/authen").then((res) => {
    console.log(res);
    if (res.status !== 401) {
      return res.json().then((data) => data);
    } else {
      return { user: { username: "" } };
    }
  });
};
