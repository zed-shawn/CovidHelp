const initialState = {
  media: [],
  mediaRaw: [],
};
const LOAD_MEDIA = 'loadMedia';
export function loadMedia(data) {
  return async dispatch => {
    try {
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: LOAD_MEDIA,
      payload: {
        data,
      },
    });
  };
}

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEDIA:
      let updatedData = state;
      console.log(action.payload);
      updatedData[route] = action.payload.data;

    default:
      return state;
  }
};

export default imageReducer;
