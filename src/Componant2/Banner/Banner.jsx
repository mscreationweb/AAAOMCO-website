import { Link } from "react-router-dom";
import bannerShape1 from "/images/hero-shape2.png";
import bannerShape2 from "/images/hero-shape.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BannerNavigation from "./BannerNavigation";

const Banner = () => {
  const settings = {
    loop: true,
    speed: 2000,
    autoplay: true,
    duration: 3000,
  };
  return (
    <div className="relative">
      <Swiper {...settings}>
        <SwiperSlide>
   <section className="bg-[url('/images/allimg/bg/Banner1.webp')] bg-contain sm:bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full -mt-[70px] sm:mt-0">
  <div className="w-full px-4 sm:px-6 lg:px-8 ">
    <div className="relative max-w-screen-xl mx-auto " >
      <h1 className="font-Inter font-bold text-white text-[18px] leading-[26px] sm:text-3xl sm:leading-[44px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12 ">
        <br/>
        <span> Routine Maintenance <br /> Contracts</span>
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide>



 <SwiperSlide>
   <section className="bg-[url('/images/allimg/bg/Banner2.webp')] bg-contain sm:bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full -mt-[70px] sm:mt-0">
  <div className="w-full px-4 sm:px-6 lg:px-8 ">
    <div className="relative max-w-screen-xl mx-auto " >
      <h1 className="font-Inter font-bold text-white text-[18px] leading-[26px] sm:text-3xl sm:leading-[44px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12 ">
        <br/>
         Reliable Forklifts <br/>Parts Supply
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide>


         <SwiperSlide>
   <section className="bg-[url('/images/allimg/bg/Banner3.webp')] bg-contain sm:bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full -mt-[70px] sm:mt-0">
  <div className="w-full px-4 sm:px-6 lg:px-8 ">
    <div className="relative max-w-screen-xl mx-auto " >
      <h1 className="font-Inter font-bold text-white text-[18px] leading-[26px] sm:text-3xl sm:leading-[44px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12 ">
        <br/>
        Forklift Maintenance <br/>And Repair
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide>




 <SwiperSlide>
   <section className="bg-[url('/images/allimg/bg/Banner4.webp')] bg-contain sm:bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full -mt-[70px] sm:mt-0">
  <div className="w-full px-4 sm:px-6 lg:px-8 ">
    <div className="relative max-w-screen-xl mx-auto " >
      <h1 className="font-Inter font-bold text-white text-[18px] leading-[26px] sm:text-3xl sm:leading-[44px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12 ">
        <br/>
        Quick-response <br/>Emergency Solutions
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide>
        


<SwiperSlide>
   <section className="bg-[url('/images/allimg/bg/Banner5.webp')] bg-contain sm:bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full -mt-[70px] sm:mt-0">
  <div className="w-full px-4 sm:px-6 lg:px-8 ">
    <div className="relative max-w-screen-xl mx-auto " >
      <h1 className="font-Inter font-bold text-white text-[18px] leading-[26px] sm:text-3xl sm:leading-[44px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12 ">
        <br/>
         New Parts Supply
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide>



        
<SwiperSlide>
   <section className="bg-[url('/images/allimg/bg/Banner6.webp')] bg-contain sm:bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full -mt-[70px] sm:mt-0">
  <div className="w-full px-4 sm:px-6 lg:px-8 ">
    <div className="relative max-w-screen-xl mx-auto " >
      <h1 className="font-Inter font-bold text-white text-[18px] leading-[26px] sm:text-3xl sm:leading-[44px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12 ">
        <br/>
          Prompt Emergency <br/>Call Solution
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide>


{/* 
        <SwiperSlide>
        <section className="bg-[url('/images/allimg/bg/Banner2.webp')] bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full">
  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="relative max-w-screen-xl mx-auto">
      <h1 className="font-Inter font-bold text-white text-[24px] leading-[36px] sm:text-4xl sm:leading-[60px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12">
      Reliable Forklifts <br/>Parts Supply
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide> */}
        




        {/* <SwiperSlide>
        <section className="bg-[url('/images/allimg/bg/Banner3.webp')] bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full">
  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="relative max-w-screen-xl mx-auto">
      <h1 className="font-Inter font-bold text-white text-[24px] leading-[36px] sm:text-4xl sm:leading-[60px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12">
      Forklift Maintenance <br/>And Repair
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide> */}




        
        {/* <SwiperSlide>
        <section className="bg-[url('/images/allimg/bg/Banner4.webp')] bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full">
  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="relative max-w-screen-xl mx-auto">
      <h1 className="font-Inter font-bold text-white text-[24px] leading-[36px] sm:text-4xl sm:leading-[60px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12">
      Quick-response <br/>Emergency Solutions
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide> */}





        
        {/* <SwiperSlide>
        <section className="bg-[url('/images/allimg/bg/Banner5.webp')] bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full">
  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="relative max-w-screen-xl mx-auto">
      <h1 className="font-Inter font-bold text-white text-[24px] leading-[36px] sm:text-4xl sm:leading-[60px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12">
      New Parts Supply
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide> */}





        
        {/* <SwiperSlide>
        <section className="bg-[url('/images/allimg/bg/Banner6.webp')] bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] flex items-center w-full">
  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="relative max-w-screen-xl mx-auto">
      <h1 className="font-Inter font-bold text-white text-[24px] leading-[36px] sm:text-4xl sm:leading-[60px] lg:text-[48px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12">
      Prompt Emergency <br/>Call Solution
      </h1>
    </div>
  </div>
</section>

        </SwiperSlide> */}


        {/* <SwiperSlide>
          <section className="bg-[url('/images/allimg/bg/Banner1.webp')] bg-cover bg-center bg-no-repeat h-[400px] flex items-center">
            <div className="Container">
              <div className="relative">
               
                <h1 className="font-Inter font-bold text-white text-[34px] leading-[44px] sm:text-6xl sm:leading-[70px] lg:text-[58px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12">
                Quick-Response <br/>Emergency Solutions
                </h1>
               
              </div>
            </div>
          </section>
        </SwiperSlide> */}
        <BannerNavigation />
      </Swiper>
    </div>
  );
};

export default Banner;
