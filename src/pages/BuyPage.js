import Layout from "../Layout/Layout";
import { useProduct } from "../Providers/ProductProvider";
import { Link } from "react-router-dom";
import "./buypage.css";
const BuyPage = () => {
  const productState = useProduct();
  const { product } = productState;
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
  return (
    <Layout>
      <main className="container">
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
                  <button>remove</button>
                  <button>{item.quantity}</button>
                  <button>add</button>
                </div>
              </div>
            );
          })}
        </section>
        <section className="productSummery">product summery</section>
      </main>
    </Layout>
  );
};

export default BuyPage;
