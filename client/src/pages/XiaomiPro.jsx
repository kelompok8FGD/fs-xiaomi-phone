import XiaomiProSection from "../components/organism/Products/XiaomiProSection";
import Nav from "../components/molecule/Xiaomi/Nav";
import ProductNavbar from "../components/organism/Navbar/ProductsNavbar";

const XiaomiPro = () => {
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
      <XiaomiProSection />
    </>
  );
};

export default XiaomiPro;
