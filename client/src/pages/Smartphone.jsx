import RedmiSection from "../components/organism/Sections/RedmiSection";
import SmartphoneXiaomiSection from "../components/organism/Sections/SmartphoneXiaomiSection";
import TitleSeeAll from "../components/Atoms/BannerSeeAll/TitleSeeAll";
import CustomButton from "../components/Atoms/Buttons/CustomButton";
import ProductCards from "../components/molecule/Cards/ProductCards";

const SmartPhone = () => {
  return (
    <>
      <SmartphoneXiaomiSection />
      <RedmiSection />
      <section className="bg-[#F7F7F7] h-60 flex flex-col items-center justify-center z-0 md:gap-2 md:p-5">
        <TitleSeeAll
          SeriesName="Seri Poco"
          Motto="Extreme performance, extreme price"
        />
        <div className="flex justify-center items-center py-4">
          <CustomButton
            to="/Poco"
            text="Lihat semua tipe"
            order="text_first"
            icon=">"
            intent="accent_nobg"
            hover="bg_soft"
            media="mediumDark"
          />
        </div>
      </section>
          
          <ProductCards category="poco" mdCols={2} lgCols={3} startfromproduct={4} endatproduct={7} />
    </>
  );
};

export default SmartPhone;
