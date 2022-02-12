import React from 'react';
import classes from "./Main5.module.css";

import imgMain6 from "../main-page/images/imgMain6.png";
import imgMain7 from "../main-page/images/imgMain7.png";



function Main5(props) {
    return (
      <>
        {/* <div className={classes.Back}>
          <div className={classes.container}>
            <div className={classes.block}>
              Special Offer
              <br />
              Subscribe And Get 10% Off <br />
              Enter your email <br />
              <Button> SUBSCRIBE</Button>
            </div>{" "}
            <div className={classes.img6}>
              <img src={imgMain6} alt="" />
            </div>
            <div className={classes.img7}>
              <img src={imgMain7} alt="" />
            </div>
          </div>
        </div> */}

        <div className={classes.container}>
          <div className={classes.div1}>
            <div className={classes.div3}>
              {" "}
              <div className={classes.img6}>
                <img src={imgMain6} alt="" />
              </div>{" "}
            </div>{" "}
          </div>
          <div className={classes.div2}>
            <div className={classes.block}>
              <div className={classes.blockdiv1}>Special Offer</div>
              <div className={classes.blockdiv2}>Subscribe <br /> And <i>Get 10% Off</i> </div>
              <div className={classes.blockdiv3}> Enter your email </div>
              <button> SUBSCRIBE</button>
            </div>{" "}
          </div>
          <div className={classes.div4}>
            {" "}
            <div className={classes.img7}>
              <img src={imgMain7} alt="" />
            </div>{" "}
          </div>
        </div>
      </>
    );
}

export default Main5;