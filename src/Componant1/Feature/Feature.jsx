import { Link } from "react-router-dom";
import boxImg from "/images/allimg/icons/1.png";
import boxImg2 from "/images/allimg/icons/2.png";
import boxImg3 from "/images/allimg/icons/3.png";
import boxImg4 from "/images/allimg/icons/4.png";

const Feature = () => {
  return (
    <section className="relative z-10 -mt-[42px] bg-[#F5F5F5] lg:p-11">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-7">
        <div className=" flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 overflow-hidden bg-BodyBg-0 px-9 py-8 rounded relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#02416A] before:transition-all before:duration-500 hover:before:w-0 shadow-2xl">

            <div className="bg-[#02416A] w-14 rounded-full p-3 transition-transform duration-300 hover:scale-110">
              <img src={boxImg}  />
            </div>
            <div className=" mt-2">
              <Link to='supplying-spare-parts'> 
              <h5 className="font-Inter font-semibold text-[22px] text-black uppercase">
              forklift spare parts
              </h5></Link>
              
            </div>
          </div>
          
          {/* <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 bg-BodyBg-0 px-9 py-8 rounded relative overflow-hidden before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 before:bg-SecondaryColor-0 efore:transition-all before:duration-500 hover:before:left-0 hover:before:w-full"> */}
          <div className=" flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 overflow-hidden bg-BodyBg-0 px-9 py-8 rounded relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#02416A] before:transition-all before:duration-500 hover:before:w-0 shadow-2xl">
          <div className="bg-[#02416A] w-14 rounded-full p-3 transition-transform duration-300 hover:scale-110">
              <img src={boxImg2}  />
            </div>
<div className=" mt-2">
<Link to='supplying-spare-parts'> 
  <h5 className="font-Inter font-semibold text-[22px] text-black uppercase">
  Service Contracts
  </h5>
  </Link>
  
</div>
</div>
          {/* <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 bg-BodyBg-0 px-9 py-8 rounded relative overflow-hidden before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 before:bg-SecondaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full"> */}
          <div className=" flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 overflow-hidden bg-BodyBg-0 px-9 py-8 rounded relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#02416A] before:transition-all before:duration-500 hover:before:w-0 shadow-2xl ">

          <div className="bg-[#02416A] w-14 rounded-full p-3 transition-transform duration-300 hover:scale-110">
              <img src={boxImg3}  />
            </div>
<div className=" mt-2">
  <h5 className="font-Inter font-semibold text-[22px] text-black uppercase">
  Repair and maintenance
  </h5>
  
</div>
</div>
          <div className=" flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 overflow-hidden bg-BodyBg-0 px-9 py-8 rounded relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#02416A] before:transition-all before:duration-500 hover:before:w-0 shadow-2xl">

          <div className="bg-[#02416A] w-14 rounded-full p-3 transition-transform duration-300 hover:scale-110">
              <img src={boxImg4}  />
            </div>
<div className=" mt-2">
  <h5 className="font-Inter font-semibold text-[22px] text-black uppercase">
  Forklift batteries




  </h5>
  
</div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Feature;