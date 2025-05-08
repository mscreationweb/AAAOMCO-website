import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar2 from "../Shared/Navbar/Navbar2";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Navbar from "../Shared/Navbar/Navbar";

const Main3 = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main3;
