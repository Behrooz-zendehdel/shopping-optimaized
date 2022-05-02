import { createContext, useContext, useReducer } from "react";
import ProductReducer from "./productReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initailState = {
  cart: [],
  total: 0,
};

const ProductProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(ProductReducer, initailState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default ProductProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
