
import React from "react";
import classes from "./Main3.module.css";
import WomenMain from './../product-page/Women/WomenMain';
import MainMen from './../product-page/Men/MainMen';


function Main3(props) {
  return (
    <>
      <div className={classes.container3}>
        <div className={classes.div1}>
          <div>WOMEN'S</div>
        </div>
        <div className={classes.div2}>
          <div>NEW ARRIVALS</div>
          <div>SPECIAL</div>
          <div>BESTSELLER</div>
          <div>MOST VIEWED</div>
          <div>FEATURED PRODUCTS</div>
        </div>
      </div>

      <div>
        <WomenMain></WomenMain>
      </div>
      <div className={classes.container3}>
        <div className={classes.div1}>
          <div>MEN'S</div>
        </div>
        <div className={classes.div2}>
          <div>NEW ARRIVALS</div>
          <div>SPECIAL</div>
          <div>BESTSELLER</div>
          <div>MOST VIEWED</div>
          <div>FEATURED PRODUCTS</div>
        </div>
      </div>

      <div>
        <MainMen></MainMen>
      </div>
    </>
  );
}

export default Main3;
