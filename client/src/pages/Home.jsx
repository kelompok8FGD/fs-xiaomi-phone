import React from "react";
import LatestPhone from "../components/molecule/Cards/LatestProducts/LatestPhone";
import ProductBanner from "../components/molecule/Banners/ProductBanner";


const Home = () => {
  const XiaomibgMobile = "//i02.appmifile.com/298_operator_id/03/10/2023/f495255ebd34286602b86fa19fab9026.jpg"
  const XiaomibgDesktop = "//i02.appmifile.com/763_operator_id/03/10/2023/afbc2aa703f8c09dfcb460a37e88bada.jpg"
  const RedmibgMobile = "//i02.appmifile.com/339_operator_id/28/08/2023/cb75293af8447ff973b3028e0e963a43.jpg"
  const RedmibgDesktop = "//i02.appmifile.com/234_operator_id/28/08/2023/5ff4c5eefe09aef79ac1275be40131e6.jpg"
  
  

  return (
    <div className="flex flex-col max-w-full bg-[#f7f7f7] gap-[15px]">
      <div id="top-banner" className="w-full flex flex-col gap-[16px]">
      <ProductBanner height="h-[450px] lg:h-[600px]" alignLeft lightTheme hideDiscount hidePrices hideLearnMore baseURL={import.meta.env.VITE_APP_BASEURL} category="xiaomi" id={27} phonePicDesktop={XiaomibgDesktop} phonePicMobile={XiaomibgMobile}/>
      <ProductBanner height="h-[450px] lg:h-[600px]" alignLeft darkTheme hideDiscount baseURL={import.meta.env.VITE_APP_BASEURL} category="redmi" id={1} phonePicDesktop={RedmibgDesktop} phonePicMobile={RedmibgMobile}/>
      </div>
      <div
        id="latestproduct"
        className="max-w-full w-full flex flex-col sm:flex-row sm:space-y-[15px] lg:space-y-[0px] md:space-x-[15px]"
      >
        <LatestPhone
          title="Redmi 10 2022"
          subtitle="Harga super Hemat"
          imgmedium="//i02.appmifile.com/67_operator_id/13/06/2023/8f2a3ef42c1fdc7f22980c0e69bb876e.jpg"
          imgphone="//i02.appmifile.com/67_operator_id/13/06/2023/8f2a3ef42c1fdc7f22980c0e69bb876e.jpg"
          to1="/redmi"
          to2="/redmi"
        />
        <LatestPhone
          title="Redmi Note 12"
          subtitle="50MP triple kamera | Layar AMOLED 120Hz"
          imgmedium="//i02.appmifile.com/351_operator_id/05/05/2023/19d9489a4da7932901d5535c6bd94c4f.jpg"
          imgphone="//i02.appmifile.com/351_operator_id/05/05/2023/19d9489a4da7932901d5535c6bd94c4f.jpg"
          to1="/redmi"
          to2="/redmi"
        />
      </div>
    </div>
  );
};

export default Home;
