const addProduct = (state, action) => {
  const updatedProduct = [...state.product];
  const UpdatedItemIndex = updatedProduct.findIndex(
    (item) => item.id === action.payload.id
  );
  if (UpdatedItemIndex < 0) {
    updatedProduct.push({ ...action.payload, quantity: 1 });
  } else {
    const updatedItem = { ...updatedProduct[UpdatedItemIndex] };
    updatedItem.quantity++;
    updatedProduct[UpdatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    product: updatedProduct,
    total: state.total + action.payload.price,
  };
};
const removeProduct = (state, action) => {
  const updatedProduct = [...state.product];
  const UpdatedItemIndex = updatedProduct.findIndex(
    (item) => item.id === action.payload.id
  );
  const updatedItem = { ...updatedProduct[UpdatedItemIndex] };
  if (updatedItem.quantity === 1) {
    const filteredProduct = updatedProduct.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      product: filteredProduct,
      total: state.total - action.payload.price,
    };
  } else {
    updatedItem.quantity--;
    updatedProduct[UpdatedItemIndex] = updatedItem;
    return {
      ...state,
      product: updatedProduct,
      total: state.total - action.payload.price,
    };
  }
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addProduct(state, action);

    case "REMOVE_PRODUCT":
      return removeProduct(state, action);

    default:
      return state;
  }
};

export default productReducer;
