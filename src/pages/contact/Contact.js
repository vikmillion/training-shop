import React from "react";
// import img1 from "../main-page//images/imgMain1.png";
// import img2 from "../main-page//images/imgMain2.png";
// import img3 from "../main-page//images/imgMain3.png";
// import img4 from "../main-page//images/imgMain4.png";
// import left from "../main-page/images/left.svg";
// import right from "../main-page/images/right.svg";
import classes from "./Contact.module.css";

function Contact(props) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.div1}>
          <div className={classes.bannerDiv}>
            <div className={classes.div1_1}>&lt;</div>
            <div className={classes.banner}>
              {" "}
              <p className={classes.p1}>BANNER</p>
              <p className={classes.p2}>YOUR TITLE TEXT</p>{" "}
            </div>
            <div className={classes.div1_2}>&gt;</div>
          </div>
        </div>
        <div className={classes.div2}>
          <div className={classes.div2_1}>
            <div className={classes.wom}>
              <div className={classes.bannerS}>
                {" "}
                <p className={classes.p3}> WOMEN</p>
              </div>
            </div>
            <div className={classes.men}>
              <div className={classes.bannerS}>
                {" "}
                <p className={classes.p3}> MEN</p>
              </div>
            </div>
          </div>
          <div className={classes.div2_2}>
            <div className={classes.access}>
              {" "}
              <p className={classes.p3}>Accessories</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
