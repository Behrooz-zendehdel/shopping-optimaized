import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/ProductProvider";
import { Link } from "react-router-dom";
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
                  <div> {item.price * item.quantity} $</div>
                  <div className="group">
                    <button
                      onClick={() => decHandler(item)}
                      className="btnGroup"
                    >
                      -
                    </button>
                    <button className="btnGroup">{item.quantity}</button>
                    <button
                      onClick={() => incHandler(item)}
                      className="btnGroup"
                    >
                      +
                    </button>
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
          <ProductSummery total={total} cart={cart} />
        </section>
      </main>
    </Layout>
  );
};

export default BuyPage;

const ProductSummery = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
  return (
    <section className="productSummery">
      <h4 style={{ marginBottom: "20px" }}>product Summery</h4>
      <div className="productItemSummery">
        <p>total price</p>
        <p>{originalTotalPrice}</p>
      </div>
      <div className="productItemSummery hr">
        <p>discount price</p>
        <p>{originalTotalPrice - total} $</p>
      </div>
      <div className="productItemSummery ">
        <p>net price</p>
        <p>{total}$</p>
      </div>
      <Link to="/checkout">
        <button className="btn" style={{ marginTop: "20px", width: "100%  " }}>
          checkout
        </button>
      </Link>
    </section>
  );
};
