import PocoBanner from "../../molecule/Cards/PocoElement/PocoBanner";
import PocoLargeCard from "../../molecule/Cards/PocoElement/PocoLargeCard";
import PocoSmallCard from "../../molecule/Cards/PocoElement/PocoSmallCard";
import ProductCards from "../../molecule/Cards/ProductCards";


export default function PocoSection() {
  return (
    <>
      {/* Banner Flagship */}
      <PocoBanner />
      <section className="w-full flex flex-col flex-wrap bg-[#F7F7F7]">
        {/* Large Card */}
        <ProductCards category="poco" mdCols={2} startfromproduct={0} endatproduct={2} />  
        {/* Small Card Start */}
        <ProductCards category="poco" mdCols={2} lgCols={3} xlCols={3} startfromproduct={3} endatproduct={7} />

      
      </section>
    </>
  );
}
