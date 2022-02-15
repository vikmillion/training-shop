import React from "react";

import TopBarWoman from "./TopBarWoman";
import WomenMain from "./WomenMain";

function Women() {
  return (
    <> <div className="clothes-women" data-test-id='clothes-women'>
      <TopBarWoman></TopBarWoman>
     <div data-test-id='clothes-card-women'>
        <WomenMain></WomenMain></div>
      </div>
    </>
  );
}
export default Women;
