import { FETCH_DATA_CATEGORY } from "../actionType";

const initialState = {
  categories: [],
};

const categoryReduce = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_CATEGORY:
      return {
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReduce;
