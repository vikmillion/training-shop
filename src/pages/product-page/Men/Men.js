import React from "react";
import MainMen from "./MainMen";
import TopBarMen from "./TopBarMen";


function Men() {
  return (
    <>
      <div className="clothes-men" data-test-id="clothes-card-men">
        <TopBarMen></TopBarMen>
        <MainMen></MainMen>
      </div>
    </>
  );
}
export default Men;
