import { FaArrowRightLong } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import About from "../../../Componant2/About/About";
import Support from "../../../Componant2/Support/Support";
import Process from "../../../Componant1/Process/Process";
import TeamMember from "../../../Componant2/TeamMember/TeamMember";
import Testimonial from "../../../Componant2/Testimonial/Testimonial";
import BlogGrid from "../BlogGrid/BlogGrid";
import White from "../../../Shared/White/White";

const AboutInner = () => {
    return (
      <>
        <White
          breadCampTitle={"About Us"}
          // breadcampIcon={<FaArrowRightLong />}
          // breadCampContent={"About Us"}
        />
        <About />
        {/* <Support/> */}
        {/* <Process/> */}
        <BlogGrid/>
        {/* <TeamMember /> */}
        {/* <Testimonial /> */}
      </>
    );
};

export default AboutInner;