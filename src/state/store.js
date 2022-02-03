import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

//import chatReducer from "./chatEngine";
import userReducer from './userDetail';
import imageReducer from './imageHandling';

const rootReducer = combineReducers({
  image: imageReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;
