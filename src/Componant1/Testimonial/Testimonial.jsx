/* eslint-disable no-unused-vars */
import testiImg from "/images/testi-thumb-2.png";
import testiImg2 from "/images/testi-thumb.png";
import testiIcon from "/images/testi-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";
import { FaFacebookF } from "react-icons/fa6";
import { BiExpand, BiUser } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { TbEyeSearch } from "react-icons/tb";

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Expertise and Experience",
    testiDesignation: "Web Developer",
    testiTitle: "Service Quality",
    testiDesc: "With over 5 years of experience in the material handling industry, our team of forklift specialists brings unparalleled knowledge to the table. We understand the challenges you face and are dedicated to helping you find the right equipment to improve efficiency and safety in your operations.",
    testiIcon:  <BiExpand/>,
  },
  {
    id: 2,
    testiImg: testiImg2,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Unmatched Customer Service",
    testiDesignation: "UI/UX Designer",
    testiTitle: "Service Quality",
    testiDesc: "Customer satisfaction is our top priority. Our team is committed to providing personalized service every step of the way. From the initial consultation to after-sales support, we ensure that your needs are met with timely, professional assistance.",
    testiIcon: <BiUser/>,
  },
  
];
const testiData1 = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Comprehensive Maintenance and Support",
    testiDesignation: "Web Developer",
    testiTitle: "Service Quality",
    testiDesc: "Our commitment to you doesn’t end at the sale. We offer comprehensive maintenance packages and support to keep your forklifts running smoothly. With our team of certified technicians, you can minimize downtime and extend the lifespan of your equipment.",
    testiIcon: <CiSettings/>,
  },
  {
    id: 2,
    testiImg: testiImg2,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Nationwide Delivery AND Support",
    testiDesignation: "UI/UX Designer",
    testiTitle: "Service Quality",
    testiDesc:"We are proud to serve clients across Saudi Arabia, offering fast and reliable delivery of equipment. Our support network spans nationwide, so whether you need assistance locally or remotely, we are here to help.",
    testiIcon:  <TbEyeSearch/>,
  },
  
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="bg-white bg-cover bg-center bg-no-repeat py-20">
      <div className="Container">
        <div className="text-center">
          {/* <h5 className="font-Inter font-medium text-PrimaryColor-0">
            TESTIMONIALS
          </h5> */}
          <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-[#02416A] mt-3">
          Why Choose Us
          </h1>
          <p>At our forklifts division, we pride ourselves on being a trusted leader in the industry. Here's why businesses across Saudi Arabia choose us as their go-to partner for all their material handling needs:</p>
        </div>
        <div className="mt-[40px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiImg,
                  testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiTitle,
                  testiDesc,
                  testiIcon,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pb-[80px] pt-3">
                        <TestimonialCard
                          testiImg={testiImg}
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiTilte={testiTitle}
                          testiDesc={testiDesc}
                          testiIcon={testiIcon}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
            
          </Swiper>
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            <div>
              {testiData1.map(
                ({
                  id,
                  testiImg,
                  testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiTitle,
                  testiDesc,
                  testiIcon,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pb-[80px] pt-3">
                        <TestimonialCard
                          testiImg={testiImg}
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiTilte={testiTitle}
                          testiDesc={testiDesc}
                          testiIcon={testiIcon}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
