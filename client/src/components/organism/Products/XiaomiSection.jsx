import XiaomiBanner from "../../molecule/Cards/XiaomiElement/XiaomiBanner";
//import XiaomiCard from "../../molecule/Cards/XiaomiElement/XiaomiCard";
import ProductCards from "../../molecule/Cards/ProductCards";

const XiaomiSection = () => {
  return (
    <>
      <XiaomiBanner />
      <ProductCards category="xiaomi" mdCols={1} lgCols={2} xlCols={2} currentPage={0} postsPerPage={8}/> 
      
    </>
  );
};

export default XiaomiSection;
