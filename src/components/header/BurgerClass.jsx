import React, { useState } from "react";
import search from "../header/images/search.svg";
import planet from "../header/images/planet.svg";
import user from "../header/images/user.svg";
import shopcart from "../header/images/shopcart.svg";

import { Link } from "react-router-dom";
import "./header.css";
import classNames from "classnames";

const linkes = [
  {
    id: 1,
    path: "AboutUs",
    title: "About Us",
    class: "about",
  },
  {
    id: 2,
    path: "Women",
    title: "Women",
    class: "women",
  },
  {
    id: 3,
    path: "Men",
    title: "Men",
    class: "men",
  },
  {
    id: 4,
    path: "Beauty",
    title: "Beauty",
    class: "beauty",
  },
  {
    id: 5,
    path: "Accessories",
    title: "Accessories",
    class: "accessories",
  },
  {
    id: 6,
    path: "Blog",
    title: "Blog",
    class: "blog",
  },
  {
    id: 7,
    path: "Contact",
    title: "Contact",
    class: "contact",
  },
];

const BurgerClass = () => {
  const [isMobile, setIsMobile] = useState(false);

  const onClickMenu = () => {
    setIsMobile(!isMobile);
  };
  return (
    <>
      <div className="navbar" >
        <div >
          <Link to="/" className="header_logo" data-test-id="header-logo-link">
            CleverShop
          </Link>
        </div>

        <div
          data-test-id="burger-menu"
          className={classNames("nav-links", { "nav-links-mobile": isMobile })}
          onClick={() => setIsMobile(false)}
        >
          {linkes.map((i) => (
            <>
              <Link
                key={i.id}
                to={`/${i.path}`}
                className={i.class}
                data-test-id={`menu-link-${i.path}`}
              >
                {i.title}
              </Link>
            </>
          ))}
        </div>

        <div className="subscribe">
          <img src={search} alt="" />
          <img src={planet} alt="" />
          <img src={user} alt="" />
          <img src={shopcart} alt="" />
          <div
            className="burgerMenu"
            data-test-id="burger-menu-btn"
            onClick={onClickMenu}
          >
            {isMobile ? (
              <>
                <span className="open1 span"></span>
                <span className="open2 span"></span>
                <span className="open3 span"></span>{" "}
              </>
            ) : (
              <>
                {" "}
                <span className="close1 span"></span>
                <span className="close2 span"></span>
                <span className="close3 span"></span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerClass;
