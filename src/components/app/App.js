import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "../../pages/main-page/Main";
import Error from "../../pages/Error";
import Beauty from "./../../pages/beauty/Beauty";
import Accessories from "./../../pages/accessories/Accessories";
import Blog from "./../../pages/blog/Blog";
import Contact from "./../../pages/contact/Contact";
import AboutUs from "../../pages/about/AboutUs";
import Product from "../../pages/products-page/Product";
import Women1 from './../../pages/products-page/Women/Women1';
import Men1 from "../../pages/products-page/Men/Men1";
import TopBar from "../header/TopBar";
import BurgerClass from "../header/BurgerClass";
import Footer from "../footer/Footer";
import ProductsPage from "../../pages/products-page/ProductsPage";

function App() {
  return (
    <>
      <div className="app" data-test-id="app">
        <div className="header" data-test-id="header">
          <TopBar />
          <BurgerClass />
        </div>
        <Routes>
          <Route index path="" element={<Main />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route
            path="Women"
            element={<ProductsPage productType="women" />}
          ></Route>
          <Route
            path="Men"
            element={<ProductsPage productType="men" />}
          ></Route>

          <Route path="Beauty" element={<Beauty />}></Route>
          <Route path="Accessories" element={<Accessories />}></Route>
          <Route path="Blog" element={<Blog />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="product/*" element={<Product />}>
            <Route path="women/*">
              <Route path="1" element={<Women1 />}></Route>
              <Route path="2" element={<Women1 />}></Route>
              <Route path="3" element={<Women1 />}></Route>
              <Route path="4" element={<Women1 />}></Route>
              <Route path="5" element={<Women1 />}></Route>
              <Route path="6" element={<Women1 />}></Route>
              <Route path="7" element={<Women1 />}></Route>
              <Route path="8" element={<Women1 />}></Route>
            </Route>{" "}
            <Route path="men/*">
              <Route path="1" element={<Men1 />}></Route>
              <Route path="2" element={<Men1 />}></Route>
              <Route path="3" element={<Men1 />}></Route>
              <Route path="4" element={<Men1 />}></Route>
              <Route path="5" element={<Men1 />}></Route>
              <Route path="6" element={<Men1 />}></Route>
              <Route path="7" element={<Men1 />}></Route>
              <Route path="8" element={<Men1 />}></Route>
            </Route>
          </Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
