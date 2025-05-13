import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import aboutThumb from "/images/allimg/homepage/5.jpg";
import aboutShape from "/images/about-shape2.png";
import icon from "/images/counter-icon.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { CiPlay1 } from "react-icons/ci";

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="py-[120px]">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-24 items-center">
          <div className="relative">
            <img src={aboutThumb} />
            {/* <div className="absolute top-[4.5rem] right-[3rem]">
              <button
                className="h-[90px] w-[90px] rounded-full bg-SecondaryColor-0 border-4 border-white text-white flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping"
                onClick={() => setToggler(!toggler)}
              >
                <CiPlay1 size={"30"} />
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
              />
            </div> */}
          </div>
          <div className="relative">
            {/* <img
              src={aboutShape}
              className="absolute -top-6 right-0 animate-rotational"
            /> */}
            {/* <h5 className="font-Inter font-medium text-SecondaryColor-0">
            Our services
            </h5> */}
           
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3 mb-3">
            Our services
            </h1>
            <div className="flex gap-4" >
            <h2 className="bg-[#02416A] w-7 h-7 rounded-full flex items-center justify-center p-1">
  <FaArrowRightLong className="bg-white rounded-full text-[#02416A] text-[15px]" />
  
</h2>
<Link to='repair-maintenance'>
<h4 className="lg:font-[700] lg:text-[18px]">Repair & Maintenance</h4></Link>
            </div>
            <div className="flex gap-4 mt-5" >
            <h2 className="bg-[#02416A] w-7 h-7 rounded-full flex items-center justify-center p-1">
  <FaArrowRightLong className="bg-white rounded-full text-[#02416A] text-[15px]" />
  
</h2>
<Link to='service-contracts'>
<h4 className="lg:font-[700] lg:text-[18px]">Service Contracts</h4></Link>
            </div>
            


            <div className="flex gap-4 mt-5" >
            <h2 className="bg-[#02416A] w-7 h-7 rounded-full flex items-center justify-center p-1">
  <FaArrowRightLong className="bg-white rounded-full text-[#02416A] text-[15px]" />
  
</h2>
<Link to='supplying-spare-parts'>
<h4 className="lg:font-[700] lg:text-[18px]">Supplying Spare Parts</h4></Link>
            </div>
            <div className="flex gap-4 mt-5" >
            <h2 className="bg-[#02416A] w-7 h-7 rounded-full flex items-center justify-center p-1">
  <FaArrowRightLong className="bg-white rounded-full text-[#02416A] text-[15px]" />
  
</h2>
<Link to='consultancy'>
<h4 className="lg:font-[700] lg:text-[18px]">Consultancy </h4></Link>
            </div>
            <div className="flex gap-4 mt-5" >
            <h2 className="bg-[#02416A] w-7 h-7 rounded-full flex items-center justify-center p-1">
  <FaArrowRightLong className="bg-white rounded-full text-[#02416A] text-[15px]" />
  
</h2>
<Link to='trainings'>
<h4 className="lg:font-[700] lg:text-[18px]">Trainings </h4></Link>
            </div>

            {/* <p className="font-Poppins text-TextColor-0 font-light">
            Welcome toAdvanced Accurate Arabia Operation & Maintenance co Forklifts—your trusted partner for all forklift solutions in Saudi Arabia. We specialize in forklift rental, forklift maintenance and repairs, and forklift battery repair. Our expert team ensures that your material handling equipment works efficiently, whether you need a battery-operated forklift or a traditional model.
            </p> */}
            <div className="flex flex-col md:flex-row gap-8 justify-between mt-7">
              <div>
                {/* <ul>
                  <li className="flex items-center gap-2 font-Inter text-HeadingColor-0 mb-[14px]">
                    <FaCircleCheck className="text-lg text-SecondaryColor-0" />
                    Cleeny Your Home or Office
                  </li>
                  <li className="flex items-center gap-2 font-Inter text-HeadingColor-0 mb-[14px]">
                    <FaCircleCheck className="text-lg text-SecondaryColor-0" />
                    24/7 Emmergency Quality Services
                  </li>
                  <li className="flex items-center gap-2 font-Inter text-HeadingColor-0 mb-[14px]">
                    <FaCircleCheck className="text-lg text-SecondaryColor-0" />
                    Online Booking System available
                  </li>
                </ul> */}
                {/* <Link to={"/about"}>
                  <button className="primary-btn2 mt-9">
                  work with us
                    <FaArrowRightLong size={"20"} />
                  </button>
                </Link> */}
              </div>
              {/* <div className="bg-PrimaryColor-0 rounded-lg w-[192px] h-[192px] flex justify-center items-center flex-col">
                <img src={icon} />
                <CountUp
                  start={-11}
                  end={12}
                  suffix="+"
                  className="text-[36px] font-Inter font-bold text-HeadingColor-0"
                />
                <p className="font-Poppins text-TextColor-0 font-light">
                  Years Experience
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
