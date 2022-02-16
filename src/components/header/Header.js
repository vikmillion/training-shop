import { Link } from "react-router-dom";
import search from "../header/images/search.svg";
import planet from "../header/images/planet.svg";
import user from "../header/images/user.svg";
import shopcart from "../header/images/shopcart.svg";
import classes from './TopBar.module.css';


const linkes = [
  {
    id: 1,
    path: "AboutUs",
    title: "About Us",
  },
  {
    id: 2,
    path: "Women",
    title: "Women",
  },
  {
    id: 3,
    path: "Men",
    title: "Men",
  },
  {
    id: 4,
    path: "Beauty",
    title: "Beauty",
  },
  {
    id: 5,
    path: "Accessories",
    title: "Accessories",
  },
  {
    id: 6,
    path: "Blog",
    title: "Blog",
  },
  {
    id: 7,
    path: "Contact",
    title: "Contact",
  },

];


function Header() {
  return (
    <>
      <nav data-test-id={"menu-link"}>
        <div className={classes.menu} data-test-id="menu">
          <div className={classes.containerLink}>
            <div className={classes.box_1}>
              <Link
                to="/"
                className={classes.header_logo}
                data-test-id="header-logo-link"
              >
                CleverShop
              </Link>
            
                {/* <Link
                  to="/AboutUs"
                  className={classes.menu_item}
                  data-test-id={"menu-link"}
                >
                  About Us
                </Link> */}
              {linkes.map((i) => <>
                
                <Link key={i.id} to={`/${i.path}`} className={classes.menu_item} data-test-id={`menu-link-${i.path}`}> {i.title} </Link>
              </>)}
                {/* <Link
                  to="/Women"
                  className={classes.menu_item}
                  data-test-id={"menu-link"}
                >
                  Women
                </Link>
                <Link
                  to="/Men"
                  className={classes.menu_item}
                  data-test-id={"menu-link"}
                >
                  Men
                </Link>
                <Link
                  to="/Beauty"
                  className={classes.menu_item}
                  data-test-id={"menu-link"}
                >
                  Beauty
                </Link>
                <Link
                  to="/Accessories"
                  className={classes.menu_item}
                  data-test-id={"menu-link"}
                >
                  Accessories
                </Link>
                <Link
                  to="/Blog"
                  className={classes.menu_item}
                  data-test-id={"menu-link"}
                >
                  Blog
                </Link>
                <Link
                  to="/Contact"
                  className={classes.menu_item}
                  data-test-id={"menu-link"}
                >
                  Contact
                </Link> */}
            </div>

            <div className={classes.box_2}>
              <button>
                <img src={search} alt="" />
              </button>
              <button>
                {" "}
                <img src={planet} alt="" />
              </button>
              <button>
                <img src={user} alt="" />
              </button>
              <button>
                <img src={shopcart} alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
