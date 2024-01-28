import XiaomiSection from "../components/organism/Sections/XiaomiSection";
import ProductNavbar from "../components/organism/Navbar/ProductsNavbar";

const Xiaomi = () => {
  return (
    <>
      <ProductNavbar
        titleHead="Xiaomi Phone"
        title1="Xiaomi Phone"
        title2="Redmi Phone"
        title3="Poco Phone"
        toTitle1="/xiaomi"
        toTitle2="/redmi"
        toTitle3="/poco"
      />
      <XiaomiSection />
    </>
  );
};

export default Xiaomi;
