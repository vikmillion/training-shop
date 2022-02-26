import React from 'react';
import { Link } from 'react-router-dom';
import Cards from "../../../components/cards";
import PRODUCTS from "../../../components/products";
import "./clothes.css";


const Clothes = ({productType}) => {
    return (
      <>
        <div className="box">
          <div className="top"></div>
          <div
            data-test-id={`products-page-${productType}`}
            className="container"
          >
            <div className="head">
              <h1 className="headline">{productType}</h1>
            </div>

            <div className="products-page_container">
              {PRODUCTS[productType].map((card) => {
                return (
                  <Cards card={card} key={card.id} productType={productType} />
                );
              })}
            </div>
          </div>
          <div className="See">
            <Link to={`/${productType}`}>SEE ALL</Link>
          </div>
        </div>
      </>
    );
};

export default Clothes;