import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

export const CardCarousel = ({
  children,
  autoplayDelay = 2000,
  showPagination = true,
  showNavigation = true,
}) => {
  const cards = React.Children.toArray(children);
  
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 400px;
    height: auto;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  
  .swiper-pagination-bullet {
    background: #d1d5db !important;
  }
  
  .swiper-pagination-bullet-active {
    background: #FF0C0D !important;
  }
  `
      return (
      <div className="w-full">
        <style>{css}</style>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}>
                                 {cards.map((card, index) => (
                   <SwiperSlide key={index}>
                     <div className="size-full">
                       {card}
                     </div>
                   </SwiperSlide>
                 ))}
              </Swiper>
            </div>
                   </div>
       </div>
  );
}
