import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

//import chatReducer from "./chatEngine";
import userReducer from './userDetail';
import imageReducer from './imageHandling';
import cartReducer from './cartHandler';
import shopReducer from './shopHandler';

const rootReducer = combineReducers({
  image: imageReducer,
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;
