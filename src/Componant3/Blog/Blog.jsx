/* eslint-disable no-unused-vars */
import { FaArrowRightLong } from "react-icons/fa6";
import blogThumb from "/images/allimg/homepage/1.png";
import blogThumb2 from "/images/allimg/homepage/2.jpg";
import blogThumb3 from "/images/allimg/homepage/3.jpg";
import BlogCard from "./BlogCard";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    thumbContent: "Repair & Maintenance",
    blogDate: "Mar 15, 2024",
    blogComment: "1 Comments",
    blogUrl: "/repair-maintenance",
    blogTitle: "Repair & Maintenance",
    btnContent: "We specialize in forklift repair & maintenance, ensuring that your forklifts remain in excellent condition. Regular maintenance prevents breakdowns, extends equipment lifespan, and ensures smooth, efficient operations.",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 1,
    blogThumb: blogThumb2,
    thumbContent: "CLEANING TIPS & TRICKS",
    blogDate: "Mar 15, 2024",
    blogComment: "1 Comments",
    blogUrl: "/supplying-spare-parts",
    blogTitle: "Supplying Spare Parts",
    btnContent: "We provide high-quality forklift parts for all types of forklifts, including battery-operated forklifts. Whether you need replacement components or upgrades, we offer durable parts to keep your equipment running efficiently and safely.",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 1,
    blogThumb: blogThumb3,
    thumbContent: "CLEANING TIPS & TRICKS",
    blogDate: "Mar 15, 2024",
    blogComment: "1 Comments",
    blogUrl: "/service-contracts",
    blogTitle: "Service Contracts",
    btnContent: "Our service contracts for forklift companies include regular maintenance and forklift inspection checklists to ensure your equipment stays in top condition. These contracts help prevent unexpected issues and minimize downtime.",
    btnIcon: <FaArrowRightLong />,
  },
];

const Blog = () => {
  return (
    <section className="py-20">
      <div className="Container">
        <div >
          {/* <h5 className="font-Inter inline-block text-lg text-SecondaryColor-0 font-medium px-9 relative before:absolute before:top-1/2 before:left-0 before:w-6 before:h-3 before:bg-[url(/images/cleaning-shapes.png)] before:bg-no-repeat before:bg-[inherit] before:-translate-y-1/2 after:absolute after:top-1/2 after:right-0 after:w-6 after:h-3 after:bg-[url(/images/cleaning-shapes.png)] after:bg-no-repeat after:bg-[inherit] after:-translate-y-1/2">
            LATEST NEWS
          </h5> */}
          <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[50px] 2xl:leading-[66px] text-[#02416A] mt-0 mb-4">
          What We Do
          </h1>
          <p className="font-Poppins text-[#313131] font-light">
          We areAdvanced Accurate Arabia Operation & Maintenance co Forklifts, your trusted provider of forklift solutions in Saudi Arabia. Specializing in forklift repair & maintenance, supplying spare parts, and offering service contracts, we ensure your material handling equipment operates at peak performance. Our team is dedicated to providing reliable services that keep your forklifts running smoothly, minimizing downtime and maximizing productivity for your business.
          </p>
        </div>
        <div className="mt-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
                blogThumb,
                thumbContent,
                blogDate,
                blogComment,
                blogUrl,
                blogTitle,
                btnContent,
                btnIcon,
              }) => {
                return (
                  <div key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      thumbContent={thumbContent}
                      blogDate={blogDate}
                      blogComment={blogComment}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
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
  );
};

export default Blog;
