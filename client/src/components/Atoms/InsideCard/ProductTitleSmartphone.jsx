/* eslint-disable react/prop-types */
const ProductTitleSmartphone = (props) => {
  const {Title, Specs, Discount, StartingPrice, PreviousPrice} = props;
  const formattedPrice = StartingPrice.toLocaleString("da-DK", {
    maximumFractionDigits: 0,
  });
  const formattedPrice2 = PreviousPrice.toLocaleString("da-DK", {
    maximumFractionDigits: 0,
  });
  return (
    <>
      <div className="font-inter font-bold leading-[36px] text-[30px] pb-3 md:text-[42px] md:leading-[50px]">
        {Title}
      </div>
      <div className="text-[16px] font-normal leading-[19px] pb-5 md:text-[28px] md:leading-[34px]">
        {Specs}
      </div>
      <div className="flex gap-2 flex-row text-center justify-center md:justify-start md:items-center">
        <div className="font-semibold text-[14px] leading-[18px] md:text-[36px] md:leading-[45px]">
          {formattedPrice}
        </div>
        <div className="font-normal text-[12px] leading-[15px] text-[#999999] line-through md:text-[25px] md:leading-[32px]">
          {formattedPrice2}
        </div>
      </div>
    </>
  );
};

export default ProductTitleSmartphone;
