import React from "react";
import classes from "./Main4.module.css";

function Main4(props) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.div1}>
          <div className={classes.div3}>
          
            <p className={classes.small}>
              New Season </p>
              <p className={classes.big}>lookbook collection</p>
          
          </div>
        </div>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <p className={classes.small}>Sale</p>
            <p className={classes.big}>
              Get UP to <i> 50% off</i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main4;
