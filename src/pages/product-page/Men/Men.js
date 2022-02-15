import React from "react";
import MainMen from "./MainMen";
import TopBarMen from "./TopBarMen";


function Men() {
  return (
    <>
      <div className="clothes-men" data-test-id="clothes-men">
        <TopBarMen></TopBarMen>
<div data-test-id='clothes-card-men'>
        <MainMen></MainMen></div>
      </div>
    </>
  );
}
export default Men;
