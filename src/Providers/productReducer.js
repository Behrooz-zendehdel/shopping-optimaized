const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
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
      return { ...state, product: updatedProduct };

    default:
      return state;
  }
};

export default productReducer;
