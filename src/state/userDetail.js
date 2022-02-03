import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  userDetail: {
    name: '',
    phone: '',
    imageUri: '',
  },
  loggedIn: false,
};

const REGISTER_USER = 'registerUser';
const TOGGLE_LOG_IN = 'toggleLogIn';

export function registerUser(name, number, imageUri) {
  return async dispatch => {
    try {
      AsyncStorage.setItem('userName', name);
      AsyncStorage.setItem('userNumber', number);
      AsyncStorage.setItem('userImage', imageUri);
      AsyncStorage.setItem('loggedIn', 'true');
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: REGISTER_USER,
      payload: {
        name,
        number,
        imageUri,
      },
    });
  };
}

export function toggleLogIn(state) {
  return async dispatch => {
    try {
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: TOGGLE_LOG_IN,
      payload: {
        state,
      },
    });
  };
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const newUserDetail = {
        name: action.payload.name,
        phone: action.payload.number,
        imageUri: action.payload.imageUri,
      };
      return {...state, userDetail: newUserDetail, loggedIn: true};
    case TOGGLE_LOG_IN:
      return {...state, loggedIn: action.payload.state};
    default:
      return state;
  }
};

export default userReducer;
