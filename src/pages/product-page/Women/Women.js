import React from "react";

import TopBarWoman from './TopBarWoman';
import WomenMain from "./WomenMain";


function Women() {
  return (
    <>
      <div className='page-product' data-test-id='rpoduct-page'></div>
      <TopBarWoman></TopBarWoman>
      <WomenMain></WomenMain>
      <div className='page-product' data-test-id='rpoduct-page'></div>
      
    </>
  );
}
export default Women;
