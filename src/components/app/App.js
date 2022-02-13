import "./App.css";
// import "../training-shop/src/style/App.css";
import { Routes, Route } from "react-router-dom";

import Women from "../../pages/product-page/Women/Women";
import Main from "../../pages/main-page/Main";
import Men from "../../pages/product-page/Men/Men";
// import Header from "../header/Header";
import Error from "../../pages/Error";
import { Layout } from "../../components/Layout";
import Beauty from './../../pages/beauty/Beauty';
import Accessories from './../../pages/accessories/Accessories';
import Blog from './../../pages/blog/Blog';
import Contact from './../../pages/contact/Contact';
import AboutUs from "../../pages/about/AboutUs";
import Product from "../../pages/products-page/Product";




function App() {
  return (
    <>
      <div className="app" data-test-id="app">
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="" element={<Main />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="Women" element={<Women/>} />
            <Route path="Men" element={<Men />}></Route>
            <Route path="Beauty" element={<Beauty />}></Route>
            <Route path="Accessories" element={<Accessories />}></Route>
            <Route path="Blog" element={<Blog />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="Product" element={<Product />}></Route>
            <Route path="*" element={<Error />}></Route>

          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
