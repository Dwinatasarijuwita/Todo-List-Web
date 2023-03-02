import { FETCH_DATA_CATEGORY } from "../actionType";
import Swal from "sweetalert2";

export const actionSetCategory = (payload) => {
  return {
    type: FETCH_DATA_CATEGORY,
    payload,
  };
};

export const fetchDataCategory = () => {
  return (dispatch) => {
    fetch("http://localhost:4001/categories", {
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
        dispatch(actionSetCategory(data));
      });
  };
};

export const newCategory = (data) => {
  return (dispatch, getState) => {
    fetch("http://localhost:4001/categories", {
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
        dispatch(fetchDataCategory());
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

export const deleteCategory = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:4001/categories/${id}`, {
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
        dispatch(fetchDataCategory());
        Swal.fire({
          title: "Success",
          type: "success",
          text: "Your data has been deleted.",
        });
      });
  };
};
