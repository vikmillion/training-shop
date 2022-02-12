
import React from "react";
import Women from "../product-page/Women/Women";
import classes from "./Main3.module.css";


function Main3(props) {
  return (
    <>
      <div className={classes.container3}>
        <div className={classes.div1}>
          <div>WOMAN'S</div>
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
              <Women>
                  
              </Women>
          </div>

    </>
  );
}

export default Main3;
