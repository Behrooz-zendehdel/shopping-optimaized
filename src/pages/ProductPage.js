import Layout from "../Layout/Layout";
import * as data from "../data";
import "./productpage.css";
const ProductPage = () => {
  const addProductHandler = (product) => {
    console.log(product);
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
                  <button className="btn" onClick={addProductHandler(product)}>
                    add to cart
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
