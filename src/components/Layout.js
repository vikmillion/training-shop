import { Link, Outlet } from "react-router-dom";
import TopBar from "./header/TopBar";
import search from './header/images/search.svg'
import planet from './header/images/planet.svg'
import user from './header/images/user.svg'
import shopcart from './header/images/shopcart.svg'

const Layout = () => {
  return (
    <>
      <div className="header" data-test-id="header">
        <header>
          <TopBar />
          <div className="container-1">
            <div className="box-1">
              {/* className="linkes" */}
              <Link to="/" className="CleverShop">
                {/*  */}
              CleverShop
            </Link>
            <Link to="/Women" className="colorblack">
              Women
            </Link>
            <Link to="/Men" className="colorblack">
              Men
            </Link>
            <Link to="/Beauty" className="colorblack">
              Beauty
            </Link>
            <Link to="/Accessories" className="colorblack">
              Accessories
            </Link>
            <Link to="/Blog" className="colorblack">
              Blog
            </Link>
            <Link to="/Contact" className="colorblack">
              Contact
            </Link></div>
          
          <div className="box-2">
              <img src={search} alt="" />
              <img src={planet} alt="" />
              <img src={user} alt="" />
              <img src={shopcart} alt="" />
          </div></div>
        </header>
      </div>

      <Outlet />
      <footer>2022</footer>
    </>
  );
};
export { Layout };
