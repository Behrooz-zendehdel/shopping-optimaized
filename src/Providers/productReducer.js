const addProduct = (state, action) => {
  const updatedCart = [...state.cart];
  const UpdatedItemIndex = updatedCart.findIndex(
    (item) => item.id === action.payload.id
  );
  if (UpdatedItemIndex < 0) {
    updatedCart.push({ ...action.payload, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[UpdatedItemIndex] };
    updatedItem.quantity++;
    updatedCart[UpdatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
    total: state.total + action.payload.offPrice,
  };
};
const removeProduct = (state, action) => {
  const updatedCart = [...state.cart];
  const UpdatedItemIndex = updatedCart.findIndex(
    (item) => item.id === action.payload.id
  );
  const updatedItem = { ...updatedCart[UpdatedItemIndex] };
  if (updatedItem.quantity === 1) {
    const filteredProduct = updatedCart.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      cart: filteredProduct,
      total: state.total - action.payload.offPrice,
    };
  } else {
    updatedItem.quantity--;
    updatedCart[UpdatedItemIndex] = updatedItem;
    return {
      ...state,
      cart: updatedCart,
      total: state.total - action.payload.offPrice,
    };
  }
};

// const deletedProduct = (state, action) => {
//   const updatedCart = [...state.cart];
//   const UpdatedItemIndex = updatedCart.findIndex(
//     (item) => item.id === action.payload.id
//   );
//   const deleteProduct = state.filter((item) => item.id !== action.payload.id);
//   return { ...state, cart: deleteProduct };
// };

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addProduct(state, action);

    case "REMOVE_PRODUCT":
      return removeProduct(state, action);
    // case "DELETE_PRODUCT":
    //   return deletedProduct(state, action);

    default:
      return state;
  }
};

export default productReducer;
