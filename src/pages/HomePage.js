import Layout from "../Layout/Layout";
import "./homepage.css";
// import imgProduct from "../assets/sabad.png";

const HomePage = () => {
  return (
    <Layout>
      <div className="header">
        <div className="container">
          <section className="section-title ">
            <div className="title">
              <h1 className="title-header">
                Managing business
                <br />
                Payments has never <br />
                been easier
              </h1>
              <p>
                End-To-end payments and finacial manegment in a single <br />
                soloution.Meet the right platform to help realize.
              </p>
              <div className="btn-title">
                <button className="btnhome ">Get Started</button>
                <button className="btnhome">See How it Works</button>
              </div>
            </div>
          </section>
          <section className="section-image">
            <div>
              {/* <img
              src={imgProduct}
              alt="img"
              style={{ width: "400px", height: "100%" }}
            /> */}
            </div>
          </section>
          <section></section>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
