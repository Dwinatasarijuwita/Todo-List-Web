import { FETCH_DATA_TASKS } from "../actionType";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_TASKS:
      return {
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
