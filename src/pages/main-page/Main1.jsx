import React from 'react';
import img1 from "../main-page//images/imgMain1.png";
import img2 from "../main-page//images/imgMain2.png";
import img3 from "../main-page//images/imgMain3.png";
import img4 from "../main-page//images/imgMain4.png";
import left from "../main-page/images/left.svg";
import right from "../main-page/images/right.svg";


import classes from "./Main.module.css";

function Main1(props) {
    return (
      <>
        
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

           
          </div>
     
      </>
    );
}

export default Main1;