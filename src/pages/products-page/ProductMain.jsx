import React from "react";
import classes from "./Product.module.css";
import up from "./images/up.svg";
import down from "./images/down.svg";
import star from "./images/star.svg";
import starGrey from "./images/starGrey.svg";
import imgS1 from "./images/imgS1.png";
import imgS2 from "./images/imgS2.png";
import imgS3 from "./images/imgS3.png";
import imgS4 from "./images/imgS4.png";
import imgXS1 from "./images/imgXS1.png";
import imgXS2 from "./images/imgXS2.png";
import imgXS3 from "./images/imgXS3.png";
import imgXS4 from "./images/imgXS4.png";
import imgXL from "./images/imgXL.png";
import bus from "./images/bus.svg";
import returns from "./images/return.svg";
import letter from "./images/letter.svg";
import libra from "./images/libra.svg";
import AES256 from "./images/AES256_x42.png";
import stripe from "./images/Stripe.png";
import american from "./images/american.png";
import discover from "./images/discover_x42.png";
import master from "./images/mastercard_x42.png";
import paypal from "./images/paypal_2_x42.png";
import visa from "./images/visa_x42.png";
import rack from "./images/rack.svg";
import heart from "./images/heart.svg";
import text from "./images/text.png";
import imgM1 from "./images/imgM1.png";
import imgM2 from "./images/imgM2.png";
import imgM3 from "./images/imgM3.png";
import imgM4 from "./images/imgM4.png";

function ProductMain(props) {
  return (
    <>
      <div className="products-page" data-test-id="products-page">
        <div className={classes.mainDiv}>
          <h1> Women's tracksuit Q109</h1>
        </div>
        <div className={classes.container}>
          <div>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />2 Reviews
          </div>
          <div className={classes.div2}>
            <div>
              SKU:<b> 777</b>
            </div>{" "}
            <div>
              Availability: <b>In Stock</b>
            </div>
          </div>
        </div>
        <div className={classes.container2}>
          <div className={classes.div3}>
            <div className={classes.contDiv}>
              <div>
                <img src={up} alt="" />
              </div>

              <div>
                <img src={down} alt="" />
              </div>
            </div>
            <div className={classes.imgS}>
              <img src={imgS1} alt="" />
              <img src={imgS2} alt="" />
              <img src={imgS3} alt="" />
              <img src={imgS4} alt="" />
            </div>
          </div>
          <div className={classes.div4}>
            <img src={imgXL} alt="" />
            <div className={classes.div4_1}> &lt; </div>
            <div className={classes.div4_2}> &gt; </div>
          </div>
          <div className={classes.div5}>
            <div>
              {" "}
              COLOR: <b> Blue</b>
            </div>
            <div className={classes.imgXS}>
              <img src={imgXS1} alt="" />
              <img src={imgXS2} alt="" />
              <img src={imgXS3} alt="" />
              <img src={imgXS4} alt="" />
            </div>

            <div className={classes.divSize}>
              SIZE: <b>S</b>
            </div>
            <div className={classes.divBtn}>
              <button>XS</button>
              <button className={classes.btnBord}>
                <b>S</b>
              </button>
              <button>M</button>
              <button>L</button>
            </div>
            <div className={classes.sizeGuide}>
              <img src={rack} alt="" /> Size guide
            </div>
            <div className={classes.hr}></div>
            <div className={classes.divPrice}>
              <div className={classes.price}>
                <b>$379.99</b>
              </div>
              <button className={classes.Add}> ADD TO CARD</button>
              <button>
                <img src={heart} alt="" />
              </button>
              <button>
                <img src={libra} alt="" />
              </button>
            </div>
            <div className={classes.hr}></div>
            <div className={classes.delivery}>
              <img src={bus} alt="" /> Shipping & Delivery
              <img src={returns} alt="" /> Returns & Exchanges
              <img src={letter} alt="" /> Ask a question
            </div>
            <div className={classes.safe}>
              {" "}
              <div> guaranteed safe checkout</div>{" "}
              <div className={classes.hr2}></div>
            </div>
            <div className={classes.moneyOrg}>
              <img src={stripe} alt="" />
              <img src={AES256} alt="" />
              <img src={paypal} alt="" />
              <img src={visa} alt="" />
              <img src={master} alt="" />
              <img src={discover} alt="" />
              <img src={american} alt="" />
            </div>
            <div className={classes.hr}></div>
            <div className={classes.descrip}> DESCRIPTION</div>
            <div className={classes.hr}></div>
            <div className={classes.descrip}> Reviews</div>
            <div className={classes.divWrite}>
              <div>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />2 Reviews
              </div>
              <div>
                <img src={text} alt="" />
                Write a review{" "}
              </div>
            </div>
            <div>
              <p className={classes.name}>Oleh Chabanov </p>
              <p className={classes.parag}>
                On the other hand, we denounce with righteous indignation and
                like men who are so beguiled and demoralized by the charms of
                pleasure of the moment
              </p>
            </div>
            <div>
              <p className={classes.name}>ShAmAn design </p>
              <p className={classes.parag}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti
              </p>
            </div>
            <div className={classes.hr}></div>
          </div>
        </div>
        <div className={classes.lastBlock}>
          <div className={classes.related}>RELATED PRODUCTS</div>
          <div className={classes.last}>
            <div className={classes.last1}> &lt; </div>
            <div className={classes.last1}> &gt; </div>
          </div>
        </div>{" "}
        <div className={classes.imgTextBlock}>
          <div className={classes.imgText}>
            <div className={classes.imgText1}>
              <img src={imgM1} alt="" />
            </div>
            <div className={classes.descrip2}>
              <div className={classes.title}>Women's tracksuit Q109</div>
              <div className={classes.priceStar}>
                <div>$ 30.00</div>
                <div>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={starGrey} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.imgText}>
            <div className={classes.imgText1}>
              <img src={imgM2} alt="" />
            </div>
            <div className={classes.descrip2}>
              <div className={classes.title}>Women's tracksuit Q109</div>
              <div className={classes.priceStar}>
                <div>
                  $ 30.00 <span className={classes.crossed}> $ 60.00</span>
                </div>
                <div>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={starGrey} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.imgText}>
            <div className={classes.imgText1}>
              <img src={imgM3} alt="" />
            </div>
            <div className={classes.descrip2}>
              <div className={classes.title}>Women's tracksuit Q109</div>
              <div className={classes.priceStar}>
                <div>$ 30.00</div>
                <div>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={starGrey} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.imgText}>
            <div className={classes.imgText1}>
              <img src={imgM4} alt="" />
            </div>
            <div className={classes.descrip2}>
              <div className={classes.title}>Women's tracksuit Q109</div>
              <div className={classes.priceStar}>
                <div>$ 30.00</div>
                <div>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={starGrey} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductMain;