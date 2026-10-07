import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Banner1 from "../../img/banner_Hero1.jpg";
import Banner2 from "../../img/banner_Hero2.jpg";
import Banner3 from "../../img/banner_Hero3.jpg";

export default function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>introduction the new</h4>
                <h3>
                  microsoft xbox <br />
                  360 controller{" "}
                </h3>
                <p>windows xp/10/7/8 ps3, tv box</p>
                <Link to="/" className="btn">
                  shop Now
                </Link>
              </div>
              <img src={Banner1} alt="slider" />
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <h4>introduction the new</h4>
                <h3>
                  microsoft xbox <br />
                  360 controller{" "}
                </h3>
                <p>windows xp/10/7/8 ps3, tv box</p>
                <Link to="/" className="btn">
                  shop Now
                </Link>
              </div>
              <img src={Banner2} alt="slider" />
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <h4>introduction the new</h4>
                <h3>
                  microsoft xbox <br />
                  360 controller{" "}
                </h3>
                <p>windows xp/10/7/8 ps3, tv box</p>
                <Link to="/" className="btn">
                  shop Now
                </Link>
              </div>
              <img src={Banner3} alt="slider" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}


 