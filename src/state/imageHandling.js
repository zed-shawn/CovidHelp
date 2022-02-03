const initialState = {
  media: [],
  mediaRaw: [],
};
const LOAD_MEDIA = 'loadMedia';
const CLEAR_MEDIA = 'clearMedia';

export function loadMedia(route, data) {
  return async dispatch => {
    try {
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: LOAD_MEDIA,
      payload: {route, data},
    });
  };
}
export function clearMedia() {
  return async dispatch => {
    try {
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: CLEAR_MEDIA,
      payload: {},
    });
  };
}

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEDIA:
      let updatedData = state;
      updatedData[action.payload.data.route] = action.payload.data.data;
      return {...state, updatedData};
    case CLEAR_MEDIA:
      return {...state, media: [], mediaRaw: []};

    default:
      return state;
  }
};

export default imageReducer;
