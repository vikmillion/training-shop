import React from "react";
import classes from "./Main3.module.css";
import WomenMain from "./../product-page/Women/WomenMain";
import MainMen from "./../product-page/Men/MainMen";

function Main3(props) {
  return (
    <>
      <div className={classes.mediaBlock} data-test-id="clothes-women">
        <div className={classes.container3}>
          <div className={classes.div1}>
            <div className={classes.head}>WOMEN'S</div>
          </div>
          <div className={classes.div2}>
            <div>NEW ARRIVALS</div>
            <div>SPECIAL</div>
            <div>BESTSELLER</div>
            <div>MOST VIEWED</div>
            <div>FEATURED PRODUCTS</div>
          </div>
        </div>

        <WomenMain></WomenMain>
        <div className={classes.container3}>
          <div className={classes.div1}>
            <div className={classes.head}>MEN'S</div>
          </div>
          <div className={classes.div2}>
            <div>NEW ARRIVALS</div>
            <div>SPECIAL</div>
            <div>BESTSELLER</div>
            <div>MOST VIEWED</div>
            <div>FEATURED PRODUCTS</div>
          </div>
        </div>

        <div data-test-id="clothes-men">
          <MainMen></MainMen>
        </div>
      </div>
    </>
  );
}

export default Main3;
