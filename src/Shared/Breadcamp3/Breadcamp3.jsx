/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import breadCampShape from "/images/breatcome-shape.png";

const Breadcamp3 = ({
  breadCampTitle,
  breadcampIcon,
  breadcampIcon2,
  url,
  breadCampLink,
  breadCampContent,
}) => {
  return (
    <div className="relative h-[400px] sm:h-[450px] text-center pt-20 flex items-center bg-[url('/images/allimg/mainbg/3.jpg')] bg-no-repeat bg-cover bg-center">
    {/* Blue Tint Overlay */}
    <div className="absolute inset-0 bg-[#02416A] opacity-60 z-0"></div>
  
    {/* Main Content */}
    <div className="Container relative z-10">
      
      {/* Optional Shape Animations (uncomment if needed) */}
      {/*
      <img
        src={breadCampShape}
        className="absolute -top-24 right-24 animate-zoomInOut hidden md:block"
      />
      <img
        src={breadCampShape}
        className="absolute -bottom-24 left-0 animate-dance2 hidden md:block"
      />
      */}
  
      {/* Title */}
      <h1 className="font-Inter font-bold text-4xl sm:text-[46px] text-white capitalize">
        {breadCampTitle}
      </h1>
  
      {/* Breadcrumb Navigation */}
      <ul className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center mt-8 sm:mt-5">
        <li>
          <Link to={"/"}>
            {/* Uncomment if needed */}
            {/*
            <button className="font-Inter text-white flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0">
              <IoHome className="text-PrimaryColor-0" /> Cleeny
            </button>
            */}
          </Link>
        </li>
        <li>
          <div className="text-white hidden sm:block">{breadcampIcon}</div>
        </li>
        <li>
          <Link to={url}>
            <button className="font-Inter capitalize flex gap-2 text-white">
              {breadCampLink}
            </button>
          </Link>
        </li>
        <li>
          <div className="text-white hidden sm:block">{breadcampIcon2}</div>
        </li>
        <li>
          <Link to={url}>
            <button className="font-Inter capitalize flex gap-2 text-white opacity-70">
              {breadCampContent}
            </button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  

  );
};

export default Breadcamp3;
