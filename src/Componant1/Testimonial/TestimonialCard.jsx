import { FaFacebookF } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiTilte,
  testiDesc,
  testiIcon,
}) => {
  return (
    <div className="px-5 sm:px-10 relative bg-[#02416A] group rounded-xl z-10 overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-[#FD9F00] before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 pt-14">
        <div>
         <button className=" bg-white text-[#FD9F00] w-12 h-12 rounded-full border-2 border-[#FD9F00] flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-[#02416A] relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-[#02416A] before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
         <span className="text-[30px]">{testiIcon}</span>
            </button>
        </div>
        <div>
          {/* <ul className="flex gap-1 items-center text-xl text-PrimaryColor-0">
            <li>{testiRatingIcon}</li>
            <li>{testiRatingIcon}</li>
            <li>{testiRatingIcon}</li>
            <li>{testiRatingIcon}</li>
            <li>{testiRatingIcon}</li>
          </ul> */}
          <h5 className="font-Inter font-medium text-white text-xl mt-3 mb-2">
            {testiName}
          </h5>
          {/* <p className="font-Poppins text-[#788AC6] transition-all duration-500 group-hover:text-white text-[15px]">
            {testiDesignation}
          </p> */}
        </div>
      </div>
      <h6 className="font-Inter font-medium text-PrimaryColor-0 text-lg mt-7 mb-5">
        {/* {testiTilte} */}
      </h6>
      <p className="font-Poppins text-white font-light pb-12">{testiDesc}</p>
      {/* <div className="absolute top-[60px] right-10">
        <img src={testiIcon} />
      </div> */}
    </div>
  );
};

export default TestimonialCard;
