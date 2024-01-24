import React from "react";
import CustomButton from "../../../Atoms/Buttons/CustomButton";

const LatestPhone = ({title, subtitle, imgphone, imgmedium, to1, to2,}) => {
  return (
    <section className="w-[100%] max-w-full overflow-hidden md:w-[50%] relative h-[650px] flex items-center justify-center flex-col bg-white text-white bg-cover bg-center">
      <picture className=" flex h-[700px] mx-auto overflow-hidden absolute w-auto z-1">
        <source
          media="(max-width: 720px)"
          type="image/jpeg"
          srcSet={imgphone} 
        />

        <source
          media="(min-width: 720px) and (max-width: 1024px)"
          type="image/jpeg"
          srcSet={imgmedium} 
        />

        <img
          className="h-full object-cover object-fit w-full object-center mt-[-80px] "
          src={imgmedium} 
          alt={title}
          loading="lazy"
        />
      </picture>
      <div
        id="site-banner__info"
        className="justify-center text-center  w-[500px] absolute z-2 top-[4%] gap-[0px] lg:gap-[0px] flex flex-col left-0 py-[3.9vw] px-0 "
        >
        <div className="flex flex-col gap-[10px]">
          <h2
            id="title"
            className="text-black block text-[20px] md:text-[25px] lg:text-[40px] font-medium m-0 overflow-hidden text-ellipsis whitespace-pre-line ">
            {title}
          </h2>
          <h3
            id="subtitle"
            className="text-black block text-[20px] lg:text-[22px] font-normal m-0 overflow-hidden text-ellipsis whitespace-pre-line line-1">
            {subtitle}
          </h3>
        </div>

        <div className="flex flex-col w-full gap-[10px]">
          <div className="flex-inline space-x-[0px] justify-center md:justify-left w-full">
            <div className="flex justify-center w-full">
              <CustomButton
                to={to1} 
                text="Beli sekarang"
                intent="accent_nobg"
                border="yes"
                hover="yes_underline"
                rounded="yes"
                icon=">"
                order="textFirst"
              />
              <CustomButton
                to={to2} 
                text="Learn More "
                intent="dark_nobg"
                border="no"
                hover="yes_underline"
                rounded="yes"
                icon=">"
                order="textFirst"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPhone;
