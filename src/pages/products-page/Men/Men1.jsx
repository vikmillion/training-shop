import React from "react";
import ProductMain from "../ProductMain";
import TopBarProduct from "../TopBarProduct";

function Men1(props) {
  return (
    <>
      <TopBarProduct></TopBarProduct><div data-test-id="product-page-men">
      <ProductMain></ProductMain>
    </div></>
  );
}

export default Men1;
