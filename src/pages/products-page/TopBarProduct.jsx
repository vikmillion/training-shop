import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Product.module.css';
import v from './images/v.svg';

function TopBarProduct(props) {
    return (
      <div>
        <div className={classes.menu_item}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <img src={v} alt=""></img>
          <Link to="/WomenMain" className={classes.link}>
            Women
          </Link>
          <img src={v} alt=""></img>
          <Link to="/Product" className={classes.link}>
            Product
          </Link>
        </div>
      </div>
    );
}

export default TopBarProduct;