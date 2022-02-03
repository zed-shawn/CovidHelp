import Listing from '../models/listing';

const initialState = {
  activeListings: [],
};
const LOAD_LISTINGS = 'loadListings';
const ADD_LISTING = 'addListing';

const UPVOTE_HANDLER = 'upvoteHandler';
const DOWNVOTE_HANDLER = 'downvoteHandler';

export function loadListings(data) {
  return async dispatch => {
    try {
      const arr = data.map(a => {
        return new Listing(
          a.id,
          a.title,
          a.description,
          a.price,
          a.location,
          a.imageUri,
          a.reach,
          a.postTime,
          a.upvote,
        );
      });

      dispatch({
        type: LOAD_LISTINGS,
        payload: {arr},
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function addListing(title, description, price, imageUri) {
  return async (dispatch, getState) => {
    try {
      const location = Math.random() * 50;
      const reach = 1;
      const postTime = new Date().now();
      const id = getState().shop.activeListings.length + 1;
      const upvote = true;

      const data = new Listing(
        id,
        title,
        description,
        price,
        location,
        imageUri,
        reach,
        postTime,
        upvote,
      );

      dispatch({
        type: ADD_LISTING,
        payload: {
          data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function upvoteHandler(id) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: UPVOTE_HANDLER,
        payload: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function downvoteHandler(id) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: DOWNVOTE_HANDLER,
        payload: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LISTING:
      let newData = state.activeListings;
      newData.push(action.payload.data.data);
      return {...state, activeListings: newData};
    case LOAD_LISTINGS:
      return {...state, activeListings: action.payload.arr};
    case UPVOTE_HANDLER:
      let upvoteData = state.activeListings;
      upvoteData.find((o, i) => {
        if (o.id === action.payload.id) {
          if (upvoteData[i].upvote === false) {
            upvoteData[i] = {
              ...upvoteData[i],
              reach: upvoteData[i].reach + 2,
              upvote: true,
            };
          } else if (upvoteData[i].upvote === undefined) {
            upvoteData[i] = {
              ...upvoteData[i],
              reach: upvoteData[i].reach + 1,
              upvote: true,
            };
          } else {
            upvoteData[i] = {
              ...upvoteData[i],
              reach: upvoteData[i].reach - 1,
              upvote: undefined,
            };
          }
          return true; // stop searching
        }
      });
      return {...state, activeListings: upvoteData};
    case DOWNVOTE_HANDLER:
      let downvoteData = state.activeListings;
      downvoteData.find((o, i) => {
        if (o.id === action.payload.id) {
          if (downvoteData[i].upvote === true) {
            downvoteData[i] = {
              ...downvoteData[i],
              reach: downvoteData[i].reach - 2,
              upvote: false,
            };
          } else if (downvoteData[i].upvote === undefined) {
            downvoteData[i] = {
              ...downvoteData[i],
              reach: downvoteData[i].reach - 1,
              upvote: false,
            };
          } else if (downvoteData[i].upvote === false) {
            downvoteData[i] = {
              ...downvoteData[i],
              reach: downvoteData[i].reach + 1,
              upvote: undefined,
            };
          }
          return true; // stop searching
        }
      });
      return {...state, activeListings: downvoteData};
    default:
      return state;
  }
};

export default shopReducer;
