import React from "react";
import PRODUCTS from "../../components/products";
import { Link } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";
import "./productspage.css";
import Cards from "../../components/cards";

const ProductsPage = ({ productType }) => {
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
      <div data-test-id={`products-page-${productType}`} className="container">
        <div className="head">
          <h1 className="headline">{productType}</h1>
              </div>
              
              <div className="products-page_container">
                  {PRODUCTS[productType].map((card)=>
                  {
                      return <Cards card={card} key={card.id} productType={productType}/> 
                  })}
</div>




          </div>
      <div className="See">
        <Link to={`/${productType}`}>SEE ALL</Link>
      </div>
    </>
  );
};

export default ProductsPage;
