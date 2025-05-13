import { Link } from "react-router-dom";
// import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import blogListImg from "/images/sidber-thumb.png";
import blogDetailsImg from "/images/blog-thumb8.png";
import blogDetailsImg2 from "/images/blog-thumb9.png";
import itemthumb from "/images/post1.png";
import itemthumb2 from "/images/post2.png";
import itemthumb3 from "/images/post3.png";
import { IoSearch } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaArrowRightLong,
  FaCircleCheck,
  FaCommentsDollar,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCalendarCheck,
  FaRegFolderOpen,
  FaSquare,
  FaXTwitter,
} from "react-icons/fa6";
import { BiSolidQuoteAltRight, BiSolidShare } from "react-icons/bi";
import Breadcamp from "../../Shared/Breadcamp/Breadcamp";
import Breadcamp5 from "../../Shared/Breadcamp5/Breadcamp5";

const Trainings  = () => {
  return (
    <>
      <Breadcamp5
        breadCampTitle={"Trainings "}
        // url={"/blog"}
        // breadcampIcon={<FaArrowRightLong />}
        // breadcampIcon2={<FaArrowRightLong />}
        // breadCampLink={"Blog"}
        // breadCampContent={"Floor Cleaning Using New Equipment"}
      />
      <section className="py-28 -mb-40">
        <div className="Container lg:w-full w-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 ">
            <div className="col-span-2 ">
              <div className="border border-BorderColor-0 rounded-md overflow-hidden " >
            
                <div className="px-2 sm:px-8 ">
                    <button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-9 mb-6">
                  Best  Forklift Training Services in Saudi Arabia
                    </button>
                  {/* <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-7">
                    <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
                      <FaUserCircle className="text-4xl text-[#dedede]" />
                      Jhon Alexon
                    </h6>
                    <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
                      <FaRegCalendarCheck className="text-lg text-SecondaryColor-0" />
                      Jan 10, 2024
                    </h6>
                    <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
                      <FaCommentsDollar className="text-lg text-SecondaryColor-0" />
                      02 Comments
                    </h6>
                  </div> */}
                  <p className="font-Poppins font-light text-black border-t border-BorderColor1-0 pt-5">At
                  <span className="text-[#FD9F00] font-medium">Advanced Accurate Arabia Operation & Maintenance co </span>,we provide outstanding forklift training aimed at individuals wanting to become skilled and certified forklift operators. Our training equips you to proficiently use different models of forklifts and get your forklift driving license in Saudi Arabia. This training is critical for those wishing to work as a forklift drivers, and it also offers career enhancement opportunities in diverse industries across the kingdom.
                  </p>
                  <p className="font-Poppins font-light text-black  pt-5">With no prior knowledge or experience, our training prepares you to effectively operate a forklift. The demand for skilled forklift operators has been rising in Saudi Arabia and we are willing to offer you the best training available.
                  </p>
                  {/* <p className="font-Poppins font-light text-black mt-5">
                  For peak performance of your forklift, you need our maintenance and repair services to avoid costly repairs and unexpected breakdowns. Our tailored shred quality services fully meets clients’ repair and service needs across a range of popular forklift brands including electric, cat, Toyota and many other branded models
                  </p> */}
                  {/* <div className="flex flex-col bg-[#f3f4f8] sm:flex-row gap-7 px-4 sm:px-11 py-4 sm:py-10 rounded-md mt-12">
                    <div className="text-6xl text-SecondaryColor-0">
                      <BiSolidQuoteAltRight />
                    </div>
                    <div className="flex-1">
                      <p className="font-Poppins text-HeadingColor-0 sm:text-lg italic">
                        “Monotonectally impact reliable alignments vis-a-vis
                        corporate architectures ortals through cross functional
                        deliverables. testing procedures”
                      </p>
                      <h6 className="font-Inter text-HeadingColor-0 pl-16 mt-4 relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-14 before:h-[1px] before:bg-SecondaryColor-0">
                        CEO & Founder
                      </h6>
                    </div>
                  </div> */}
                    <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-14 mb-4">
                    Why Forklift Operators Are in Demand in Saudi Arabia
                    </button>
                  <p className="font-Poppins font-light ">
               The forklift operator profession is highly in demand especially in the logistics, warehousing, and construction industries due to the rapid economic expansion of Saudi Arabia. As businesses grow, there will always be a need for qualified workforce who can operate forklifts in a safe and productive manner. Being certified as a forklift driver increases your chances of getting a job and makes you more marketable to employers. Our 
                  <span className="text-[#FD9F00] font-medium"> consultancy </span>services can help guide you in the right direction for training and career opportunities.
                 </p>
            {/* <div> <FaSquare size={10} className="text-[#313131]" />
            </div>

                  <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#313131] transition-all duration-500 hover:[#02416A] mt-14 mb-4">
                  How We Can Help You:
                    </button> */}
                    {/* <p className="font-Poppins font-light ">These services are aimed at repair and maintenance of forklifts with the goal of preventing unwanted expenses as well as ensuring that the forklifts are ready when needed.</p> */}

                  <ul className="flex flex-col gap-[14px] mt-7 ">
                  <div className="flex items-start gap-2 lg:ml-5">
  <FaSquare size={20} className="mt-1 text-[#313131] sm:font-black text-2xl"  />
  <p className="font-Poppins text-[#313131]">
    <span className="font-bold">Forklift Operator Jobs in Saudi Arabia: </span> 
    he good news for aspiring qualified forklift operators is that there is an abundance of these jobs across Saudi Arabia. Trained forklift drivers are needed in big warehouses as well as on construction sites. With the completion of our training program, you will be able to take advantage of these positions and kickstart your career as a qualified forklift operator
  </p>
</div>
                












                  {/* <div className="flex flex-col lg:flex-row items-start gap-2">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
    <FaSquare size={10} className="text-[#313131]" />
    Forklift Repairs
  </li>
  <span className="font-normal">
   : From small to big troubleshooting issues, we can take care of it all.
  </span>
</div> */}




                    {/* <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px]">
                      <FaSquare
                        size={"10"}
                        className="text-[#313131]"
                      />
                       Forklift Price in KSA<span className="font-normal">:In case your company wants to get a new forklift, we can assist in understanding the forklift price in KSA, and help you save money that’s beneficial for your company.</span>
                    </li> */}
                  
                   
                    
                  </ul>
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">
                    <div>
                      <img src={blogDetailsImg} />
                    </div>
                    <div>
                      <img src={blogDetailsImg2} />
                    </div>
                  </div> */}
                    <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#02416A]  mt-10 mb-4">
                    Meet Our  Experts Trainers  Who Ensure Your Success
                    </button>
                    <p className="font-Poppins font-light text-black border-t border-BorderColor1-0 pt-5 mb-3">
                 These trainers are passionate educators, and certified
                 <span className="text-[#02416A] font-medium"> forklift </span>professionals that ensure you enjoy the non-forking training experience. Having worked many years on forklifts, they know relevant practical information that can help you.
                  </p>
                    <p className="font-Poppins font-light text-black  pt-5 mb-3">
               Our trainers prioritize the following aspects:
                  </p>

 <div className="flex items-start gap-2 lg:ml-5">
  <FaSquare size={10} className="mt-2 text-[#313131] sm:font-black text-2xl"  />
  <p className="font-Poppins text-[#313131]">
    <span className="font-bold">Safety Comes First: </span> 
Our trainers explain safety as an integral component that has to be fused with every aspect of the forklift operation. As a result, you will learn how to operate the forklifts in a manner that abides by all safety requirements and minimizes hazards.
  </p>
</div>

 <div className="flex items-start gap-2 lg:ml-5">
  <FaSquare size={10} className="mt-2 text-[#313131] sm:font-black text-2xl"  />
  <p className="font-Poppins text-[#313131]">
    <span className="font-bold">Practical Instruction: </span> 
 Learning through practice is the most effective approach. Our trainers will walk you through practical sessions that will allow you to operate the forklift and build the competence needed to succeed.</p>
</div>











                   





  


 



  
  


















  <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-14 mb-4">
Why Choose Us for Forklift Training?
                    </button>
                    <p className="font-Poppins font-light text-black border-t border-BorderColor1-0 pt-5">
                   Here are some of the main reasons why both individuals and organizations prefer us as their forklift training providers in Saudi Arabia along with some few benefits offered to students enrolled in our courses. One benefit is that our company offers 
                  <span className="text-[#FD9F00] font-medium">  repair and maintenance services </span>, so if any issues arise with your forklift, you can easily get them resolved.
                  </p>

 <div className="flex items-start gap-2 lg:ml-5">
  <FaSquare size={15} className="mt-2 text-[#313131] sm:font-black text-2xl"  />
  <p className="font-Poppins text-[#313131]">
    <span className="font-bold">Certified and Experienced Trainers: </span> 
All our trainers are certified and have worked extensively with operational forklifts. They shall take you through the training from the beginning to the end and ensure that you are equipped with the necessary skills and safety measures to pass the certification exam and become a successful forklift operator.
  </p>
</div>   


 <div className="flex items-start gap-2 lg:ml-5">
  <FaSquare size={15} className="mt-2 text-[#313131] sm:font-black text-2xl"  />
  <p className="font-Poppins text-[#313131]">
    <span className="font-bold">Rounded Forklift Training Program: </span> 
We have almost all types of forklift training programs available that are both practical and classroom based. From entry level to expert skill sets, we ensure that our trainees develop the required self-assurance and efficiency in performing their duties.
  </p>
</div>



 <div className="flex items-start gap-2 lg:ml-5">
  <FaSquare size={15} className="mt-2 text-[#313131] sm:font-black text-2xl"  />
  <p className="font-Poppins text-[#313131]">
    <span className="font-bold">Secure Your Forklift Driving License: </span> 
Attending our forklift training program qualifies you to apply for a forklift driving license in Saudi Arabia. This license is accepted by employers nationwide, increasing your potential job openings as a forklift driver.
  </p>
</div>


 <div className="flex items-start gap-2 lg:ml-5">
  <FaSquare size={20} className="mt-2 text-[#313131] sm:font-black text-2xl"  />
  <p className="font-Poppins text-[#313131]">
    <span className="font-bold">Forklift Price in KSA:  </span> 
Our courses are offered at affordable rates which cater to both individuals and organizations that seek to advance training and development programs. Moreover, we provide assistance regarding the potential purchase price of the forklift price in KSA, enabling you to make the right choices concerning the equipment.
  </p>
</div>
 <div className="flex items-start gap-2 lg:ml-5">
  <FaSquare size={20} className="mt-2 text-[#313131] sm:font-black text-2xl"  />
  <p className="font-Poppins text-[#313131]">
    <span className="font-bold">Job Opportunities for Forklift Operators: </span> 
Through this program, you will not only earn a certificate, but also access Job openings as a Forklift operator in Saudi Arabia. Your new skills will allow you to work in warehouses, construction sites, and manufacturing plants which are always seeking skilled workers.
  </p>
</div>
 <div className="flex items-start gap-2 lg:ml-5">
  <FaSquare size={10} className="mt-2 text-[#313131] sm:font-black text-2xl"  />
  <p className="font-Poppins text-[#313131]">
    <span className="font-bold">Continuing Education and Refresher Courses: </span> 
Providing additional support training and safety refresher courses for those who need help staying current with employers’ best practices.
  </p>
</div>








 



                 
  


                  
                   


 



  





                  {/* <p className="font-Poppins font-light ">
                  By selectingAdvanced Accurate Arabia Operation & Maintenance co, you are not just another customer for us, but rather someone that we put our full efforts in making sure you achieve success in your business. We want to make sure you have success in business, and that’s why we put all the heavy lifting on our shoulders. We guarantee there won’t be any extra expenses when you use our maintenance and repair services because we charge reasonable prices and don’t hide any fees. Our highly trained operators are available to help you with anything from regular maintenance of your forklift to emergency repairs, and even guidance on how much a forklift costs in KSA. With us, your business can always be running at an optimal level because we provide
                  <span className="text-[#FD9F00] font-medium">  training </span>,maintenance services and ensure your forklifts are functional.
                  </p> */}


                  <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-14 mb-4">
             Get Started with Forklift Training Today
                    </button>
                  <p className="font-Poppins font-light mb-14">
                Are you prepared to advance your career? Sign up for our forklift training program and get your forklift driving license in Saudi Arabia.  With the right training, you’ll be prepared to take on a variety of forklift operator jobs in Saudi Arabia and become a highly sought-after professional in the workforce. <br/>
                  <span className="text-[#FD9F00] font-medium"> Contact us  </span> today for more information on training options as well as registration details. Become skilled, and step into the rewarding world of a forklift driver with our help!
                  </p>


                 
                 
                </div>
                {/* <div className="flex flex-col sm:flex-row gap-5 items-start sm:justify-between border-t border-BorderColor1-0 mt-9 py-5 px-4 sm:px-8">
                  <div>
                    <h6 className="font-Poppins text-lg font-medium">
                      <Link to={"/"}>
                        <button className="font-Poppins font-normal text-sm px-5 py-2 text-HeadingColor-0 rounded bg-[#f3f4f8] transition-all duration-500 hover:bg-SecondaryColor-0 hover:text-white mr-2 ml-1">
                          Cleaning
                        </button>
                      </Link>
                      <Link to={"/"}>
                        <button className="font-Poppins font-normal text-sm px-5 py-2 text-HeadingColor-0 rounded bg-[#f3f4f8] transition-all duration-500 hover:bg-SecondaryColor-0 hover:text-white">
                          Washing
                        </button>
                      </Link>
                    </h6>
                  </div>
                  <div>
                    <ul className="flex justify-center items-center gap-2">
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-SecondaryColor-0 flex justify-center items-center">
                            <FaFacebookF size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#38ceff] flex justify-center items-center">
                            <FaXTwitter size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#0b4ab1] flex justify-center items-center">
                            <FaLinkedinIn size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#e92928] flex justify-center items-center">
                            <FaPinterestP size={"13"} />
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-[60px]">
                <div className="rounded-md bg-[#f3f4f8] pt-8 pb-10 px-9">
                  <Link to={"/"}>
                    <button className="font-Inter font-medium text-lg text-HoverColor-0 flex items-center gap-2">
                      <FaAnglesLeft size={"14"} />
                      Previous Post
                    </button>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-center gap-5 sm:items-center lg:items-start mt-5"
                  >
                    <div>
                      <img src={itemthumb} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-Inter font-medium sm:text-lg md:text-base 2xl:text-lg text-HoverColor-0 sm:leading-[26px]">
                        Newest Cleaning Equipment for House 2024
                      </h4>
                      <p className="font-Poppins text-sm text-SecondaryColor-0 mt-1">
                        01 Jan, 2024
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="rounded-md bg-[#f3f4f8] pt-8 pb-10 px-9 flex flex-col items-end">
                  <Link to={"/"}>
                    <button className="font-Inter font-medium text-lg text-HoverColor-0 flex items-center gap-2">
                      Next Post
                      <FaAnglesRight size={"14"} />
                    </button>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-center gap-5 sm:items-center lg:items-start mt-5 text-right"
                  >
                    <div className="flex-1">
                      <h4 className="font-Inter font-medium sm:text-lg md:text-base 2xl:text-lg text-HoverColor-0 sm:leading-[26px]">
                        10 Most Popular Cleaning Tips for House
                      </h4>
                      <p className="font-Poppins text-sm text-SecondaryColor-0 mt-1">
                        09 Jan, 2024
                      </p>
                    </div>
                    <div>
                      <img src={itemthumb3} />
                    </div>
                  </Link>
                </div>
              </div> */}
              {/* <div className="bg-[#f3f4f8] px-4 sm:px-[62px] py-14 rounded-md mt-[60px]">
                <h3 className="font-Inter font-semibold text-HeadingColor-0 text-2xl mb-10">
                  Comments 02
                </h3>
                <div className="flex flex-col sm:flex-row gap-6 border-b border-BorderColor1-0 pb-8">
                  <div>
                    <FaUserCircle className="text-[#e0e0e0] text-7xl" />
                  </div>
                  <div className="flex-1 relative">
                    <h5 className="font-Inter font-medium text-HeadingColor-0 text-lg">
                      David Alexon
                    </h5>
                    <p className="font-Poppins font-light text-TextColor-0 mt-3">
                      Dramatically reinvent adaptive bandwidth vis reliable
                      infrastructures to the progressively iterate distributed
                      interfaces nice day with our fundraising donation
                    </p>
                    <Link to={"/"}>
                      <button className="text-HeadingColor-0 text-sm rounded-full flex items-center gap-2 font-Poppins absolute top-2 right-0">
                        <BiSolidShare
                          size={"18"}
                          className="text-SecondaryColor-0"
                        />
                        Reply
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 mt-10 md:pl-[90px]">
                  <div>
                    <FaUserCircle className="text-[#e0e0e0] text-7xl" />
                  </div>
                  <div className="flex-1 relative">
                    <h5 className="font-Inter font-medium text-HeadingColor-0 text-lg">
                      Michel Hemilton
                    </h5>
                    <p className="font-Poppins font-light text-TextColor-0 mt-3">
                      Dramatically reinvent adaptive bandwidth vis reliable
                      infrastructures to the progressively iterate distributed
                      interfaces nice day with our fundraising donation
                    </p>
                    <Link to={"/"}>
                      <button className="text-HeadingColor-0 text-sm rounded-full flex items-center gap-2 font-Poppins absolute top-2 right-0">
                        <BiSolidShare
                          size={"18"}
                          className="text-SecondaryColor-0"
                        />
                        Reply
                      </button>
                    </Link>
                  </div>
                </div>
                
              </div> */}
            </div>
            {/* <div className="col-span-2 lg:col-span-1">
              <div className="relative inline-block w-full mb-7 p-4 sm:p-8 lg:p-6 xl:p-8 rounded-md bg-[#f3f4f8]">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  required
                  className="w-full h-[56px] p-6 rounded font-Poppins"
                />
                <button
                  type="submit"
                  className=" text-xl text-white rounded h-[56px] w-[56px] bg-SecondaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2"
                >
                  <IoSearch />
                </button>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/service_details"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Floor Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details2"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        House Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details3"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Office Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details4"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Cleaning Specialist
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details5"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Window Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details6"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        kitchen Cleaning
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 sm:px-8 lg:px-6 xl:px-8 bg-[#f3f4f8] rounded-md pt-7 pb-4 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Popular Post
                </h4>
                <Link to={"/blog-details"}>
                  <button className="group flex gap-4 mb-6">
                    <div>
                      <img src={itemthumb} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Poppins font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-SecondaryColor-0">
                        How to Proper Cleaning Floor Carpet
                      </h6>
                      <p className="font-Poppins text-SecondaryColor-0 text-sm mt-1">
                        01 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img src={itemthumb2} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Poppins font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-SecondaryColor-0">
                        New cleaning Equipment for House...
                      </h6>
                      <p className="font-Poppins text-SecondaryColor-0 text-sm mt-1">
                        16 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img src={itemthumb3} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Poppins font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-SecondaryColor-0">
                        How to Carpet Cleaning Use New Equipment
                      </h6>
                      <p className="font-Poppins text-SecondaryColor-0 text-sm mt-1">
                        27 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-10 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Tags
                </h4>
                <ul className="inline-block">
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Floor Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        House Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Window Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Pool Cleaning
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainings ;