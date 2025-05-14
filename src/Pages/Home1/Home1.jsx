import About from "../../Componant1/About/About";
// import Banner from "../../Componant1/Banner/Banner";
import Banner from "../../Componant2/Banner/Banner";
import Blog from "../../Componant3/Blog/Blog";
import Brand from "../../Componant1/Brand/Brand";
import Feature from "../../Componant1/Feature/Feature";
import Portfolio from "../../Componant1/Portfolio/Portfolio";
import Pricing from "../../Componant1/Pricing/Pricing";
import ProcessCard from "../../Componant1/Process/Process";
import Service from "../../Componant1/Service/Service";
import Support from "../../Componant1/Support/Support";
import Testimonial from "../../Componant1/Testimonial/Testimonial";
import ImageGrid from "../../Componant1/ImageGrid/ImageGrid";
import TeamWork from "../../Componant1/TeamWork/TeamWork";
import Whatsapp from "../../Componant1/Whatsapp/Whatsapp";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <Blog />
      <Support />
      <About />
      <Brand/>
      <ImageGrid/>
      <TeamWork/>

      {/* <Service /> */}
      {/* <ProcessCard/> */}
      {/* <Portfolio/> */}
      
      {/* <Pricing /> */}
      {/* <Testimonial /> */}
      
      {/* <Whatsapp/> */}
    </>
  );
};

export default Home1;
