import { FaArrowRightLong } from "react-icons/fa6";
import aboutThumb from "/images/allimg/service/1.jpg";
import aboutThumb2 from "/images/allimg/service/2.jpg";
import aboutThumb3 from "/images/allimg/service/3.png";
import aboutThumb4 from "/images/allimg/service/4.jpg";
import aboutThumb5 from "/images/allimg/service/5.jpg";
import aboutShape from "/images/about-shape5.png";
import { motion } from "framer-motion";

const one = [
  {
    title: "Preventive and Routine Maintenance Services",
    description:
      "Implementing regular forklift maintenance and repair schedules to prevent breakdowns and extend the lifespan of your forklifts, ensuring consistent performance.",
  },
  {
    title: "Hydraulic System Maintenance and Repair",
    description:
      "Specializing in the upkeep and repair of hydraulic systems to maintain smooth operation and prevent costly downtime, particularly for Toyota forklifts and other models, ensuring optimal performance.",
  },
  {
    title: "Mast and Forklift Maintenance and Adjustment",
    description:
      "Providing precise forklift maintenance and repair services for the mast and overall forklift structure, ensuring safe and efficient handling.",
  },
  {
    title: "Steering and Brake System Servicing",
    description:
      "Ensuring that your forklifts’ steering and brake systems are in optimal condition for maximum safety and maneuverability, including for electric forklift repair needs.",
  },
  {
    title: "Gearbox and Engine Repair and Overhaul",
    description:
      "Offering comprehensive repair and overhaul services for gearboxes and engines, restoring power and efficiency to your forklifts. We also provide advice on forklift price in KSA to help you make informed equipment decisions.",
  },
];




const two = [
  {
    title: "Maintenance Frequency and Scheduling",
    description:
      "Offering flexible maintenance schedules tailored to your operational needs, ensuring regular upkeep without disrupting your workflow.",
  },
  {
    title: "Response Time and Pricing Structure",
    description:
      "Providing clear and transparent pricing linked to guaranteed response times, so you know exactly what to expect and when.",
  },
  {
    title: "Technician Experience and Expertise",
    description:
      "Leveraging the skills and knowledge of our highly trained technicians to deliver top-quality service every time.",
  },
  {
    title: "Warranty and Protection Coverage",
    description:
      "Ensuring that all services under contract are backed by comprehensive warranty and protection plans, giving you confidence and security.",
  },
  {
    title: "Performance Metrics and Evaluation",
    description:
      "Regularly evaluating service performance through detailed metrics, allowing for continuous improvement and optimal contract outcomes.",
  },
];


const three = [
  {
    title: "Quality Assurance of Spare Parts",
    description:
      "Ensuring that all spare parts meet the highest industry standards for durability and performance, guaranteeing reliability in every repair and maintenance service.",
  },
  {
    title: "Inventory Management and Control",
    description:
      "Efficiently managing and controlling our inventory to ensure that essential spare parts are always available, reducing downtime and keeping your operations running smoothly.",
  },
  {
    title: "Lead Time and Delivery Efficiency",
    description:
      "Minimizing lead times and ensuring prompt delivery of spare parts, so your equipment is back in operation as quickly as possible.",
  },
  {
    title: "Cost Efficiency and Rebates",
    description:
      "Offering competitive pricing and attractive rebates on spare parts, providing cost-effective solutions without compromising on quality.",
  },
  {
    title: "Returns, Warranties, and Exchanges",
    description:
      "Providing hassle-free returns, warranties, and exchange options, ensuring peace of mind and satisfaction with every purchase.",
  },
];


const four = [
  {
    title: "Fleet Management Optimization",
    description:
      "Ensuring effective management and maintenance of forklift fleets to maximize productivity and longevity.",
  },
  {
    title: "Safety, Security, and Compliance",
    description:
      "Emphasizing adherence to safety standards and regulatory requirements in all repair and maintenance activities.",
  },
  {
    title: "Customized Solutions and Strategies",
    description:
      "Offering tailored maintenance and repair plans designed to meet the specific needs of each client’s forklift operations.",
  },
  {
    title: "Operational Efficiency Improvements",
    description:
      "Enhancing the efficiency of forklift operations through expert consultancy and strategic insights.",
  },
  {
    title: "Technology Integration and Innovation",
    description:
      "Incorporating modern technology and innovative solutions to optimize forklift maintenance and operational performance.",
  },
];



