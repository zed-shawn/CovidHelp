const initialState = {
  media: [],
  mediaRaw: [],
};
const LOAD_MEDIA = 'loadMedia';
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

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEDIA:
      let updatedData = state;
      updatedData[action.payload.data.route] = action.payload.data.data;
      return {...state, updatedData};

    default:
      return state;
  }
};

export default imageReducer;
