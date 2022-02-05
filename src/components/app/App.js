import "./App.css";
import {  Routes, Route } from "react-router-dom";

import Women from "../../pages/product-page/Women";
import Main from "../../pages/main-page/Main";
import AboutUs from "../../pages/about/AboutUs";
import Men from "../../pages/product-page/Men";
// import Header from "../header/Header";
import Error from "../../pages/Error";
import { Layout } from "../../components/Layout";

function App() {
  return (
    <>
      {/* <Header></Header> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Main />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Women" element={<Women />}></Route>
          <Route path="Men" element={<Men />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
