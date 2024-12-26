import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import "./index.css";
// Import Images
import bannermens from "./Assets/bannermens.png";
import bannerwoments from "./Assets/bannerwomens.png";
import bannerkids from "./Assets/bannerkids.png";

export default function App() {
  return (
    <main className="bg-primary text-tertiary flex flex-col min-h-screen">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Category category="" banner={bannermens} />} />
          <Route path="/womens" element={<Category category="" banner={bannerwoments} />} />
          <Route path="/kids" element={<Category category="" banner={bannerkids} />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </main>
  );
}
