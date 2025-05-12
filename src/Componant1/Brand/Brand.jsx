/* eslint-disable no-unused-vars */
import brandThumb from "/images/allimg/homepage/cleints/1.png";
import brandThumb2 from "/images/allimg/homepage/cleints/2.png";
import brandThumb3 from "/images/allimg/homepage/cleints/3.png";
import brandThumb4 from "/images/allimg/homepage/cleints/4.png";
import brandThumb5 from "/images/allimg/homepage/cleints/5.png";
import brandThumb6 from "/images/allimg/homepage/cleints/6.png";
import brandThumb7 from "/images/allimg/homepage/cleints/7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 500,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className="bg-[##FFFFFF]  pb-[76px]">
      <div className="Container">
      <h1 className="font-Inter text-center mb-4 font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[50px] 2xl:leading-[66px] text-[#02416A] mt-0 ">
      Our Customers
          </h1>
        {" "}
        <Swiper {...settings}>
  <SwiperSlide>
    <div className="flex justify-center">
      <img src={brandThumb} className="border-[1px] border-[#6B3C8C36] rounded-[10px] p-[1px]" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="flex justify-center">
      <img src={brandThumb2} className="border-[1px] border-[#6B3C8C36] rounded-[10px] p-[1px]" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="flex justify-center">
      <img src={brandThumb3} className="border-[1px] border-[#6B3C8C36] rounded-[10px] p-[1px]" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="flex justify-center">
      <img src={brandThumb4} className="border-[1px] border-[#6B3C8C36] rounded-[10px] p-[1px]" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="flex justify-center">
      <img src={brandThumb5} className="border-[1px] border-[#6B3C8C36] rounded-[10px] p-[1px]" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="flex justify-center">
      <img src={brandThumb6} className="border-[1px] border-[#6B3C8C36] rounded-[10px] p-[1px]" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="flex justify-center">
      <img src={brandThumb7} className="border-[1px] border-[#6B3C8C36] rounded-[10px] p-[1px]" />
    </div>
  </SwiperSlide>
</Swiper>

      </div>
    </div>
  );
};

export default Brand;
