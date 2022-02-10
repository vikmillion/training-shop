import { Link, Outlet } from "react-router-dom";
import TopBar from "./header/TopBar";
import search from "./header/images/search.svg";
import planet from "./header/images/planet.svg";
import user from "./header/images/user.svg";
import shopcart from "./header/images/shopcart.svg";

const Layout = () => {
  return (
    <>
      <div className="header" data-test-id="header">
        <header>
          <TopBar />
          <div className="menu" data-test-id='menu'>
            <div className="box-1">
           
              <Link to="/" className="header-nav-logo">
                CleverShop
              </Link>
              <Link
                to="/AboutUs"
                className="menu-item colorblack"
                data-test-id={"menu-link"}
              >
                About Us
              </Link>
              {/* <Link to="/AboutUs" className="colorblack">
                About Us
              </Link> */}
              <Link
                to="/Women"
                className="menu-item colorblack"
                data-test-id={"menu-link"}
              >
                Women
              </Link>
              <Link
                to="/Men"
                className="menu-item colorblack"
                data-test-id={"menu-link"}
              >
                Men
              </Link>
              <Link
                to="/Beauty"
                className="menu-item colorblack"
                data-test-id={"menu-link"}
              >
                Beauty
              </Link>
              <Link
                to="/Accessories"
                className="menu-item colorblack"
                data-test-id={"menu-link"}
              >
                Accessories
              </Link>
              <Link
                to="/Blog"
                className="menu-item colorblack"
                data-test-id={"menu-link"}
              >
                Blog
              </Link>
              <Link
                to="/Contact"
                className="menu-item colorblack"
                data-test-id={"menu-link"}
              >
                Contact
              </Link>
            </div>

            <div className="box-2">
              <img src={search} alt="" />
              <img src={planet} alt="" />
              <img src={user} alt="" />
              <img src={shopcart} alt="" />
            </div>
          </div>
        </header>
      </div>

      <Outlet />
      <footer>2022</footer>
    </>
  );
};
export { Layout };
