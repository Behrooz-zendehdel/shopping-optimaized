import Layout from "../Layout/Layout";
import { useProduct, useProductActions } from "../Providers/ProductProvider";
import { Link } from "react-router-dom";
import "./buypage.css";
const BuyPage = () => {
  const productState = useProduct();
  const { product, total } = productState;
  const dispatch = useProductActions();
  if (!product.length)
    return (
      <Layout>
        <main className="buying">
          <h1>empty shop page </h1>
          <Link to="/product">
            <button className="btn">Go to product page</button>
          </Link>
        </main>
      </Layout>
    );

  const incHandler = (productItem) => {
    dispatch({ type: "ADD_TO_CART", payload: productItem });
  };
  const decHandler = (productItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: productItem });
  };
  return (
    <Layout>
      <main className="container">
        <section className="productCenter">
          <section className="productItemList">
            {product.map((item) => {
              return (
                <div className="productItem">
                  <div className="productImage">
                    <img src={item.image} alt="item.name" />
                  </div>
                  <div> {item.name}</div>
                  <div> {item.price * item.quantity}</div>
                  <div>
                    <button onClick={() => decHandler(item)}>remove</button>
                    <button>{item.quantity}</button>
                    <button onClick={() => incHandler(item)}>add</button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="productSummery">
            <h4>product Summery</h4>
            <div>{total} $</div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default BuyPage;
