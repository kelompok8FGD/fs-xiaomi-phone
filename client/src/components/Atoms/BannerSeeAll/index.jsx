/* eslint-disable react/prop-types */
const BannerSeeAll = (props) => {
    const {SeriesName, Motto} = props;
    return (
        <section className="bg-[#F7F7F7] h-60 flex flex-col items-center justify-center z-0 md:gap-2 md:p-20 md:mb-0">
            <div className="font-bold text-[24px] leading-[30px] md:text-[36px] md:leading-[43px]">{SeriesName}</div>
            <div className="font-normal text-[20px] leading-[18px] md:text-[18px] md:leading-[22px]">{Motto}</div>
            <a href="/xiaomi" className="md:my-5">
                <span className="text-[#FE6900] font-normal text-[15px] leading-[18px] md:text-[18px] md:leading[22px] md:text-white md:bg-[#191919] md:hover:bg-[#444444] md:py-[10px] md:rounded-lg md:px-[34px]">Lihat semua tipe</span>
            </a>
        </section>
    );
};

export default BannerSeeAll;
