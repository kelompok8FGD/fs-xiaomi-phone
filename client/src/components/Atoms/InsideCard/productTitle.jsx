/* eslint-disable react/prop-types */
const ProductTitle = ({ Title, Specs, Discount, StartingPrice, PreviousPrice, hideDiscount, hidePrices }) => {
  const formattedPrice = StartingPrice.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
  const formattedPricePrev = PreviousPrice.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  return (
    <>
      <div className="font-semibold text-[19px] leading-[24px] md:text-[36px] md:leading-[45px] pt-12">
        {Title}
      </div>
      <div className="font-normal h-12 text-[14px] leading-[18px] md:text-[18px] md:leading-[23px]">
        {Specs}
      </div>
      {!hideDiscount && (
        <div className="font-normal text-[12px] leading-[17px] text-[#ff6900] border border-[#ff6900] bg-[#FFF0E5] rounded px-1 md:left-4 md:top-4 md:absolute">
          Diskon {Discount}%
        </div>
      )}
      {!hidePrices && (
        <div className="flex gap-2 flex-col md:flex md:flex-row md:items-center pb-5">
          <div className="font-normal text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[20px]">
            Mulai dari Rp {formattedPrice}
          </div>
          <div className="font-normal text-[12px] leading-[15px] text-[#999999] line-through md:text-[15px] md:leading-[19px]">
            Rp {formattedPricePrev}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductTitle;

