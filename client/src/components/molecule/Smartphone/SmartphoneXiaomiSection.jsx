import BannerFlagship from "../../Atoms/BannerFlagship/index.jsx";
import BannerSeeAll from "../../Atoms/BannerSeeAll/index.jsx";
import LongCard from "../../Atoms/LongCard.jsx/index.jsx";
import ShortCard from "../../Atoms/ShortCard.jsx/index";
import ProductCards from "../Cards/ProductCards.jsx";
import ProductBanner from "../../molecule/Banners/ProductBanner.jsx"

const SmartphoneXiaomiSection = () => {
    return (
        <>
            <BannerSeeAll
                SeriesName="Seri Xiaomi"
                Motto="Leading technology and innovation"
                redirect="/Xiaomi"
            />

            <ProductBanner baseURL="http://localhost:5000" category="xiaomi" id={10} phonePicDesktop={"https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/1desktop.webp?alt=media&token=cfa4944a-3a79-40f6-9ae2-5f3a3ff89e85"} phonePicMobile={"https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/1mobile.webp?alt=media&token=2e4206b3-22ec-4bd6-809a-efb07be0a9d0"}/>


            <section className="flex flex-col w-full max-w-full items-evenly">
                  {/* Large Card */}
        <ProductCards category="xiaomi" mdCols={2} startfromproduct={0} endatproduct={2} />  
       
                     {/* Small Card Start */}
        <ProductCards category="xiaomi" mdCols={2} startfromproduct={4} endatproduct={6} />
    
            </section>
        </>
    );
};

export default SmartphoneXiaomiSection;
