import { createContext, useContext, useReducer } from "react";
import ProductReducer from "./productReducer";

const ProductContext = createContext();
const ProductContextDispatcher = createContext();

const initailState = {
  product: [],
  total: 0,
};

const ProductProvider = ({ children }) => {
  const [product, dispatch] = useReducer(ProductReducer, initailState);
  return (
    <ProductContext.Provider value={product}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(ProductContext);
export const useProductActions = () => useContext(ProductContextDispatcher);
