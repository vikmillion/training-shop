import React from "react";

import TopBarWoman from "./TopBarWoman";
import WomenMain from "./WomenMain";

function Women() {
  return (
    <>
      {" "}
      {/* clothes-women */}
      <div className="" data-test-id="">
        <TopBarWoman></TopBarWoman>
        <div data-test-id="">
          {/* clothes-card-women */}
          <WomenMain></WomenMain>
        </div>
      </div>
    </>
  );
}
export default Women;
