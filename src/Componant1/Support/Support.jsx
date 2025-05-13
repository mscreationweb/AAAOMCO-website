import { MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import supportShape from "/images/address-thumb.png";

const Support = () => {
  return (
    <section className="relative z-10 w-full bg-[url('/images/allimg/homepage/bg-image.jpg')] bg-cover bg-center bg-no-repeat py-[100px] px-4 md:px-16 rounded-md
    before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-50 before:rounded-md before:-z-10">
  
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-1 items-center gap-10 max-w-7xl mx-auto">
      
      {/* Left Text */}
      <div className="text-white px-4">
        <p className=" text-center font-Inter font-bold text-xl leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px]">
          Choose us for expert solutions designed to ensure reliable performance and long-term satisfaction
        </p>
      </div>
  
      {/* Right Video */}
      {/* <div className="flex justify-center lg:justify-end px-4">
        <iframe
          className="w-full max-w-md aspect-video rounded-md shadow-lg"
          src="https://www.youtube.com/embed/OAzMBcYNLEU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
  
    </div>
  </section>
  
  );
};

export default Support;
