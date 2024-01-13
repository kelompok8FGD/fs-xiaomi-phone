import CustomButton from "../WithCVA/CustomButton";

/* eslint-disable react/prop-types */
const BannerSeeAll = (props) => {
    const {SeriesName, Motto, redirect} = props;
    return (
        <section className="bg-[#F7F7F7] h-60 flex flex-col items-center justify-center z-0 md:gap-2 md:p-20 md:mb-0">
            <div className="font-bold text-[24px] leading-[30px] md:text-[36px] md:leading-[43px]">
                {SeriesName}
            </div>
            <div className="font-normal text-[20px] leading-[18px] md:text-[18px] md:leading-[22px]">
                {Motto}
            </div>
            <CustomButton
                to={redirect}
                text="Lihat semua tipe"
                order="text_first"
                icon=">"
                intent="accent_nobg"
                hover="bg_soft"
                media="mediumDark"
            />
        </section>
    );
};

export default BannerSeeAll;
