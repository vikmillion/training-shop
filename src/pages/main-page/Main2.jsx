import React from 'react';
import returns from "../main-page/images/return.svg";
import support from "../main-page/images/support.svg";
import bus from "../main-page/images/bus.svg";
import classes from "./Main.module.css";



function Main2(props) {
    return (
      <>
        <div className={classes.textAfter}>
          <div className={classes.imgBefore}>
            <div>
              <img src={bus} alt="" className={classes.imgLR} />
            </div>
            <div>
              <p>FREE SHIPPING</p>
              <p className={classes.divWidth}>
                On all UA order or order above $100
              </p>
            </div>
          </div>
          <div className={classes.imgBefore}>
            <div>
              <img src={returns} alt="" className={classes.imgLR} />
            </div>
            <div>
              <p>30 DAYS RETURN</p>
              <p className={classes.divWidth}>
                Simply return it within 30 days for an exchange
              </p>
            </div>
          </div>
          <div className={classes.imgBefore}>
            <div>
              <img src={support} alt="" className={classes.imgLR} />
            </div>
            <div>
              <p>SUPPORT 24/7</p>
              <p className={classes.divWidth}>
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Main2;

        // <div className={classes.textAfter}>
        //   <div className={classes.imgBefore}>
        //     <div>
        //       <img src={bus} alt="" className={classes.imgLR} />
        //     </div>
        //     <div>
        //       <p>FREE SHIPPING</p>
        //       <p className={classes.divWidth}>
        //         On all UA order or order above $100
        //       </p>
        //     </div>
        //   </div>
        //   <div className={classes.imgBefore}>
        //     <div>
        //       <img src={returns} alt="" className={classes.imgLR} />
        //     </div>
        //     <div>
        //       <p>30 DAYS RETURN</p>
        //       <p className={classes.divWidth}>
        //         Simply return it within 30 days for an exchange
        //       </p>
        //     </div>
        //   </div>
        //   <div className={classes.imgBefore}>
        //     <div>
        //       <img src={support} alt="" className={classes.imgLR} />
        //     </div>
        //     <div>
        //       <p>SUPPORT 24/7</p>
        //       <p className={classes.divWidth}>
        //         Contact us 24 hours a day, 7 days a week
        //       </p>
        //     </div>
        //   </div>
        // </div>;