import boxImg from "/images/feature-icon.png";
import boxImg2 from "/images/feature-icon2.png";
import boxImg3 from "/images/feature-icon3.png";

const Feature = () => {
  return (
    <section className="relative z-10 -mt-[42px]">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-7">
        <div className=" flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 overflow-hidden bg-BodyBg-0 px-9 py-8 rounded relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-SecondaryColor-0 before:transition-all before:duration-500 hover:before:w-0">

            <div>
              <img src={boxImg} />
            </div>
            <div className=" mt-2">
              <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0 uppercase">
              forklift spare parts
              </h5>
              
            </div>
          </div>
          
          {/* <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 bg-BodyBg-0 px-9 py-8 rounded relative overflow-hidden before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 before:bg-SecondaryColor-0 efore:transition-all before:duration-500 hover:before:left-0 hover:before:w-full"> */}
          <div className=" flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 overflow-hidden bg-BodyBg-0 px-9 py-8 rounded relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-SecondaryColor-0 before:transition-all before:duration-500 hover:before:w-0">

<div>
  <img src={boxImg} />
</div>
<div className=" mt-2">
  <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0 uppercase">
  forklift spare parts
  </h5>
  
</div>
</div>
          {/* <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 bg-BodyBg-0 px-9 py-8 rounded relative overflow-hidden before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 before:bg-SecondaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full"> */}
          <div className=" flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 overflow-hidden bg-BodyBg-0 px-9 py-8 rounded relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-SecondaryColor-0 before:transition-all before:duration-500 hover:before:w-0">

<div>
  <img src={boxImg} />
</div>
<div className=" mt-2">
  <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0 uppercase">
  forklift spare parts
  </h5>
  
</div>
</div>
          <div className=" flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 overflow-hidden bg-BodyBg-0 px-9 py-8 rounded relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-SecondaryColor-0 before:transition-all before:duration-500 hover:before:w-0">

<div>
  <img src={boxImg} />
</div>
<div className=" mt-2">
  <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0 uppercase">
  forklift spare parts
  </h5>
  
</div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
