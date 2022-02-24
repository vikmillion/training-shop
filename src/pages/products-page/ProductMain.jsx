import React, {  useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import classes from "./Product.module.css";
import "./ProductMain.css";
import star from "./images/star.svg";
import starGrey from "./images/starGrey.svg";
import imgS1 from "./images/imgS1.png";
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
import { FreeMode, Thumbs } from "swiper";
import SwiperCore from "swiper";

import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";

SwiperCore.use([Navigation]);

function ProductMain(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="products-page" data-test-id="products-page">
        <div data-test-id="product-page-women">
          <div className={classes.mainDiv}>
            <h1> Women's tracksuit Q109</h1>
          </div>
          <div className={classes.container}>
            <div className={classes.reviews}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              &nbsp;2 Reviews
            </div>
            <div className={classes.div2}>
              <div>
                SKU:<b> 777</b> &nbsp;
              </div>{" "}
              <div>
                &nbsp; Availability: <b>In Stock</b>
              </div>
            </div>
          </div>
          <div className={classes.container2} data-test-id='product-slider'>
            <div className="vertical">
              <div className="button-nav-vertical">
                <div type="button" className=" vertical-buttom-up">
                  {" "}
                  <IoIosArrowUp />{" "}
                </div>
                <div type="button" className=" vertical-buttom-down">
                  {" "}
                  <IoIosArrowDown />{" "}
                </div>
              </div>
              <div className="verCarousel">
                <Swiper
                  // onSwiper={setThumbsSwiper}
                  direction={"vertical"}
                  onSwiper={setThumbsSwiper}
                  slidesPerView={4}
                  centerInsufficientSlides={true}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  navigation={{
                    prevEl: ".vertical-buttom-up",
                    nextEl: ".vertical-buttom-down",
                  }}
                  freeMode={true}
                  watchSlidesProgress={true}
                  className="mySwiperS"
                >
                  <SwiperSlide>
                    <img src={imgS1} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={imgS1} alt="" />{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={imgS1} alt="" />{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={imgS1} alt="" />{" "}
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="horizCarousel">
              <div className="swiper-button-prev vertical-buttom-up horizont-button-prev" />
              <Swiper
                slidesPerView={1}
                centerInsufficientSlides={true}
                centeredSlides={true}
                spaceBetween={100}
                navigation={{
                  prevEl: ".vertical-buttom-up",
                  nextEl: ".vertical-buttom-down",
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiperXl"
              >
                <SwiperSlide>
                  <img src={imgXL} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgXL} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgXL} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgXL} alt="" />
                </SwiperSlide>
              </Swiper>{" "}
              <div className="swiper-button-next vertical-buttom-down horizont-button-next" />
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
                <button className={classes.btn3}>XS</button>
                <button className={classes.btnBord}>
                  <b>S</b>
                </button>
                <button className={classes.btn3}>M</button>
                <button className={classes.btn3}>L</button>
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
                <button className={classes.btn2}>
                  <img src={heart} alt="" />
                </button>
                <button className={classes.btn2}>
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
              <div className="button-nav">
                <div className="prevLast">
                  <IoIosArrowBack />
                </div>
                <div className="nextLast">
                  {" "}
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className={classes.imgTextBlock} >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={4}
              loop={false}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              // navigation={true}
              navigation={{
                nextEl: ".nextLast",
                prevEl: ".prevLast",
              }}
              breakpoints={{
                600: {
                  slidesPerGroup:2,
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1000: {
                  slidesPerGroup:4,
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerGroup: 4,
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="mySwiperLast"
              data-test-id='related-slider'
            >
              <SwiperSlide>
                {" "}
                <div className={classes.imgText1}>
                  <img src={imgM1} alt="" />
                </div>
                <div className={classes.descrip2}>
                  <div className={classes.title}>Women's tracksuit Q109</div>
                  <div className={classes.priceStar}>
                    <div>$ 30.00</div>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={starGrey} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={classes.imgText1}>
                  <img src={imgM2} alt="" />
                </div>
                <div className={classes.descrip2}>
                  <div className={classes.title}>Women's tracksuit Q109</div>
                  <div className={classes.priceStar}>
                    <div>$ 30.00</div>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={starGrey} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={classes.imgText1}>
                  <img src={imgM3} alt="" />
                </div>
                <div className={classes.descrip2}>
                  <div className={classes.title}>Women's tracksuit Q109</div>
                  <div className={classes.priceStar}>
                    <div>$ 30.00</div>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={starGrey} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={classes.imgText1}>
                  <img src={imgM4} alt="" />
                </div>
                <div className={classes.descrip2}>
                  <div className={classes.title}>Women's tracksuit Q109</div>
                  <div className={classes.priceStar}>
                    <div>$ 30.00</div>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={starGrey} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={classes.imgText1}>
                  <img src={imgM1} alt="" />
                </div>
                <div className={classes.descrip2}>
                  <div className={classes.title}>Women's tracksuit Q109</div>
                  <div className={classes.priceStar}>
                    <div>$ 30.00</div>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={starGrey} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={classes.imgText1}>
                  <img src={imgM2} alt="" />
                </div>
                <div className={classes.descrip2}>
                  <div className={classes.title}>Women's tracksuit Q109</div>
                  <div className={classes.priceStar}>
                    <div>$ 30.00</div>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={starGrey} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={classes.imgText1}>
                  <img src={imgM3} alt="" />
                </div>
                <div className={classes.descrip2}>
                  <div className={classes.title}>Women's tracksuit Q109</div>
                  <div className={classes.priceStar}>
                    <div>$ 30.00</div>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={starGrey} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={classes.imgText1}>
                  <img src={imgM4} alt="" />
                </div>
                <div className={classes.descrip2}>
                  <div className={classes.title}>Women's tracksuit Q109</div>
                  <div className={classes.priceStar}>
                    <div>$ 30.00</div>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={starGrey} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductMain;

// <Swiper
//               slidesPerView={"auto"}
//               centerInsufficientSlides={true}
//               centeredSlides={true}
//               direction={"vertical"}
//               spaceBetween={2}
//               navigation={true}
//               modules={[Navigation]}
//               navigation={{
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//               }}
//               className="mySwiper2"
//             >
//               <div className="button-nav">
//                 <div className="swiper-button-prev"> </div>
//                 <div className="swiper-button-next"></div>
//               </div>
//               <SwiperSlide>
//                 <img src={imgS1} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={imgS1} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={imgS1} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={imgS1} alt="" />
//               </SwiperSlide>
//             </Swiper>
