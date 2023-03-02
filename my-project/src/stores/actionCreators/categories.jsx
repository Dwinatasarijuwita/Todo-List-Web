import { FETCH_DATA_CATEGORY } from "../actionType";

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
