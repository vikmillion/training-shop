import React from 'react';
import { Link } from "react-router-dom";
import v from "../Women/images/v.svg";
import classes from "./Men.module.css";

function TopBarMen(props) {
    return (
      <div>
        <div className={classes.menu_item}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <img src={v} alt=""></img>
          <Link to="/Men" className={classes.link}>
            Men
          </Link>
        </div>
      </div>
    );
}

export default TopBarMen;