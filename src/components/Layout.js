import {  Outlet } from "react-router-dom";
import TopBar from "./header/TopBar";

import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <>
      <div className="header" data-test-id="header">
        <TopBar />
        <Header></Header> 
      </div>

      <Outlet />
      <footer data-test-id="footer">
        <Footer></Footer>
      </footer>
    </>
  );
};
export { Layout };
