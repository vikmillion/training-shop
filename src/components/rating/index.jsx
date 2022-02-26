import React from "react";
import './Rating.css'
import stargold from "../images/stargold.svg";
import stargrey from "../images/stargrey.svg";

const Rating = ({ rating }) => {
  const star = [stargrey, stargrey, stargrey, stargrey, stargrey];
  let gold = rating;
    while (gold > 0) {
        star.push(stargold)
        star.shift();
        gold = gold - 1;
}

  return (
    <div>
      <img className="imgRating" src={star[4]} alt="" />
      <img className="imgRating" src={star[3]} alt="" />
      <img className="imgRating" src={star[2]} alt="" />
      <img className="imgRating" src={star[1]} alt="" />
      <img className="imgRating" src={star[0]} alt="" />
    </div>
  );
};

export default Rating;
