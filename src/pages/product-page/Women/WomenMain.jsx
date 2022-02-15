import React from 'react';

import img_1 from "../Women/images/img_1.jpg";
import img_2 from "../Women/images/img_2.jpg";
import img_3 from "../Women/images/img_3.jpg";
import img_4 from "../Women/images/img_4.jpg";
import img_5 from "../Women/images/img_5.jpg";
import img_6 from "../Women/images/img_6.jpg";
import img_7 from "../Women/images/img_7.jpg";
import img_8 from "../Women/images/img_8.jpg";
import stargold from "../Women/images/stargold.svg";
import stargrey from "../Women/images/stargrey.svg";
import classes from "./Women.module.css";
import { Link } from 'react-router-dom';


const IMAGES = [
  {
    id: 1,
    url: img_1,
    title: "Women's tracksuit Q109",
    price: "30.00",
    rating: 4,
    ratgold: stargold,
    ratgrey: stargrey,
    to: "/Product",
  },
  {
    id: 2,
    url: img_2,
    title: "Women's tracksuit Q109",
    price: "30.00",
    rating: 4,
    ratgold: stargold,
    ratgrey: stargrey,
    to: "/Product",
  },
  {
    id: 3,
    url: img_3,
    title: "Women's tracksuit Q109",
    price: "30.00",
    rating: 4,
    ratgold: stargold,
    ratgrey: stargrey,
    to: "/Product",
  },
  {
    id: 4,
    url: img_4,
    title: "Women's tracksuit Q109",
    price: "30.00",
    rating: 4,
    ratgold: stargold,
    ratgrey: stargrey,
    to: "/Product",
  },
  {
    id: 5,
    url: img_5,
    title: "Women's tracksuit Q109",
    price: "30.00",
    rating: 4,
    ratgold: stargold,
    ratgrey: stargrey,
    to: "/Product",
  },
  {
    id: 6,
    url: img_6,
    title: "Women's tracksuit Q109",
    price: "30.00",
    rating: 4,
    ratgold: stargold,
    ratgrey: stargrey,
    to: "/Product",
  },
  {
    id: 7,
    url: img_7,
    title: "Women's tracksuit Q109",
    price: "30.00",
    rating: 4,
    ratgold: stargold,
    ratgrey: stargrey,
    to: "/Product",
  },
  {
    id: 8,
    url: img_8,
    title: "Women's tracksuit Q109",
    price: "30.00",
    rating: 4,
    ratgold: stargold,
    ratgrey: stargrey,
    to: "/Product",
  },
];




function WomenMain(props) {
    return (
      <>
        <div data-test-id='menu-link-women'>
          <div className={classes.container}>
            <div className={classes.divBlock}>
              {IMAGES.map((i) => (
                <>
                  <div className={classes.block}>
                    <div key={i.id} className={classes.img}>
                      <Link to={i.to}>
                        <img src={i.url} alt="" />
                      </Link>
                    </div>
                    <div className={classes.blockItem}>
                      <div className={classes.item}>{i.title}</div>
                      <div className={classes.itemRating}>
                        <div className={classes.price}>$ {i.price}</div>
                        <div className={classes.rating}>
                          <div>
                            <img src={i.ratgold} alt="" />
                          </div>
                          <div>
                            <img src={i.ratgold} alt="" />
                          </div>
                          <div>
                            <img src={i.ratgold} alt="" />
                          </div>
                          <div>
                            <img src={i.ratgold} alt="" />
                          </div>
                          <div>
                            <img src={i.ratgrey} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className={classes.See}>SEE ALL</div>
        </div>
      </>
    );
}

export default WomenMain;