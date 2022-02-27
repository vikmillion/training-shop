import React from "react";
import search from "../header/images/search.svg";
import planet from "../header/images/planet.svg";
import user from "../header/images/user.svg";
import shopcart from "../header/images/shopcart.svg";
import classes from "./nav.module.css";
import { Link, NavLink } from "react-router-dom";

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

function Nav(props) {
  return (
    <>
      <div className={classes.container}>
        {" "}
        <div className={classes.div2}>
          <Link
            to="/"
            className={classes.header_logo}
            data-test-id="header-logo-link"
          >
            CleverShop
          </Link>
        </div>
        <div className={classes.box}>
        {linkes.map((i) => (
          <>
            <NavLink
              key={i.id}
              to={`/${i.path}`}
              
              className={classes.div3  }
              data-test-id={`menu-link-${i.path}`}
            >
              {" "}
              {i.title}{" "}
            </NavLink>
          </>
        ))}</div>
        <div className={classes.div4}>
          <img src={search} alt="" />
          <img src={planet} alt="" />
          <img src={user} alt="" />
          <img src={shopcart} alt="" />
        </div>
      </div>
    </>
  );
}

export default Nav;
