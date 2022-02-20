import {  Outlet } from "react-router-dom";
import TopBar from "./header/TopBar";

import Footer from './footer/Footer';
// import Header2 from "./header/Header2";
// import Header from "./header/Header";
import BurgerClass from "./header/BurgerClass";

const Layout = () => {
  return (
    <>
      <div className="header" data-test-id="header">
        <TopBar />
        {/* <Header/> */}
        {/* <Header2></Header2> */}
        <BurgerClass/>
      </div>

      <Outlet ></Outlet>
   
     <Footer></Footer>
       
      

    </>
  );
};
export { Layout };
