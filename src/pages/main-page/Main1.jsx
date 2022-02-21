import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import group from "./images/Group57.png";
import group2 from "./images/Group56.png";
import block from "./images/blockMain2.png";
import block2 from "./images/blockMain3.png";


import  "./Main.css";



function Main1(props) {  

  return (
    <>
      <div className="container">
        <Swiper
          slidesPerView={"auto"}
          centerInsufficientSlides={true}
          centeredSlides={true}
          spaceBetween={150}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={group} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={group} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={group} alt="" />
          </SwiperSlide>
        </Swiper>

        <div className="box">
          <div className="box2">
            <div className="div2"><img src={block} alt="" /> </div>
            <div className="div3"> <img src={ block2} alt="" /> </div>
          </div>

          <div className="div4">
            <img src={group2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main1;
