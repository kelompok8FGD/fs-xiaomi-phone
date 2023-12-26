/* eslint-disable react/prop-types */

const TitleFlagship = (props) => {
  const { Title, Specs, CurrentPrice, PreviousPrice } = props;
  return (
    <div>
      <div className="font-inter font-bold leading-[36px] text-[30px] pb-3 md:text-[42px] md:leading-[50px] text-white">
        {Title}
      </div>
      <div className="text-[16px] font-normal leading-[19px] pb-5 md:text-[28px] md:leading-[34px] text-white">
        {Specs}
      </div>
      <div className="flex gap-2 flex-row text-center justify-center md:justify-start md:items-center">
        <div className="font-semibold text-[20px] leading-[18px] md:text-[36px] md:leading-[45px] text-white">
          <span className="text-[12px] md:text-[25px]">Mulai Dari Rp</span>{" "}
          {CurrentPrice}
        </div>
        <div className="font-normal text-[12px] leading-[15px] text-[#999999] line-through md:text-[25px] md:leading-[32px] ">
          {PreviousPrice}
        </div>
      </div>
      <div className="mt-5 md:flex"></div>
    </div>
  );
};

export default TitleFlagship;
