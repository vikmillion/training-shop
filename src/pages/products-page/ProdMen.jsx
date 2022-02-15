import React from 'react';
import ProductMain from "./ProductMain";
import TopBarProduct from "./TopBarProduct";
function ProdMen(props) {
    return (
      <div>
        <TopBarProduct></TopBarProduct>
        <ProductMain></ProductMain>
      </div>
    );
}

export default ProdMen;