import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/BlogPage";
import BuyPage from "./pages/BuyPage";
import SignInPage from "./pages/SingInPage";
import SignUpPage from "./pages/SignUpPage";
import ProductProvider from "./Providers/ProductProvider";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
