/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({blogThumb,thumbContent,blogDate,blogComment,blogUrl,blogTitle,btnContent,btnIcon}) => {
    return (
      <div className="bg-transparent group transition-all duration-500 hover:bg-white hover:shadow-cases rounded-md">
        <div className="relative overflow-hidden rounded-t-md">
          <img
            src={blogThumb}
            className="transition-all duration-500 scale-100 group-hover:scale-110 w-full"
          />
          {/* <div className="absolute right-0 -bottom-2">
            <h6 className="font-Inter text-[15px] text-center inline-block overflow-hidden rounded-s px-5 py-2 text-white transition-all duration-500 group-hover:text-white bg-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0">
              {thumbContent}
            </h6>
          </div> */}
        </div>
        <div className="px-5 sm:px-7 pb-8">
          {/* <div className="flex items-center gap-3 mt-7">
            <p className="font-Poppins font-light text-SecondaryColor-0 text-[15px]">
              {blogDate}
            </p>
            <p className="font-Poppins font-light text-SecondaryColor-0 text-[15px] relative z-10 pl-7 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-4 before:h-[1px] before:bg-SecondaryColor-0">
              {blogComment}
            </p>
          </div> */}
          <p className="font-Inter text-[12px] sm:text-base text-center font-bold text-[#02416A] transition-all duration-500 hover:text-[#FD9F00] mt-3 mb-5">
  {blogTitle}
</p>

            {/* <p className="flex gap-2  font-Inter font-medium text-[14px] text-[#666666] transition-all duration-500 border-b border-transparent  ">
              {btnContent}
            </p> */}
        </div>
      </div>
    );
};

export default Card;