import { Link, Outlet } from "react-router-dom";
import TopBar from "./header/TopBar";

const Layout = () => {
  return (
    <>
      <div className="header" data-test-id="header">
        <header>
          <TopBar/>
     
          <Link to="/" className="CleverShop link">
            CleverShop
          </Link>
          <Link to="/AboutUs" className="link">
            About Us
          </Link>
          <Link to="/Women" className="link">
            Women
          </Link>
          <Link to="/Men" className="link">
            Men
          </Link>
        </header>
      </div>

      <Outlet />
      <footer>2022</footer>
    </>
  );
};
export { Layout };
