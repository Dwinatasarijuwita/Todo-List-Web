import { FETCH_DATA_TASKS } from "../actionType";
import Swal from "sweetalert2";

export const actionSetTasks = (payload) => {
  return {
    type: FETCH_DATA_TASKS,
    payload,
  };
};

export const fetchDataTasks = () => {
  return (dispatch) => {
    fetch("http://localhost:4001/tasks", {
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(actionSetTasks(data));
      });
  };
};

export const addTasks = (data) => {
  return (dispatch, getState) => {
    fetch("http://localhost:4001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
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
        dispatch(fetchDataTasks());
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

export const deleteTasks = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:4001/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchDataTasks());
        Swal.fire({
          title: "Success",
          type: "success",
          text: "Your data has been deleted.",
        });
      });
  };
};
