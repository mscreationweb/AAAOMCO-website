import { FaArrowRightLong } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import Appointment from "../../../Componant3/Appointment/Appointment";
import ContactLocation from "./ContactLocation";
import Process from "../../../Componant1/Process/Process";
import White from "../../../Shared/White/White";

const ContactInner = () => {
  return (
    <>
      <White
        breadCampTitle={"Contact Us"}
        // breadcampIcon={<FaArrowRightLong />}
        // breadCampContent={"Contact Us"}
        // url={"/contact"}
      />
      <Process/>
      <Appointment />
      <ContactLocation/>
    </>
  );
};

export default ContactInner;
