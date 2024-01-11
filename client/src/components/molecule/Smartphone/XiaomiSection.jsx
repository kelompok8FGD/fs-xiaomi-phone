import BannerFlagship from "../../Atoms/BannerFlagship/index.jsx";
import BannerSeeAll from "../../Atoms/BannerSeeAll/index.jsx";
import LongCard from "../../Atoms/LongCard.jsx";
import ShortCard from "./../../Atoms/ShortCard.jsx/index";

const XiaomiSection = () => {
    return (
        <>
            <BannerSeeAll SeriesName="Seri Xiaomi" Motto="Leading technology and innovation" redirect="/Xiaomi" />
            <BannerFlagship Title="XIAOMI 12T 5G" Specs="Ultra Steady 108MP with OIS | Dimensity 8100-Ultra" CurrentPrice="Rp 5.999.000" PreviousPrice="Rp 6.599.000" PhonePicDesktop="/smartphone/1desktop.webp" PhonePicMobile="/smartphone/1mobile.webp"></BannerFlagship>
            <section className="m-[9px] md:my-0 md:px-2 md:flex md:justify-evenly md:hover:cursor-pointer md:w-full sm:w-full md:max-h-[492px] md:mt-2">
                <LongCard Title="Xioami 12" Specs="50MP Pro-grade camera | Snapdragon® 8 Gen 1" Discount="Diskon 30%" CurrentPrice="6.999.000" PreviousPrice="Rp9.999.000" classname="md:bg-[#D0D0D0] md:text-white" Status="Habis" PhonePic="/smartphone/2mobile.webp"></LongCard>

                <div className="grid grid-cols-2 gap-2 mt-2 md:mt-0 md:max-h-[492px] lg:max-h-[492px] md:w-full md:mr-2 md:px-0 md:py-0">
                    <ShortCard classname="md:px-0 md:pt-9" Title="Xiaomi 12 Pro" Specs="Ori Grade triple 50MP Camera | Snapdragon® Gen 1" StartingPrice="6.999.000" PhonePic="/smartphone/3amobile.webp" Button="md:my-[14px] md:flex md:gap-1"></ShortCard>
                    <ShortCard classname="md:px-0 md:pt-9" Title="Xiaomi 12T 5G" Specs="Ultra Stable 108MP Main Camera with OIS" StartingPrice="5.999.000" PreviousPrice="Rp 6.599.000" Discount="9%" DiscountBorder="text-[#ff6900] border border-[#ff6900]" PhonePic="/smartphone/3bmobile.webp" Button="md:my-[14px] md:flex md:gap-1"></ShortCard>
                </div>
            </section>
        </>
    );
};

export default XiaomiSection;
