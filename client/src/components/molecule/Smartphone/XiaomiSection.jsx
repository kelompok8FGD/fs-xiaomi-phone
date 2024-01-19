import BannerFlagship from "../../Atoms/BannerFlagship/index.jsx";
import BannerSeeAll from "../../Atoms/BannerSeeAll/index.jsx";
import LongCard from "../../Atoms/LongCard.jsx";
import ShortCard from "./../../Atoms/ShortCard.jsx/index";

const XiaomiSection = () => {
    return (
        <>
            <BannerSeeAll
                SeriesName="Seri Xiaomi"
                Motto="Leading technology and innovation"
                redirect="/Xiaomi"
            />
            <BannerFlagship
                Title="XIAOMI 12T 5G"
                Specs="Ultra Steady 108MP with OIS | Dimensity 8100-Ultra"
                CurrentPrice="Rp 5.999.000"
                PreviousPrice="Rp 6.599.000"
                PhonePicDesktop="https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/1desktop.webp?alt=media&token=cfa4944a-3a79-40f6-9ae2-5f3a3ff89e85"
                PhonePicMobile="https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/1mobile.webp?alt=media&token=2e4206b3-22ec-4bd6-809a-efb07be0a9d0"></BannerFlagship>
            <section className="m-[9px] md:my-0 md:px-2 md:flex md:justify-evenly md:hover:cursor-pointer md:w-full sm:w-full md:max-h-[492px] lg:max-h-[492px] md:mt-2">
                <LongCard />

                <div className="grid grid-cols-2 gap-2 mt-2 md:mt-0 md:max-h-[492px] lg:max-h-[492px] md:w-full md:mr-2 md:px-0 md:py-0">
                    <ShortCard />
                </div>
            </section>
        </>
    );
};

export default XiaomiSection;
