import React from 'react';
import ProductMain from "./ProductMain";
import TopBarProduct from "./TopBarProduct";
function ProdWomen(props) {
    return (
        <div data-test-id='products-page-women'>
            
        <TopBarProduct></TopBarProduct>
        <ProductMain></ProductMain>
      </div>
    );
}

export default ProdWomen;