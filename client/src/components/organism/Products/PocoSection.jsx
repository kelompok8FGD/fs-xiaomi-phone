import PocoBanner from "../../molecule/Cards/PocoElement/PocoBanner";
import PocoLargeCard from "../../molecule/Cards/PocoElement/PocoLargeCard";
import PocoSmallCard from "../../molecule/Cards/PocoElement/PocoSmallCard";

export default function PocoSection() {
  return (
    <>
      {/* Banner Flagship */}
      <PocoBanner />
      <section className="flex flex-wrap bg-[#F7F7F7]">
        {/* Large Card */}
        <PocoLargeCard />
        {/* Small Card Start */}
        <PocoSmallCard />
      </section>
    </>
  );
}
