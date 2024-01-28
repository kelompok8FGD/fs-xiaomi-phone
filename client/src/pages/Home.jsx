import React from "react";
import LatestPhone from "../components/molecule/Cards/LatestProducts/LatestPhone";
import ProductBanner from "../components/molecule/Banners/ProductBanner";
import ProductCards from "../components/molecule/Cards/ProductCards";


const Home = () => {
  const XiaomibgMobile = "//i02.appmifile.com/298_operator_id/03/10/2023/f495255ebd34286602b86fa19fab9026.jpg"
  const XiaomibgDesktop = "//i02.appmifile.com/763_operator_id/03/10/2023/afbc2aa703f8c09dfcb460a37e88bada.jpg"
  const RedmibgMobile = "//i02.appmifile.com/339_operator_id/28/08/2023/cb75293af8447ff973b3028e0e963a43.jpg"
  const RedmibgDesktop = "//i02.appmifile.com/234_operator_id/28/08/2023/5ff4c5eefe09aef79ac1275be40131e6.jpg"
  
  

  return (
    <div className="flex flex-col max-w-full bg-[#f7f7f7] gap-[15px]">
      <div id="top-banner" className="w-full flex flex-col gap-[16px]">
      <ProductBanner height="h-[450px] lg:h-[600px]" alignLeft lightTheme hideDiscount hidePrices hideLearnMore baseURL={import.meta.env.VITE_APP_BASEURL} category="xiaomi" id={9} phonePicDesktop={XiaomibgDesktop} phonePicMobile={XiaomibgMobile}/>
      <ProductBanner height="h-[450px] lg:h-[600px]" alignLeft darkTheme hideDiscount baseURL={import.meta.env.VITE_APP_BASEURL} category="redmi" id={1} phonePicDesktop={RedmibgDesktop} phonePicMobile={RedmibgMobile}/>
      </div>

      <ProductCards category="redmi" mdCols={1} lgCols={2} xlCols={2} currentPage={0} postsPerPage={4}/> 

    </div>
  );
};

export default Home;
