import React from "react";
import CustomButton from '../../Atoms/WithCVA/CustomButton'

const XiaomiBanner = () => {
  return (
    <section
      id="latest_xiaomi"
      className="relative flex flex-col bg-white text-white bg-cover bg-center h-[450px] lg:h-[600px]"
    >
      <div
        id="site-banner"
        className="relative flex justify-center items-start h-full max-h-full min-h-auto overflow-hidden text-white"
      >
        <picture
          className="responsive-image flex h-full overflow-hidden absolute w-full z-1"
        >
          <source
            media="(max-width: 720px)"
            type="image/jpeg"
            srcSet="//i02.appmifile.com/298_operator_id/03/10/2023/f495255ebd34286602b86fa19fab9026.jpg"
          />

          <source
            media="(min-width: 720px) and (max-width: 1024px)"
            type="image/jpeg"
            srcSet="//i02.appmifile.com/763_operator_id/03/10/2023/afbc2aa703f8c09dfcb460a37e88bada.jpg"
          />

          <img
            className="h-full object-cover w-full object-center "
            src="//i02.appmifile.com/763_operator_id/03/10/2023/afbc2aa703f8c09dfcb460a37e88bada.jpg"
            alt="XIAOMI 13T"
            loading="lazy"
          />
        </picture>
        <div
          id="site-banner__info"
          className="flex  w-[500px] absolute z-2 top-[5%] gap-[25px] left-0 md:left-[15%] py-[3.9vw] px-0 flex-col "
    
        >
          <div className="w-full max-w-full flex flex-col items-center md:items-start">

          <h2
            id="title"
            className="text-white block text-[40px] md:text-[2vw] lg:text-[3vw] font-semibold leading-0 m-0 overflow-hidden text-ellipsis whitespace-pre-line "
          >
            Xiaomi 13T
          </h2>
          <h4
            id="subtitle"
            className="text-white block text-[20px] lg:text-[30px] font-normal m-0 overflow-hidden leading-0 text-ellipsis whitespace-pre-line"
          >
            Masterpiece in sight
          </h4>
        
              <CustomButton className="mt-6 no-arrow" to="/xiaomi" text="Beli Sekarang" intent="light" rounded="yes"/></div>
          
         
        </div>
      </div>
    </section>
  );
};

export default XiaomiBanner;
