import { USER_LOGIN, USER_REGISTER } from "../actionType";
import { fetchDataTasks } from "./tasks";

import Swal from "sweetalert2";

export const actionCreateNewUser = (payload) => {
  return {
    type: USER_REGISTER,
    payload,
  };
};

export const register = (data) => {
  return (dispatch) => {
    fetch("http://localhost:4001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(actionCreateNewUser(data));
        Swal.fire({
          title: "Success",
          type: "success",
          text: "Your data has been saved.",
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const actionLoginSetLogin = (payload) => {
  return {
    type: USER_LOGIN,
    payload,
  };
};

export const login = (data) => {
  // console.log(data);
  return (dispatch) => {
    fetch("http://localhost:4001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        dispatch(fetchDataTasks());
        Swal.fire({
          title: "Success",
          type: "success",
          text: "you have successfully logged in",
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    Swal.fire({
      title: "Success",
      type: "success",
      text: "You have successfully logout.",
    });
  };
};
