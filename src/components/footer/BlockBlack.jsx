import React from 'react';
import facebook from "../footer/images/facebook.png";
import twitter from "../footer/images/twitter.png";
import instargam from "../footer/images/instagram.png";
import pinterest from "../footer/images/pinterest.png";
import classes from "./Footer.module.css";
function BlockBlack(props) {
    return (
      <>
        <div className={classes.blockBlack}>
          <div className={classes.div1}>
            BE IN TOUCH WITH US:
            <input type="text" placeholder="Enter you email" />
            <div>
              <button className={classes.btn}> JOIN US</button>
            </div>{" "}
            <div className={classes.blockImg}>
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instargam} alt="" />
              <img src={pinterest} alt="" />
            </div>
          </div>
            </div>
            
      </>
    );
}

export default BlockBlack;