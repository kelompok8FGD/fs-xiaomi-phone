import PocoBanner from "../../molecule/Cards/PocoBanner";
import PocoLargeCard from "../../molecule/Cards/PocoLargeCard";
import PocoSmallCard from "../../molecule/Cards/PocoSmallCard";

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
