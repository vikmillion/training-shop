import React from "react";
import ProductMain from "../ProductMain";
import TopBarProduct from "../TopBarProduct";

function Men1(props) {
  return (
    <div data-test-id="products-page-men">
      <TopBarProduct></TopBarProduct>
      <ProductMain></ProductMain>
    </div>
  );
}

export default Men1;
