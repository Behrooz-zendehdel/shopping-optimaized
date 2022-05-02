import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/ProductProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./buypage.css";
const BuyPage = () => {
  const cartState = useCart();
  const { cart, total } = cartState;
  const dispatch = useCartActions();
  if (!cart.length)
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

  // const deleteHanlder = (productItem) => {
  //   toast.error(`${cart.name} add to cart`);

  //   dispatch({ type: "DELETE_PRODUCT", payload: productItem });
  // };

  return (
    <Layout>
      <main className="container">
        <section className="productCenter">
          <section className="productItemList">
            {cart.map((item) => {
              return (
                <div className="productItem">
                  <div className="productImage">
                    <img src={item.image} alt="item.name" />
                  </div>
                  <div> {item.name}</div>
                  <div> {item.price * item.quantity}</div>
                  <div>
                    <button onClick={() => decHandler(item)}>-</button>
                    <button>{item.quantity}</button>
                    <button onClick={() => incHandler(item)}>+</button>
                    {/* <button
                      onClick={() => deleteHanlder(item)}
                      className="delete btn"
                    >
                      delete
                    </button> */}
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
