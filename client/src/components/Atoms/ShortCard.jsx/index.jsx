/* eslint-disable react/prop-types */
const ShortCard = (props) => {
    const {Title, Specs, Discount, DiscountBorder, StartingPrice, PreviousPrice, PhonePic, classname, Button} = props;
    return (
        <>
            <div className={`flex flex-col bg-[#ffffff] items-center font-inter pt-[60px] px-5 text-center gap-2 ${classname}  md:hover:shadow-lg md:hover:ease-out md:duration-[250ms]" onClick="window.location.href = '/product/#'`}>
                <div className="font-semibold text-[19px] leading-[24px] md:text-[36px] md:leading-[45px]">{Title}</div>
                <div className="font-normal text-[14px] leading-[18px] md:text-[18px] md:leading-[23px]">{Specs}</div>
                <div className={`font-normal text-[12px] leading-[17px] ${DiscountBorder} bg-[#FFF0E5] rounded px-1 md:left-4 md:top-4 md:absolute`}>{Discount}</div>
                <div className="flex gap-2 flex-col md:flex md:flex-row md:items-center">
                    <div className="font-normal text-[14px] leading-[18px] md:text-[21px] md:leading-[26px] xl:text-[18px] xl:leading-[20px]">Mulai dari Rp {StartingPrice}</div>
                    <div className="font-normal text-[12px] leading-[15px] text-[#999999] line-through md:text-[15px] md:leading-[19px]">{PreviousPrice}</div>
                </div>
                <div className={`${Button}`}>
                    <button className="hidden md:bg-[#191919] md:hover:bg-[#444444] md:text-white md:rounded-lg md:p-2 md:px-5 md:text-[18px] md:leading-[22px]">Beli Sekarang</button>
                    <button className="hidden md:text-[18px] md:leading-[22px] md:border md:border-black md:rounded-lg md:p-2 md:px-5">Learn More</button>
                </div>
                <picture className="md:flex md:items-center md:justify-center md:mt-0">
                    <img src={`${PhonePic}`} alt="phone3b" className="h-[144px] w-[144px] md:h-[260px] md:w-[260px]" />
                </picture>
            </div>
        </>
    );
};

export default ShortCard;
