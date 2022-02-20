import React from 'react';
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

function NavLogo(props) {
    return (
      <div className={classes.div2}>
        <Link
          to="/"
          className={classes.header_logo}
          data-test-id="header-logo-link"
        >
          CleverShop
        </Link>
      </div>
    );
}

export default NavLogo;