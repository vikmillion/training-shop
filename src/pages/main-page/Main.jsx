import {} from "@mui/material";
import React from "react";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Main5 from "./Main5";
// import img1 from "../main-page//images/imgMain1.png";
// import img2 from "../main-page//images/imgMain2.png";
// import img3 from "../main-page//images/imgMain3.png";
// import img4 from "../main-page//images/imgMain4.png";
// import left from "../main-page/images/left.svg";
// import right from "../main-page/images/right.svg";
// import returns from "../main-page/images/return.svg";
// import support from "../main-page/images/support.svg";

// import bus from "../main-page/images/bus.svg";

// import classes from "./Main.module.css";


function Main(params) {
  return (
    <>
      <main>
      <Main1></Main1>
        <Main2></Main2>
        <Main3></Main3>
        <Main4></Main4>
        <Main5></Main5>
      </main>
      {/* <main>
        <div className={classes.mainBlock}>
          <div className={classes.container}>
            <div className={classes.div1}>
              <img src={img1} alt="" />
            </div>
            <div className={classes.div2}>
              <img src={img2} alt="" className={classes.img1} />
            </div>
            <div className={classes.div3}>
              <img src={img3} alt="" className={classes.img2} />
            </div>
            <div className={classes.div4}>
              <img src={img4} alt="" />
            </div>
            <div className={classes.div5}>
              <span className={classes.banner}>BANNER </span>
              <br />
              <span className={classes.bannerBig}> YOUR TITLE TEXT</span>
            </div>
            <div className={classes.div6}>
              {" "}
              <img src={left} className={classes.imgLR} alt="" />
            </div>
            <div className={classes.div7}>
              <img src={right} alt="" className={classes.imgLR} />
            </div>
            <div className={classes.div8}>
              <span className={classes.bannerBig2}> WOMEN</span>
            </div>
            <div className={classes.div9}>
              <span className={classes.bannerBig2}>MEN</span>
            </div>
            <div className={classes.div10}>
              <span className={classes.bannerBig2}> ACCESSORIES </span>
            </div>
          </div>

          <div className={classes.textAfter}>
            <div className={classes.imgBefore}>
              <div>
                <img src={bus} alt="" className={classes.imgLR} />
              </div>
              <div>
                <p>FREE SHIPPING</p>
                <p>On all UA order or order above $100</p>
              </div>
            </div>
            <div className={classes.imgBefore}>
              <div>
                <img src={returns} alt="" className={classes.imgLR} />
              </div>
              <div>
                <p>30 DAYS RETURN</p>
                <p>Simply return it within 30 days for an exchange</p>
              </div>
            </div>
            <div className={classes.imgBefore}>
              <div>
                <img src={support} alt="" className={classes.imgLR} />
              </div>
              <div>
                <p>SUPPORT 24/7</p>
                <p>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
}
export default Main;