const five = [
  {
    title: "Hands-on Instruction",
    description:
      "Providing practical, real-world training that allows operators to gain experience and confidence in forklift operation through hands-on practice. This prepares them to earn their forklift driving license in Saudi Arabia and excel as a forklift operator.  ",
  },
  {
    title: "Safety Awareness",
    description:
      "Emphasizing the importance of safety in every aspect of forklift operation, from daily use to emergency situations, to ensure a secure working environment. This is crucial for those pursuing forklift operator jobs in Saudi Arabia where safety is a top priority.",
  },
  {
    title: "Stability and Load Handling",
    description:
      "Instructing operators on the principles of stability and safe load handling to prevent accidents and ensure efficient operations. This knowledge is essential for becoming a skilled forklift driver and succeeding in the forklift operator jobs in Saudi Arabia market.",
  },
  {
    title: "Continuing Education and Refresher Courses",
    description:
      "Offering ongoing training and refresher courses to keep your team updated on the latest techniques and safety protocols. These courses are valuable for forklift operators looking to maintain their skills and certifications, ensuring they stay competitive in the forklift driver job market.",
  },
  {
    title: "Customized Instruction",
    description:
      "Tailoring training programs to meet the specific needs of your workforce, ensuring that all participants gain relevant skills and knowledge. Whether your team is focused on electric forklift repair or learning to operate different forklift models, we offer personalized training to suit your needs, and help you understand the forklift price in KSA for making well-informed decisions.",
  },
];
const About = () => {
  return (
    <>
      {/* Section 1: Image Left, Text Right */}
      <section className="pb-[120px] bg-[#f3f4f8] bg-cover bg-center bg-no-repeat">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 items-center">
            {/* Image */}
            <div className="relative z-10">
              <img src={aboutThumb} alt="About Thumbnail" />
              <div className="absolute bottom-0 left-0">
                <div className="relative before:w-full before:h-full before:border before:rounded-full before:border-dashed before:absolute before:top-0 before:left-0 before:border-PrimaryColor-0 before:animate-rotational">
                  {/* <img src={aboutShape} alt="About Shape" /> */}
                </div>
              </div>
            </div>

            {/* Animated Text */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
                 <button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-9 mb-6">
                 Repair & Maintenance
                    </button>

              {one.map((service, index) => (
                <p
                  key={index}
                  className="font-Poppins text-TextColor-0 font-light mt-1"
                >
                  <span className="text-[#02416A] font-medium">
                    {service.title}
                  </span>
                  <br />
                  {service.description}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Text Left, Image Right */}
      <section className="pb-[120px] bg-[#f3f4f8] bg-cover bg-center bg-no-repeat">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 items-center">
            {/* Animated Text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-9 mb-6">
              Service Contracts
                    </button>

              {two.map((service, index) => (
                <p
                  key={index}
                  className="font-Poppins text-TextColor-0 font-light mt-1"
                >
                  <span className="text-[#02416A] font-medium">
                    {service.title}
                  </span>
                  <br />
                  {service.description}
                </p>
              ))}
            </motion.div>

            {/* Image */}
            <div className="relative z-10">
              <img src={aboutThumb2} alt="About Thumbnail" />
              <div className="absolute bottom-0 left-0">
                <div className="relative before:w-full before:h-full before:border before:rounded-full before:border-dashed before:absolute before:top-0 before:left-0 before:border-PrimaryColor-0 before:animate-rotational">
                  {/* <img src={aboutShape} alt="About Shape" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




  {/* Section 1: Image Left, Text Right */}
  <section className="pb-[120px] bg-[#f3f4f8] bg-cover bg-center bg-no-repeat">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 items-center">
            {/* Image */}
            <div className="relative z-10">
              <img src={aboutThumb} alt="About Thumbnail" />
              <div className="absolute bottom-0 left-0">
                <div className="relative before:w-full before:h-full before:border before:rounded-full before:border-dashed before:absolute before:top-0 before:left-0 before:border-PrimaryColor-0 before:animate-rotational">
                  {/* <img src={aboutShape} alt="About Shape" /> */}
                </div>
              </div>
            </div>

            {/* Animated Text */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
                 <button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-9 mb-6">
                 Supplying Spare Parts
                    </button>

              {three.map((service, index) => (
                <p
                  key={index}
                  className="font-Poppins text-TextColor-0 font-light mt-1"
                >
                  <span className="text-[#02416A] font-medium">
                    {service.title}
                  </span>
                  <br />
                  {service.description}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Text Left, Image Right */}
      <section className="pb-[120px] bg-[#f3f4f8] bg-cover bg-center bg-no-repeat">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 items-center">
            {/* Animated Text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-9 mb-6">
              Consultancy 
                    </button>

              {four.map((service, index) => (
                <p
                  key={index}
                  className="font-Poppins text-TextColor-0 font-light mt-1"
                >
                  <span className="text-[#02416A] font-medium">
                    {service.title}
                  </span>
                  <br />
                  {service.description}
                </p>
              ))}
            </motion.div>

            {/* Image */}
            <div className="relative z-10">
              <img src={aboutThumb4} alt="About Thumbnail" />
              <div className="absolute bottom-0 left-0">
                <div className="relative before:w-full before:h-full before:border before:rounded-full before:border-dashed before:absolute before:top-0 before:left-0 before:border-PrimaryColor-0 before:animate-rotational">
                  {/* <img src={aboutShape} alt="About Shape" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="pb-[120px] bg-[#f3f4f8] bg-cover bg-center bg-no-repeat">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 items-center">
            {/* Image */}
            <div className="relative z-10">
              <img src={aboutThumb5} alt="About Thumbnail" />
              <div className="absolute bottom-0 left-0">
                <div className="relative before:w-full before:h-full before:border before:rounded-full before:border-dashed before:absolute before:top-0 before:left-0 before:border-PrimaryColor-0 before:animate-rotational">
                  {/* <img src={aboutShape} alt="About Shape" /> */}
                </div>
              </div>
            </div>

            {/* Animated Text */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
                 <button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-9 mb-6">
                 Trainings
                    </button>

              {five.map((service, index) => (
                <p
                  key={index}
                  className="font-Poppins text-TextColor-0 font-light mt-1"
                >
                  <span className="text-[#02416A] font-medium">
                    {service.title}
                  </span>
                  <br />
                  {service.description}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>




    </>
  );
};

export default About;