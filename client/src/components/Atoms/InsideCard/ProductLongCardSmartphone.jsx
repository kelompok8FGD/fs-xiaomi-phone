/* eslint-disable react/prop-types */
const ProductTitle = (props) => {
    const {Title, Specs, Discount, StartingPrice, PreviousPrice} = props;
    const formattedPrice = StartingPrice.toLocaleString("da-DK", {
        maximumFractionDigits: 0,
    });
    const formattedPrice2 = PreviousPrice.toLocaleString("da-DK", {
        maximumFractionDigits: 0,
    });
    return (
        <>
            <div className="font-semibold text-[35px] leading-[44px] md:text-[36px] md:leading-[45px]">
                {Title}
            </div>
            <div className="font-normal text-[19px] leading-[24px] md:text-[18px] md:leading-[23px]">
                {Specs}
            </div>
            <div className="font-normal text-[12px] leading-[17px] text-[#ff6900] border border-[#ff6900] bg-[#FFF0E5] rounded px-1 md:left-4 md:top-4 md:absolute">
                {Discount}
            </div>
            <div className="flex gap-2 items-center">
                <div className="font-normal text-[19px] leading-[24px] md:text-[21px] md:leading-[26px]">
                    Mulai Dari Rp {formattedPrice}
                </div>
                <div className="font-normal text-[12px] leading-[15px] text-[#999999] line-through md:text-[15px] md:leading-[19px]">
                    {formattedPrice2}
                </div>
            </div>
        </>
    );
};

export default ProductTitle;
