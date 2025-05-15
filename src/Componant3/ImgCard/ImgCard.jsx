/* eslint-disable no-unused-vars */
import { FaArrowRightLong } from "react-icons/fa6";
import blogThumb from "/images/allimg/product/1.webp";
import blogThumb2 from "/images/allimg/product/2.webp";
import blogThumb3 from "/images/allimg/product/3.webp";
import blogThumb4 from "/images/allimg/product/4.webp";
import blogThumb5 from "/images/allimg/product/5.webp";
import blogThumb6 from "/images/allimg/product/6.webp";
import blogThumb7 from "/images/allimg/product/7.webp";
import blogThumb8 from "/images/allimg/product/8.webp";
import blogThumb9 from "/images/allimg/product/9.webp";
import blogThumb10 from "/images/allimg/product/10.webp";
import blogThumb11 from "/images/allimg/product/11.webp";
import blogThumb12 from "/images/allimg/product/12.webp";
import blogThumb13 from "/images/allimg/product/13.webp";
import blogThumb14 from "/images/allimg/product/14.webp";
import blogThumb15 from "/images/allimg/product/15.webp";
import blogThumb16 from "/images/allimg/product/16.webp";
import blogThumb17 from "/images/allimg/product/17.webp";
import blogThumb18 from "/images/allimg/product/18.webp";
import blogThumb19 from "/images/allimg/product/19.webp";
import blogThumb20 from "/images/allimg/product/20.webp";
// import BlogCard from "./BlogCard";
import Card from "./Card";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Steering Axle",
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Lights (Front& Rear)",
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Fuel Filter - Oil Filter",
  },
  {
    id: 4,
    blogThumb: blogThumb4,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Instrument Panel",
  },
  {
    id: 5,
    blogThumb: blogThumb5,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Seat Assembly",
  },
  {
    id: 6,
    blogThumb: blogThumb6,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Controller",
  },
  {
    id: 7,
    blogThumb: blogThumb7,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Battery",
  },
  {
    id: 8,
    blogThumb: blogThumb8,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Starter Motor",
  },
  {
    id: 9,
    blogThumb: blogThumb9,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Radiator",
  },
  {
    id: 10,
    blogThumb: blogThumb10,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Brake Assembly",
  },
  {
    id: 11,
    blogThumb: blogThumb11,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Tires (Solid-Pneumatic)",
  },
  {
    id:12 ,
    blogThumb: blogThumb12,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Drive Axle",
  },
  {
    id:13 ,
    blogThumb: blogThumb13,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Overhead Guard",
  },
  {
    id: 14,
    blogThumb: blogThumb14,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Load Backrest",
  },
  {
    id: 15,
    blogThumb: blogThumb15,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Tilt Cylinder",
  },
  {
    id: 16,
    blogThumb: blogThumb16,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Hydraulic Cylinders",
  },
  {
    id: 17,
    blogThumb: blogThumb17,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Lift Chain",
  },
  {
    id:18 ,
    blogThumb: blogThumb18,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Carriage",
  },
  {
    id:19 ,
    blogThumb: blogThumb19,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Mast",
  },
  {
    id: 20,
    blogThumb: blogThumb20,
    // thumbContent: "Repair & Maintenance",
    blogTitle: "Forks",
  },
 
];

const ImgCard = () => {
  return (
    <section className="py-10 -mb-[130px]">
      <div className="Container">
        <div >
          {/* <h5 className="font-Inter inline-block text-lg text-SecondaryColor-0 font-medium px-9 relative before:absolute before:top-1/2 before:left-0 before:w-6 before:h-3 before:bg-[url(/images/cleaning-shapes.png)] before:bg-no-repeat before:bg-[inherit] before:-translate-y-1/2 after:absolute after:top-1/2 after:right-0 after:w-6 after:h-3 after:bg-[url(/images/cleaning-shapes.png)] after:bg-no-repeat after:bg-[inherit] after:-translate-y-1/2">
            LATEST NEWS
          </h5> */}
          {/* <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[50px] 2xl:leading-[66px] text-[#02416A] mt-0 mb-4">
          What We Do
          </h1> */}
          {/* <p className="font-Poppins text-[#313131] font-light">
          We areAdvanced Accurate Arabia Operation & Maintenance co Forklifts, your trusted provider of forklift solutions in Saudi Arabia. Specializing in forklift repair & maintenance, supplying spare parts, and offering service contracts, we ensure your material handling equipment operates at peak performance. Our team is dedicated to providing reliable services that keep your forklifts running smoothly, minimizing downtime and maximizing productivity for your business.
          </p> */}
        </div>
        <div className="mt-[60px]">
         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-7">

            {blogData.map(
              ({
                id,
                blogThumb,
                thumbContent,
                blogDate,
                blogComment,
                blogUrl,
                blogTitle,
                btnContent,
                btnIcon,
              }) => {
                return (
                  <div key={id}>
                    <Card
                      blogThumb={blogThumb}
                      thumbContent={thumbContent}
                    //   blogDate={blogDate}
                    //   blogComment={blogComment}
                    //   blogUrl={blogUrl}
                      blogTitle={blogTitle}
                    //   btnContent={btnContent}
                    //   btnIcon={btnIcon}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgCard;
