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
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <>
      <div className="footer" data-test-id="footer">
        <div className={classes.blockBlack}>
          <div className={classes.div1}>
            BE IN TOUCH WITH US:
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
                <Link
                  to="/Men"
                  className={classes.linkUnder}
                  data-test-id={"menu-link-Men"}
                >
                  Men
                </Link>
                <br />
                <Link
                  to="/Women"
                  className={classes.linkUnder}
                  data-test-id={"menu-link-women"}
                >
                  Women
                </Link>{" "}
                <br /> Accessories <br /> Beauty
              </div>
            </div>

            <div className={classes.div3}>
              <div className={classes.upper}>Infomation</div>
              <div>
                About Us <br /> Contact Us <br /> Blog <br /> FAQs
              </div>
            </div>
            <div className={classes.div3}>
              <div className={classes.upper}>USEFUL LINK </div>
              <div>
                Terms & Conditions <br /> Returns & Exchanges <br /> Shipping &
                Delivery <br />
                Privacy Policy
              </div>
            </div>
            <div className={classes.div3}>
              <div className={classes.upper}>CONTACT US</div>
              <div>
                <img src={place} alt="" /> Belarus, Gomel, Lange 17 <br />
                <img src={call} alt="" /> +375 29 100 20 30 <br />
                <img src={clock} alt="" /> All week 24/7 <br />
                <img src={letter} alt="" />{" "}
                <span className={classes.underline}> info@clevertec.ru</span>
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
        </div>
      </div>
    </>
  );
}

export default Footer;
