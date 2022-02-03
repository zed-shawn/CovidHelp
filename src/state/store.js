import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

//import chatReducer from "./chatEngine";
import userReducer from "./userDetail";

const rootReducer = combineReducers({
  //chat: chatReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;