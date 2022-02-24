import React from "react";
import facebook from "../footer/images/facebook.png";
import twitter from "../footer/images/twitter.png";
import instargam from "../footer/images/instagram.png";
import pinterest from "../footer/images/pinterest.png";
import call from "../footer/images/call.png";
import place from "../footer/images/place.svg";
import clock from "../footer/images/clock.svg";
import letter from "../footer/images/letter.svg";
import stripe from "../footer/images/Stripe.png";
import aes from "../footer/images/AES256.png";
import paypal from "../footer/images/paypal.png";
import visa from "../footer/images/visa.png";
import mastercard from "../footer/images/mastercard.png";
import discover from "../footer/images/discover.png";
import american from "../footer/images/american-express.png";

import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const linkes1 = [
  {
    id: 1,
    path: "men",
    title: "Men",
  },
  {
    id: 2,
    path: "women",
    title: "Women",
  },
  {
    id: 3,
    path: "Accessories",
    title: "Accessories",
  },
  {
    id: 4,
    path: "Beauty",
    title: "Beauty",
  },
];
const linkes2 = [
  {
    id: 1,
    path: "AboutUs",
    title: "About Us",
  },
  {
    id: 2,
    path: "Blog",
    title: "Blog",
  },
  {
    id: 3,
    path: "Contact",
    title: "Contact",
  },
  {
    id: 4,
    path: "FAQs",
    title: "FAQs",
  },
];
const linkes3 = [
  {
    id: 1,
    path: "Terms",
    title: "Terms & Conditions",
  },
  {
    id: 2,
    path: "Returns",
    title: "Returns & Exchanges",
  },
  {
    id: 3,
    path: "Shipping",
    title: "Shipping & Delivery",
  },
  {
    id: 4,
    path: "Privacy",
    title: "Privacy Policy",
  },
];

function Footer(props) {
  return (
    <>
      <div className={classes.footer} data-test-id="footer">
        {/* <div className={classes.containerBox}> */}

        <div className={classes.blockBlack}>
          <div className="beInTouch"> BE IN TOUCH WITH US:</div>
          <input type="text" placeholder="Enter you email" />
          <div>
            <button className={classes.btn}> JOIN US</button>
          </div>{" "}
          <div className={classes.blockImg}>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instargam} alt="" />
            <img src={pinterest} alt="" />
          </div>
        </div>

        <div className={classes.linkGroup}>
          <div className={classes.div3}>
            <div className={classes.upper}>CATEGORIES</div>
            <div>
              {linkes1.map((i) => (
                <>
                  <Link
                    to={i.path}
                    data-test-id={`footer-nav-link-${i.path}`}
                    className={classes.linkUnder}
                  >
                    {i.title}
                  </Link>{" "}
                
                </>
              ))}
            </div>
          </div>

          <div className={classes.div3}>
            <div className={classes.upper}>Information</div>
            {linkes2.map((i) => (
              <>
                <Link
                  to={i.path}
                  data-test-id={`footer-nav-link-${i.path}`}
                  className={classes.linkUnder}
                >
                  {i.title}
                </Link>{" "}
               
              </>
            ))}
          </div>
          <div className={classes.div3}>
            <div className={classes.upper}>USEFUL LINK </div>
            {linkes3.map((i) => (
              <>
                <Link
                  to={i.path}
                  data-test-id={`footer-nav-link-${i.path}`}
                  className={classes.linkUnder}
                >
                  {i.title}
                </Link>{" "}
            
              </>
            ))}
          </div>
          <div className={classes.div3}>
            <div className={classes.upper}>CONTACT US</div>
            <div className={classes.linkUnder_4}>
              <div><img src={place} alt="" /> Belarus, Gomel, Lange 17 <br /></div>
              <div><img src={call} alt="" /> +375 29 100 20 30 <br /></div>
              <div><img src={clock} alt="" /> All week 24/7 <br /></div>
            <div>  <img src={letter} alt="" />{" "}
              <span className={classes.underline}> info@clevertec.ru</span></div> 
            </div>
          </div>
        </div>

        <div className={classes.blockBottom}>
          <div>Copyright © 2032 all rights reserved</div>
          <div className={classes.blockImg2}>
            <img src={stripe} alt="" />
            <img src={aes} alt="" />
            <img src={paypal} alt="" />
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={discover} alt="" />
            <img src={american} alt="" />
          </div>
          <div className={classes.underline}>Clevertec.ru/training</div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Footer;
