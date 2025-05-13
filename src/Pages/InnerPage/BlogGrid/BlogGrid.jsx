/* eslint-disable no-unused-vars */
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import blogThumb from "/images/blog-thumb.png";
import blogThumb2 from "/images/blog-thumb2.png";
import blogThumb3 from "/images/blog-thumb3.png";
import blogThumb4 from "/images/blog-thumb3.png";
import blogThumb5 from "/images/blog-thumb7.png";
import blogThumb6 from "/images/blog-thumb8.png";
import blogThumb7 from "/images/blog-thumb9.png";
import blogThumb8 from "/images/blog-thumb10.png";
import blogThumb9 from "/images/blog-thumb11.png";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    thumbDate: "02",
    thumbMonth: "MAY",
    blogUrl: "/blog_details",
    blogTitle: "Excellence in Service",
    blogDesc:
      "We are dedicated to delivering top-quality forklift services at every step, striving to exceed expectations and ensure client satisfaction through our commitment to excellence in forklift repair & maintenance and other essential services.",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    thumbDate: "12",
    thumbMonth: "MAY",
    blogUrl: "/blog_details",
    blogTitle: "Transparency & Trust",
    blogDesc:
      "Honesty and openness form the foundation of our interactions. AtAdvanced Accurate Arabia Operation & Maintenance co Forklifts, we believe in building trust by being transparent with our clients, partners, and team, ensuring clarity and integrity in all aspects of forklift operations and services.",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    thumbDate: "25",
    thumbMonth: "MAY",
    blogUrl: "/blog_details",
    blogTitle: "Value-Driven Solutions",
    blogDesc:
      "Our value-driven solutions are designed to provide the maximum benefit, combining high-quality forklift parts, cost-effective service contracts, and practical options tailored to your needs—without compromising on quality or performance.",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 4,
    blogThumb: blogThumb4,
    thumbDate: "05",
    thumbMonth: "JUNE",
    blogUrl: "/blog_details",
    blogTitle: "Reliability",
    blogDesc:
      "As a reliable forklift company in Saudi Arabia, we are committed to consistency and dependability. Our clients trust us to deliver on promises, meet deadlines, and provide solutions that perform as expected, whether it’s forklift rental or battery repair.",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 5,
    blogThumb: blogThumb5,
    thumbDate: "10",
    thumbMonth: "JUNE",
    blogUrl: "/blog_details",
    blogTitle: "Continuous Improvement",
    blogDesc:
      "AtAdvanced Accurate Arabia Operation & Maintenance co Forklifts, we believe in the power of continuous improvement. Through innovation and development, we aim to enhance our processes, skills, and services, ensuring that we remain at the forefront of the forklift industry and consistently meet the evolving needs of our clients.",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 6,
    blogThumb: blogThumb6,
    thumbDate: "15",
    thumbMonth: "JUNE",
    blogUrl: "/blog_details",
    blogTitle: "Unite to Excel",
    blogDesc:
      "Collaboration is key to our success. We work closely with our clients, partners, and team members, combining our strengths to achieve outstanding results. Through teamwork, we strive to elevate every project and service to excellence.",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  
];

