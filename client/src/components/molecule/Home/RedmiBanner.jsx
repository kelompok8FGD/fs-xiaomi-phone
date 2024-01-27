import React from "react";
import CustomButton from "../../Atoms/Buttons/CustomButton";

const RedmiBanner = () => {
  return (
    <section
      id="latest_redmi"
      className="relative flex flex-col bg-white text-black bg-cover bg-center h-[500px] lg:h-[600px]"
    >
      <div
        id="site-banner"
        className="relative flex justify-center items-start h-full max-h-full min-h-auto overflow-hidden"
      >
        <picture className="responsive-image flex h-full overflow-hidden absolute w-full z-1">
          <source
            media="(max-width: 720px)"
            type="image/jpeg"
            srcSet="//i02.appmifile.com/339_operator_id/28/08/2023/cb75293af8447ff973b3028e0e963a43.jpg"
          />

          <source
            media="(min-width: 720px) and (max-width: 1024px)"
            type="image/jpeg"
            srcSet="//i02.appmifile.com/234_operator_id/28/08/2023/5ff4c5eefe09aef79ac1275be40131e6.jpg"
          />

          <img
            className="h-full object-cover w-full object-center "
            src="//i02.appmifile.com/234_operator_id/28/08/2023/5ff4c5eefe09aef79ac1275be40131e6.jpg"
            alt="XIAOMI 13T"
            loading="lazy"
          />
        </picture>
        <div
          id="site-banner__info"
          className=" w-[500px] absolute z-2 top-[4%] gap-[20px] lg:gap-[50px] flex flex-col left-[15%]  md:left-[15%] w-full py-[3.9vw] px-0 "
        >
          <div className="w-full max-w-full flex flex-col items-center text-center md:text-left md:items-start">
            <h2
              id="title"
              className="text-black block text-[40px] md:text-[2vw] lg:text-[40px] font-semibold m-0 overflow-hidden text-ellipsis whitespace-pre-line "
            >
              Redmi 12
            </h2>
            <h3
              id="subtitle"
              className="text-black block text-[20px] lg:text-[30px] font-normal m-0 overflow-hidden text-ellipsis whitespace-pre-line"
            >
              Memori tergede, harga terkece
            </h3>

            <div className="flex flex-col gap-[20px]">
              <div className="text-[15px] lg:text-[25px]">
                Mulai dari{" "}
                <strong>
                  <small>Rp&nbsp;</small>2.199.000
                </strong>{" "}
              </div>

              <div className="flex space-x-[15px] justify-center md:justify-left w-full">
            
                  <CustomButton
                    text="Beli sekarang"
                    intent="dark"
                    border="yes"
                    hover="no"
                    rounded="yes"
                  />
                  <div className="toogle_icon">
                    {" "}
                    <CustomButton
                      to="/redmi"
                      text="Learn More"
                      intent="dark_nobg"
                      border="custom"
                      hover="custom"
                      rounded="yes"
                      icon=">"
                      order="textFirst"
                    />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedmiBanner;
