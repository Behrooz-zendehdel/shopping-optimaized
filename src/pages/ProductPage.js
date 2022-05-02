import Layout from "../Layout/Layout";
import * as data from "../data";
import "./productpage.css";
import { useCart, useCartActions } from "../Providers/ProductProvider";
import { CheckInProduct } from "../utils/CheckInProduct";
import { toast } from "react-toastify";

const ProductPage = () => {
  const dispatch = useCartActions();
  const { cart } = useCart();
  const addProductHandler = (product) => {
    toast.success(`${product.name} add to cart`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
                <div className="productImage">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="productDesc">
                  <p>{product.name}</p>
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    {product.price} $
                  </p>
                  <button
                    className="btn"
                    onClick={() => addProductHandler(product)}
                  >
                    {CheckInProduct(cart, product) ? "in cart" : "add to cart"}
                  </button>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default ProductPage;