const BlogGrid = () => {
  return (
    <>
      {/* <Breadcamp
        breadCampTitle={"Blog Grid"}
        breadcampIcon={<FaArrowRightLong />}
        breadCampContent={"Blog Grid"}
      /> */}
<section className="pt-18">
<div className="Container">

<button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-9 mb-6">
What We Do
                    </button>
<p className="font-Poppins font-light text-black border-t border-BorderColor1-0 pt-5">
At <span className="text-[#FD9F00] font-medium">Advanced Accurate Arabia Operation & Maintenance co Forklifts </span>,  we provide a variety of services designed to keep your equipment in top shape. Here’s a breakdown of what we offer:
                  </p>



                  <h4 className="text-[#02416A] font-bold mt-4">Forklift Rental</h4>
                  <p className="font-Poppins font-light text-black pt-5">
                  Need a forklift for a short-term or long-term project? We offer affordable and reliable forklift rental services in Saudi Arabia. Whether you need a <span className="text-[#FD9F00] font-medium">battery-operated forklift </span>a conventional one, we’ve got you covered. Our fleet is well-maintained, and we ensure you get the right forklift for your business needs.
                  </p>


                  <h4 className="text-[#02416A] font-bold mt-4">Forklift Repair & Maintenance</h4>
                  <p className="font-Poppins font-light text-black pt-5">
                  Regular  <span className="text-[#FD9F00] font-medium">forklift maintenance and repairs </span> are key to ensuring that your forklifts run smoothly. Our technicians will inspect and repair your
                  <span className="text-[#FD9F00] font-medium"> battery-operated forklift </span>or any other model you use, ensuring that everything is in perfect working order. From battery issues to hydraulic systems, we take care of it all, so you don’t have to worry about unexpected breakdowns.
                  </p>




                  <h4 className="text-[#02416A] font-bold mt-4">Forklift Battery Repair</h4>
                  <p className="font-Poppins font-light text-black pt-5">
                  If you’re using a  <span className="text-[#FD9F00] font-medium"> battery-operated forklift </span>,we understand how important the battery is to your operations. That’s why we offer expert
                  <span className="text-[#FD9F00] font-medium"> forklift battery repair </span>services. We’ll help you extend the life of your battery and ensure your equipment is running efficiently, so your team can continue to work without any delays.
                  </p>




                  <h4 className="text-[#02416A] font-bold mt-4">Material Handling Equipment</h4>
                  <p className="font-Poppins font-light text-black pt-5">
                  We don’t just deal with forklifts. We also provide services for all types of   <span className="text-[#FD9F00] font-medium">  material handling equipment </span> Whether you need a 
                  <span className="text-[#FD9F00] font-medium">  battery-operated forklift  </span>or other equipment, we’ve got everything you need to keep your warehouse or industrial space running smoothly.
                  </p>





                  <h4 className="text-[#02416A] font-bold mt-4">Forklift Operator Training</h4>
                  <p className="font-Poppins font-light text-black pt-5">
                  Safe operation is critical for any forklift, especially a  <span className="text-[#FD9F00] font-medium">battery-operated forklift. Our forklift operator </span> training programs in 
                  <span className="text-[#FD9F00] font-medium">  Saudi Arabia </span> are designed to help your team operate forklifts safely and efficiently. We cover everything from basic operation to maintenance and troubleshooting, ensuring that your operators are prepared for any situation.

                  </p>




                  <h4 className="text-[#02416A] font-bold mt-4">Forklift Parts</h4>
                  <p className="font-Poppins font-light text-black pt-5">
                  We supply high-quality   <span className="text-[#FD9F00] font-medium"> forklift parts</span>to ensure your equipment stays in top condition. Whether you need replacement parts for your
                  <span className="text-[#FD9F00] font-medium"> battery-operated forklift  </span>or other forklift models, we offer a wide range of durable parts to keep your equipment running without interruption.

                  </p>




                  <h4 className="text-[#02416A] font-bold mt-4">Forklift Inspection Checklist</h4>
                  <p className="font-Poppins font-light text-black pt-5 mb-6">
                  Regular forklift inspections are essential to ensure safety and avoid costly repairs. Our <span className="text-[#FD9F00] font-medium"> forklift inspection checklist</span> covers everything from the battery to the tires, hydraulics, and other important components. We help you catch potential issues early, keeping your forklift in excellent condition and compliant with safety standards. Whether you need 
                  <span className="text-[#FD9F00] font-medium"> forklift rental  </span> in <span className="text-[#FD9F00] font-medium"> Saudi Arabia  </span>,  <span className="text-[#FD9F00] font-medium">battery-operated forklift  </span> ,or expert   <span className="text-[#FD9F00] font-medium"> forklift repairs,Advanced Accurate Arabia Operation & Maintenance co Forklifts  </span>is here to help. We offer reliable services to ensure that your operations run smoothly, whether you’re renting or maintaining your equipment. Let us help you keep your material handling equipment in great shape.

                  </p>
  </div>
</section>



      <section className="pt-18 bg-black">
        <div className="Container">
          <div className="grid grid-cols-1 gap-4  lg:items-center">
            <div>
            <div className="flex justify-center">
  <button className="uppercase font-Inter font-bold text-center text-lg sm:text-2xl 2xl:text-3xl text-[#ffffff] transition-all duration-500 hover:text-[#02416A] mt-9 mb-6">
    Our Core Values
  </button>
  
</div>
<p className="font-Poppins font-light text-[#7f7f7f]  pt-5 text-center">
AtAdvanced Accurate Arabia Operation & Maintenance co Forklifts, our mission is driven by a commitment to excellence in service, integrity, and partnership. These core values shape every decision we make, ensuring that we deliver the highest standards of service, offering forklift rental, repair & maintenance, and material handling equipment solutions that add real value to our clients. By embracing transparency, reliability, and a focus on continuous improvement, we aim to build long-lasting relationships, empowering our clients to achieve their goals with trust and confidence. These values are the foundation of who we are and guide our dedication to excellence in everything we do.
                  </p>
            </div>
            {/* <div className="flex lg:justify-end">
              <Link to={"/blog_details"}>
                <button className="primary-btn">
                  Veiw All Blog
                  <FaArrowRightLong size={"20"} />
                </button>
              </Link>
            </div> */}
          </div>
          <div className="mt-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {blogData.map(
                ({
                  id,
                  blogThumb,
                  thumbDate,
                  thumbMonth,
                  blogUrl,
                  blogTitle,
                  blogDesc,
                  btnContent,
                  btnIcon,
                }) => {
                  return (
                    <div key={id}>
                      <BlogCard
                        blogThumb={blogThumb}
                        thumbDate={thumbDate}
                        thumbMonth={thumbMonth}
                        blogUrl={blogUrl}
                        blogTitle={blogTitle}
                        blogDesc={blogDesc}
                        btnContent={btnContent}
                        btnIcon={btnIcon}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <div>
        <ul className="flex items-center gap-2 justify-center pb-[120px] pt-[80px]">
          <li>
            <button className="h-[50px] w-[50px] font-Inter rounded-full border-BorderColor-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              01
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Inter rounded-full border-BorderColor-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              02
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Inter rounded-full border-BorderColor-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              03
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Inter rounded-full border-BorderColor-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default BlogGrid;
