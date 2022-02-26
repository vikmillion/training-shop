import {} from "@mui/material";
import React from "react";
import Clothes from "./clothes";
import Main1 from "./Main1";
import Main2 from "./Main2";
// import Main3 from "./Main3";

import Main4 from "./Main4";
import Main5 from "./Main5";
import Main6 from "./Main6";




function Main(params) {
  return (
    <>
      <main>
      <Main1></Main1>
        <Main2></Main2>
        {/* <Main3></Main3> */}
        
        <Clothes productType="women" />
        <Clothes productType="men" />
        
        <Main4></Main4>
        <Main5></Main5>
        <Main6></Main6>
      
 </main>
    </>
  );
}
export default Main;
