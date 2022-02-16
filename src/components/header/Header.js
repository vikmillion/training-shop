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
      <div data-test-id={"menu-link"}>
        
          <div className={classes.containerLink}data-test-id="menu">
          <div className={classes.box_1}>
            <div>
              <Link
                to="/"
                className={classes.header_logo}
                data-test-id="header-logo-link"
              >
                CleverShop
              </Link>
            </div>
            <div>
              {linkes.map((i) => <>
                
                <Link key={i.id} to={`/${i.path}`} className={classes.menu_item} data-test-id={`menu-link-${i.path}`}> {i.title} </Link>
              </>)}
       </div>
            </div>

            <div className={classes.box_2}>
              <div>
              {/* <button> */}
                <img src={search} alt="" /></div>
              {/* </button> */}
              {/* <button> */}
                {" "}
              <div> <img src={planet} alt="" /></div>
              {/* </button> */}
              {/* <button> */}
               <div> <img src={user} alt="" /></div>
              {/* </button> */}
              {/* <button> */}
               <div> <img src={shopcart} alt="" /></div>
              {/* </button> */}
            </div>
          
        </div>
      </div>
    </>
  );
}
export default Header;
