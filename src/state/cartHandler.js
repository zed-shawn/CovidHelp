const initialState = {
  products: [],
};
const ADD_TO_CART = 'addToCart';
const CLEAR_CART = 'clearCart';

export function addToCart(id) {
  return async dispatch => {
    try {
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: ADD_TO_CART,
      payload: {
        data,
      },
    });
  };
}
export function clearCart() {
  return async dispatch => {
    try {
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: CLEAR_CART,
      payload: {},
    });
  };
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedData = state.products;
      updatedData.push(action.payload.data);
      return {...state, products: updatedData};
    case CLEAR_CART:
      return {...state, products: []};

    default:
      return state;
  }
};

export default cartReducer;
