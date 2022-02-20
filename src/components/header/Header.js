import React, { useState } from "react";

import "./header.css";
import Nav from "./Nav";

function Header(props) {
  const [status, setStatus] = useState(0);

  const burgerOpen = (
    <div
      className="burgerMenu_container"
      role="button"
      onClick={() => setStatus(!status)}
    >
      {" "}
         <span className="close1"></span>
      <span className="close2"></span>
      <span className="close3"></span>
    
    </div>
  );

  const burgerClose = (
    <div
      className="burgerMenu_container"
      role="button"
      onClick={() => setStatus(!status)}
    >
      {/* status === 'open' ? 'close': 'open') */}
     <span className="open1"></span>
      <span className="open2"></span>
      <span className="open3"></span>
    </div>
  );

  const change = () => {
    if (status) {
    <Nav/>
  } };
  return (
    <>
      <nav>
        {/* {status ? burgerClose && <Nav /> : burgerOpen } */}
        {/* {status && <Nav />} */}

      
      </nav>
    </>
  );
}

export default Header;
