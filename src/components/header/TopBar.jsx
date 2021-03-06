import React from "react";
import call from "../header/images/call.png";
import place from "../header/images/place.png";
import clock from "../header/images/clock.png";
import facebook from "../header/images/facebook.png";
import twitter from "../header/images/twitter.png";
import instargam from "../header/images/instagram.png";
import pinterest from "../header/images/pinterest.png";
import classes from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className={classes.container}>
        <div className={classes.div1}>
          <img src={call} alt="" />
          &nbsp; +375 29 100 20 30
        </div>
        <div className={classes.div2}>
          <img src={place} alt="" />
          &nbsp; Belarus, Gomel, Lange 17
        </div>
        <div className={classes.div3}>
          <img src={clock} alt="" />
          &nbsp; All week 24/7
        </div>
        <div className={classes.div4}></div>
        <div className={classes.div5}>
          <img src={facebook} alt="" />
          &nbsp;
          <img src={twitter} alt="" />
          &nbsp;
          <img src={instargam} alt="" />
          &nbsp;
          <img src={pinterest} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;

// const TopBar = () => {
//   return (
//     <div className="top-bar">
//       <div className={classes.top_bar}>
//         <div className={classes.top_bar_1}>
//           <img src={call} alt="" /> +375 29 100 20 30
//         </div>
//         <div className={classes.top_bar_2}>
//           <img src={place} alt="" /> Belarus, Gomel, Lange 17
//         </div>
//         <div className={classes.top_bar_3}>
//           <img src={clock} alt="" /> All week 24/7
//         </div>

//         <div className={classes.top_bar_4}>
//           <img src={facebook} alt="" />
//           <img src={twitter} alt="" />
//           <img src={instargam} alt="" />
//           <img src={pinterest} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;
