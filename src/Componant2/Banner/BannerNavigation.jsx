import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const BannerNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="w-full absolute top-[80%] sm:top-[60%] lg:top-[50%] 2xl:top-[44%] px-[2%] hidden sm:flex justify-between items-center">
  {/* Left Button */}
  <div className="absolute left-0">
    <button
      className="w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden relative bg-[#ffffff2c] flex items-center text-xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-[#02416A] after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
      onClick={() => swiper.slidePrev()}
    >
      <FaChevronLeft />
    </button>
  </div>

  {/* Right Button */}
  <div className="absolute right-0">
    <button
      className="w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden relative bg-[#ffffff2c] flex items-center text-xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-[#02416A] after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
      onClick={() => swiper.slideNext()}
    >
      <FaChevronRight />
    </button>
  </div>
</div>


  );
};

export default BannerNavigation;
