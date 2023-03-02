import { USER_LOGIN, USER_REGISTER } from "../actionType";

const initialState = {
  newUser: "",
  user: "",
};

const userReduce = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        newUser: action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReduce;
