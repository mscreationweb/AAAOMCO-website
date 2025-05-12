import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { IoPlayOutline } from "react-icons/io5";
import appointmentThumb from "/images/allimg/contact.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Appointment = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-2  before:-z-10 after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:-z-10 mb-8">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src={appointmentThumb}
              className="w-full mb-3"
            />
            {/* <div className="absolute top-0 right-0 2xl:right-7 bg-SecondaryColor-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-es-xl flex justify-center items-center">
              <button
                className="w-[70px] h-[70px] md:h-[92px] md:w-[92px] text-white rounded-2xl bg-transparent flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border before:border-dashed before:border-white before:-z-10 before:rounded-full before:animate-rotational"
                onClick={() => setToggler(!toggler)}
              >
                <IoPlayOutline size={"50"} />
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
              />
            </div> */}
          </div>
          <div className="mr-2">
            <h2 className="font-Inter font-bold text-3xl md:text-[20px] mb-1">
            Send Us Message
            </h2>
            <p className="mb-3">At Qimam Affan Forklifts, we believe in fostering strong connections and clear communication with our clients. Whether you have a question, need a forklift rental, or require expert advice on forklift maintenance, we are here to assist you.

Fill out the form below or reach out to us directly, and one of our team members will get back to you promptly. We look forward to hearing from you and helping you with your material handling needs.</p>
            <form action="#" method="post" className="flex flex-col gap-7">
              <div className="flex flex-col md:flex-row gap-7">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  required
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
                
                 <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E-Mail*"
                  required
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="subject"
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
              </div>
              {/* <div className="flex flex-col md:flex-row gap-7">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E-Mail*"
                  required
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
               
              </div> */}
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="border border-[#E3E3E3] rounded py-2 px-6 outline-none resize-none h-[140px] w-full"
              ></textarea>
              <div className="flex justify-center">
  <button type="submit" className="primary-btn2 flex items-center gap-2">
    Submit 
    <FaArrowRightLong size={20} />
  </button>
</div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
