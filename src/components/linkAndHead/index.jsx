import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCaretRight } from "react-icons/ai";
import './linkAndHead.css';

const LinkAndHead = (productType) => {
    return (
      <>
        <div className="top">
          <Link to="/" className="link">
            Home
          </Link>
          <AiOutlineCaretRight className="right" />
          <Link to={`/${productType}`} className="link">
            {productType}
          </Link>
        </div>
        <div className="head">
          <h1 className="headline">{productType}</h1>
        </div>
      </>
    );
};

export default LinkAndHead;