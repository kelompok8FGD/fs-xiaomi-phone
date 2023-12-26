/* eslint-disable react/prop-types */
const BannerSeeAll = (props) => {
  const { SeriesName, redirect, Motto } = props;
  return (
    <>
      <div className="font-bold text-[24px] leading-[30px] md:text-[36px] md:leading-[43px]">
        {SeriesName}
      </div>
      <div className="font-normal text-[20px] pt-4 leading-[18px] md:text-[18px] md:leading-[22px]">
        {Motto}
      </div>
    </>
  );
};

export default BannerSeeAll;
