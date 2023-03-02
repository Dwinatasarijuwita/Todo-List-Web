import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import categoryReduce from "./reducers/categoryReducer";
import taskReducer from "./reducers/taskReducer";
import userReduce from "./reducers/userReducer";

const rootReducer = combineReducers({
  users: userReduce,
  tasks: taskReducer,
  categories: categoryReduce,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
