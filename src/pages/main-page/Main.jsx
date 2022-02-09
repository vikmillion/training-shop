import {} from "@mui/material";
import React from "react";
import img1 from "../main-page//images/imgMain1.png";
import img2 from "../main-page//images/imgMain2.png";
import img3 from "../main-page//images/imgMain3.png";
import img4 from "../main-page//images/imgMain4.png";
import classes from "./Main.module.css";
import { Container } from "@mui/material/Container";
import { Paper } from "@mui/material/Paper";
// const useStyles = makeStyles((theme) =>( {
//     mainBlanck: {
//         positions: "relatives",

//     }

// }))

function Main(params) {
  // const classes = useStyles();
  return (
    <>
      <main>
        <div className={classes.parent}>
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
        </div>
      </main>
    </>
  );
}
export default Main;
