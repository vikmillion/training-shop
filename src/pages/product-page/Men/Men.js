import React from "react";
import MainMen from "./MainMen";
import TopBarMen from "./TopBarMen";


function Men() {
  return (
    <>
      <div className='page-product' data-test-id='rpoduct-page'>
      <TopBarMen></TopBarMen>
      <MainMen></MainMen></div>
    </>
  );
}
export default Men;
