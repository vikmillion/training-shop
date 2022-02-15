import React from "react";

import TopBarWoman from "./TopBarWoman";
import WomenMain from "./WomenMain";

function Women() {
  return (
    <>
      <TopBarWoman></TopBarWoman>
      <div className="clothes-women" data-test-id="clothes-card-women">
        <WomenMain></WomenMain>
      </div>
    </>
  );
}
export default Women;
