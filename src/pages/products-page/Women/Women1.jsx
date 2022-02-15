import React from 'react';
import ProductMain from '../ProductMain';
import TopBarProduct from '../TopBarProduct';

function Women1(props) {
    return (
      <div>
        <div data-test-id="products-page-women">
                <TopBarProduct></TopBarProduct>
                <ProductMain></ProductMain>
        </div>
      </div>
    );
}

export default Women1;