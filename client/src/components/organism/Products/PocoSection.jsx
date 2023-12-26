import BannerCard from "../../molecule/Cards/BannerCard.jsx";
import LargeCard from "../../molecule/Cards/LargeCard.jsx";
import SmallCard from "../../molecule/Cards/SmallCard.jsx";

export default function PocoSection() {
  return (
    <>
      {/* Banner Flagship */}
      <BannerCard />
      <section className="flex flex-wrap bg-[#F7F7F7]">
        {/* Large Card */}
        <LargeCard />
        {/* Small Card Start */}
        <SmallCard />
      </section>
    </>
  );
}
