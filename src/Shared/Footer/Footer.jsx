import { Link } from "react-router-dom";
import callImg from "/images/subscribe-icon.png";
import footerLogo from "/images/footer-logo.png";
import blogThumb from "/images/footer-thumb.png";
import blogThumb2 from "/images/footer-thumb2.png";
import footerShape from "/images/footer-shape.png";
import {
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FiGlobe, FiMapPin, FiMoon, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF]-0 relative z-10">
      <div className="absolute top-1/4 left-0 right-0 animate-wiggle -z-10">
        <img src={footerShape} />
      </div>
      <div className="Container">
      <div className=" sm:text-center py-6 border-t border-[#787a85] w-full mt-24 ">
          
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-center bg-[url('/images/subscribe-bg.png')] bg-bottom sm:bg-right lg:bg-center md:gap-7 lg:gap-0 bg-cover bg-no-repeat py-[30px] px-5 sm:px-10 rounded-b-3xl mb-[120px]">
          <div className="col-span-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white">
                <img src={callImg} />
              </div>
              <div className="flex-1">
                <p className="text-HeadingColor-0 font-Poppins font-light text-[15px]">
                  Call Us Now
                </p>
                <Link to={"/"}>
                  <button className="font-Inter text-left font-semibold text-HeadingColor-0 text-[22px] mt-1">
                    +980 765 (546) 900
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-left lg:text-right flex flex-col lg:flex-row gap-7 lg:gap-4 xl:gap-[70px] justify-end lg:items-center">
            <h4 className="font-Inter font-semibold text-white text-[28px]">
              Subscribe Now
            </h4>
            <form action="#" method="post" className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter E-Mail*"
                required
                className="w-full lg:w-[300px] 2xl:w-[394px] h-[56px] rounded-md bg-white text-TextColor-0 placeholder:text-TextColor-0 px-5 py-2"
              />
              <div className="absolute right-0 top-0">
                <button
                  type="submit"
                  className="w-[122px] h-[56px] bg-HeadingColor-0 font-medium font-Inter text-white border-none outline-0 rounded-r-md flex items-center justify-center gap-2 relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-[#02416A] before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div> */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-12">
          
          {/* <div className="2xl:col-span-3">
            <img src={footerLogo} />
            <p className="font-Poppins text-white mt-7 mb-9">
              Competently repurpose forward conveniently target e-business
              multipurpose clean
            </p>
            <ul className="flex gap-3">
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div> */}
          <div className="2xl:col-span-3">
            <h4 className="font-Inter text-[14px] text-black  mb-[30px] uppercase font-bold">
            About Us
            <hr className="border-t-[2px] border-gray-300 w-full mt-2"/>
            </h4>
           
            <div className="flex gap-5 mb-5">
              <div className="h-[44px] w-[44px] rounded-full border border-dashed border-[#FD9F00] flex items-center justify-center text-white text-xl bg-[#FD9F00]">
                <FiPhoneCall />
              </div>
              <div className="flex-1 mt-2">
              <a href="tel:+966549272708">
             <h6 className="font-Inter font-medium text-[15px] text-black">+966 549 272 708</h6>
              </a>

                
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <div className="h-[44px] w-[44px] rounded-full border border-dashed border-[#FD9F00] flex items-center justify-center text-white text-xl bg-[#FD9F00]">
                <FiGlobe />
              </div>
              <div className="flex-1 mt-2">
                <a href="https://www. aaaomco.com/" target="_blank">
              <h6 className="font-Inter font-medium text-[15px] text-[#02416A]">
              aaaomco.com
                </h6></a>
                
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <div className="h-[44px] w-[44px] rounded-full border border-dashed border-[#FD9F00] flex items-center justify-center text-white text-xl bg-[#FD9F00]">
                <HiOutlineMail />
              </div>
              <div className="flex-1 mt-2">
                <a href="mailto:Info@aaaomco.com">
              <h6 className="font-Inter font-medium text-[15px]  text-[#02416A]">
              Info@aaaomco.com
                </h6></a>
                
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <div className="h-[44px] w-[44px] rounded-full border border-dashed border-[#FD9F00] flex items-center justify-center text-white text-xl bg-[#FD9F00]">
                <FiMapPin />
              </div>
              <div className="flex-1 mt-2">
                <a href="#">
              <h6 className="font-Inter font-medium text-[15px] text-black ">
              makkah al mukkaramah <br/>street, Thuqbah Al khobar 34626,kingdom of Saudi Arabia

                </h6></a>
                
              </div>
            </div>
          </div>
          <div className="2xl:col-span-2">
          <h4 className="font-Inter text-[14px] text-black  mb-[30px] uppercase font-bold">
            Services
            <hr className="border-t-[2px] border-gray-300 w-full mt-2"/>
            </h4>
            <ul>
              <li>
                <Link to={"/repair-maintenance"}>
                  <button className="flex items-center gap-2 font-Inter text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    Repair & Maintenance
                    
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full -m-0"/>
                </Link>
              </li>
              <li>
                <Link to={"/service-contracts"}>
                  <button className="flex items-center gap-2 font-Inter  text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline mt-5 text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    Service Contracts
                    
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full "/>
                </Link>
              </li>
              <li>
                <Link to={"/supplying-spare-parts"}>
                  <button className="flex items-center gap-2 font-Inter  text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline mt-5 text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    Supplying Spare Parts
                    
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full "/>
                </Link>
              </li>
              <li>
                <Link to={"/consultancy"}>
                  <button className="flex items-center gap-2 font-Inter  text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline mt-5 text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    Consultancy
                    
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full "/>
                </Link>
              </li>
              <li>
                <Link to={"/trainings"}>
                  <button className="flex items-center gap-2 font-Inter  text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline mt-5 text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    Trainings
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full "/>
                </Link>
              </li>
              
            </ul>
          </div>


          <div className="2xl:col-span-2">
          <h4 className="font-Inter text-[14px] text-black  mb-[30px] uppercase font-bold">
            Menu
            <hr className="border-t-[2px] border-gray-300 w-full mt-2"/>
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Inter  text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    Home
                    
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full -m-0"/>
                </Link>
              </li>
              <li>
                <Link to={"/about"}>
                  <button className="flex items-center gap-2 font-Inter  text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline mt-5 text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    About Us
                    
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full "/>
                </Link>
              </li>
              <li>
                <Link to={"/contact"}>
                  <button className="flex items-center gap-2 font-Inter  text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline mt-5 text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    Contact Us
                    
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full "/>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Inter  text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline mt-5 text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    Services
                    
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full "/>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Inter  text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline mt-5 text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    BLOG
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full "/>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="2xl:col-span-2">
          <h4 className="font-Inter text-[14px] text-black  mb-[30px] uppercase font-bold ">
            Quick Links
            <hr className="border-t-[2px] border-gray-300 w-full mt-2"/>
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Inter  text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    Term and Conditions
                    
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full -m-0"/>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Inter text-[#02416A] transition-all duration-500 hover:text-[#02416A] hover:gap-1 mb-4 hover:underline mt-5 text-[15px]">
                    {/* <FaChevronRight className="text-sm opacity-50" /> */}
                    Privacy Policy
                    
                  </button>
                  <hr className="border-t-[1px] border-gray-300 w-full "/>
                </Link>
              </li>
             
              
            </ul>
          </div>


          {/* <div className="2xl:col-span-4">
            <h4 className="font-Inter text-2xl text-white font-semibold mb-9">
              Latest Blog
            </h4>
            <div className="flex items-center gap-5 mb-8">
              <div>
                <img src={blogThumb} />
              </div>
              <div className="flex-1">
                <Link to={"/blog_details"}>
                  <button className="font-Inter font-medium text-white text-left xl:text-base 2xl:text-lg transition-all duration-500 hover:text-[#02416A]">
                    10 Most Popular Clean <br className="hidden 2xl:block" />{" "}
                    Tips for Housey
                  </button>
                </Link>
                <p className="font-Poppins text-[#808CBF] text-sm pl-4 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-[#808CBF] mt-2">
                  Nov 16, 2024
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <img src={blogThumb2} />
              </div>
              <div className="flex-1">
                <Link to={"/blog_details"}>
                  <button className="font-Inter font-medium text-white text-left xl:text-base 2xl:text-lg transition-all duration-500 hover:text-[#02416A]">
                    Floor cleeny and <br className="hidden 2xl:block" /> Washing
                    New...
                  </button>
                </Link>
                <p className="font-Poppins text-[#808CBF] text-sm pl-4 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-[#808CBF] mt-2">
                  Nov 16, 2024
                </p>
              </div>
            </div>
          </div> */}
          
        </div>
        
      </div>
      <div className="text-left sm:text-center py-6 border-t border-[#b1b8d6] mt-14 bg-[ bg-[#111111]">
        {/* <div className="flex justify-center gap-12">
        <a href="">
          <h4 className="text-white uppercase">facebook</h4>
        </a>
      
        <a href="">
          <h4 className="text-white uppercase">Instagram</h4>
        </a>
        <a href="">
          <h4 className="text-white uppercase"> Whatsapp</h4>
        </a>
        <a href="">
          <h4 className="text-white uppercase">Linkedin</h4>
        </a>
        </div> */}
       <ul className="flex gap-6 text-white uppercase justify-center mb-4">
  {/* Facebook */}
  <li className="flex items-center gap-2">
    <button className="w-8 h-8 rounded-full border-2 border-[#02416A] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
      <FaFacebookF />
    </button>
    <span className="font-bold text-[14px] hover:text-[#02416A] hidden sm:block">Facebook</span>
  </li>

  {/* Instagram */}
  <li className="flex items-center gap-2">
    <button className="w-8 h-8 rounded-full border-2 border-[#02416A] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
      <BsInstagram />
    </button>
    <span className="font-bold text-[14px] hover:text-[#02416A] hidden sm:block">Instagram</span>
  </li>

  {/* WhatsApp */}
  <li className="flex items-center gap-2">
    <button className="w-8 h-8 rounded-full border-2 border-[#02416A] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
      <BsWhatsapp />
    </button>
    <span className="font-bold text-[14px] hover:text-[#02416A] hidden sm:block">WhatsApp</span>
  </li>

  {/* LinkedIn */}
  <li className="flex items-center gap-2">
    <button className="w-8 h-8 rounded-full border-2 border-[#02416A] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
      <FaLinkedinIn />
    </button>
    <span className="font-bold text-[14px] hover:text-[#02416A] hidden sm:block">LinkedIn</span>
  </li>
</ul>


      <div className="text-left sm:text-center py-4 border-t border-[#b1b8d6] bg-[#111111] mb-0">
      
          <p className="font-Poppins text-[#999999]   text-[14px] font-normal  text-center sm:text-left lg:text-center">
          ©Advanced Accurate Arabia Operation & Maintenance co- All Rights Reserved.
            {/* <span className="text-[#999999]"> Dream IT</span> */}
          </p>
        </div>
        </div>
    </footer>
  );
};

export default Footer;