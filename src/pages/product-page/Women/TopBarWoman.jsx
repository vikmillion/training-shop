import React from 'react';
import { Link } from 'react-router-dom';
import v from "../Women/images/v.svg";
import classes from "./Women.module.css";
 
function TopBarWoman(props) {
    return (
      <>
        <div className={classes.menu_item}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <img src={v} alt=""></img>
          <Link to="/WomenMain" className={classes.link}>
            Women
          </Link>
        </div>
      </>
    );
}

export default TopBarWoman;