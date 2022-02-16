import React from 'react';
import classes from "./Main5.module.css";

import imgMain6 from "../main-page/images/imgMain6.png";
import imgMain7 from "../main-page/images/imgMain7.png";



function Main5(props) {
    return (
      <>
    
        <div className={classes.container}>
       <div className={classes.box}>
           <div className={classes.div1}>
            <div className={classes.img6}>
                <img src={imgMain6} alt="" /></div>
            </div>
         
          <div className={classes.div2}>
            <div className={classes.block}>
              <div className={classes.blockdiv1}>
                Special Offer</div>
                <div className={classes.blockdiv2}> <p className={classes.subsc}>Subscribe </p><p className={classes.subsc2}> And <span>Get 10% Off</span></p>  </div>
              <div className={classes.blockdiv3}> Enter your email </div>
              <button> SUBSCRIBE</button>
            </div>{" "}
          </div>
          <div className={classes.div3}>
            {" "}
            <div className={classes.img7}>
              <img src={imgMain7} alt="" />
            </div>{" "}
          </div></div>
        </div>
      </>
    );
}

export default Main5;