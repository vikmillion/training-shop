import React from "react";
import classes from "./Main4.module.css";
import img_1 from "../main-page/images/img_1.jpg";
import img_2 from "../main-page/images/img_2.jpg";


function Main4(props) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.div1}>
          <img src={img_1} alt="" />
        </div>
        <div className={classes.div2}>
          <img src={img_2} alt="" />
        </div>
        <div className={classes.div3}>
          <div className={classes.small}>New Season<div className={classes.big}>lookbook collection</div></div>
          
        </div>
        <div className={classes.div4}>
          <div className={classes.small}>Sale<div className={classes.big}>
            Get UP to <i> 50% off</i>
          </div></div>
          
        </div>
      </div>
    </>
  );
}

export default Main4;
