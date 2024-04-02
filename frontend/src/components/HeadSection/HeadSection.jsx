import React, { useEffect, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// React Router
import { Link } from "react-router-dom";

import { apiUrl } from "../../configs/axios/axiosConfigs";

export default function HeadSection({ banners }) {
  return (
    <div className="py-5">
      <div className="container">
        <div>
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay, Navigation, Pagination, A11y]}
              pagination={{ clickable: true }}
              navigation
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              loop={true}
            >
              {banners &&
                banners.map((el) => (
                  <SwiperSlide key={Math.random()}>
                    {console.log(el)}
                    <div className="lg:h-[380px]">
                      <Link>
                        <img
                          className="rounded-lg"
                          src={`${apiUrl}/${el}`}
                          alt="banner"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
