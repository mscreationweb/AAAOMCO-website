import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import aboutThumb from "/images/allimg/aboutpage/1.webp";
import aboutThumb2 from "/images/allimg/aboutpage/2.jpeg";
import aboutShape from "/images/about-shape3.png";
import aboutShape2 from "/images/about-shape4.png";
import icon from "/images/counter-icon.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import RepairMaintenance from "../../Pages/RepairMaintenance/RepairMaintenance";

const About = () => {
  return (
<div>
   <section className="bg-[#F5F5F5] bg-cover bg-center bg-no-repeat py-0 mt-10">
  <div className="Container">

    {/* First Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 items-center">
      <div className="relative z-10 h-full">
        <img
          src={aboutThumb}
          className="h-full w-full object-cover"
          alt="About Thumbnail"
        />
      </div>
      <div>
        <p className="font-Poppins text-TextColor-0 font-light">
          Welcome toAdvanced Accurate Arabia Operation & Maintenance co Forklifts—your trusted partner for all forklift
          solutions in Saudi Arabia. We specialize in forklift rental, forklift
          maintenance and repairs, and forklift battery repair. Our expert team
          ensures that your material handling equipment works efficiently, whether
          you need a battery-operated forklift or a traditional model.
        </p>
      </div>
    </div>

    {/* Second Section (touching the first image) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 items-center mt-[-1px]">
      <div>
      {/* <h1 className="uppercase font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[50px] 2xl:leading-[66px] text-[#02416A] mt-0 mb-4">
     
          </h1> */}
          <button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-9 mb-6">
          Our Vision
                    </button>
        <p className="font-Poppins text-TextColor-0 font-light">
        We offer a wide range of services, including forklift operator training to ensure safety and productivity. Plus, we provide high-quality forklift parts and a thorough forklift inspection checklist to keep everything in check. AtAdvanced Accurate Arabia Operation & Maintenance co Forklifts, we're here to make sure your forklifts are always ready to handle your business needs.
        </p>
      </div>
      <div className="relative z-10 h-full">
        <img
          src={aboutThumb2}
          className="h-full w-full object-cover"
          alt="About Thumbnail 2"
        />
      </div>
    </div>

  </div>
</section>
{/* <RepairMaintenance/> */}


</div>


  );
};

export default About;
