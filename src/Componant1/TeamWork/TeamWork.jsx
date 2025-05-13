import { CiPlay1 } from "react-icons/ci";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const TeamWork = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <section className="relative z-10 w-full bg-[url('/images/allimg/homepage/bg-image.jpg')] bg-cover bg-center bg-no-repeat py-[100px] px-4 md:px-16 
    before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#02416A] before:opacity-80  before:-z-10 -mt-[16px]">
  
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-12 items-center gap-10 max-w-7xl mx-auto">
        
        {/* Left Text (Full width on mobile, 70% on large screens) */}
        <div className="sm:w-full lg:col-span-12 text-white px-4">
          <p className="text-center font-Inter font-bold text-xl leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px]">
            With dedication, innovation, and teamwork,
          </p>
          <p className="text-center ">
            With dedication, innovation, and teamwork,
            we've set new standards for reliability and efficiency. Together, we are driving progress and lifting possibilities.
          </p>
        </div>
    
        {/* Right Video Button and Lightbox (Full width on mobile, 30% on large screens) */}
        {/* <div className="sm:w-full lg:col-span-4 flex justify-center mt-4 lg:mt-0">
          <button
            className="h-[90px] w-[90px] rounded-full bg-[#FD9F00] border-4 border-white text-white flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#FD9F00] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping"
            onClick={() => setToggler(!toggler)}
          >
            <CiPlay1 size={"30"} />
          </button>
          <FsLightbox
            toggler={toggler}
            sources={[ "https://www.youtube.com/watch?v=OAzMBcYNLEU" ]}
          />
        </div> */}
      </div>
    </section>
  );
};

export default TeamWork;
