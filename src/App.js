import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/BlogPage";
import BuyPage from "./pages/BuyPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProductProvider from "./Providers/ProductProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";
import AuthProvider from "./Providers/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
