import ProductCards from "../../molecule/Cards/ProductCards";
import ProductBanner from "../../molecule/Banners/ProductBanner";

const XiaomiSection = () => {
  return (
    <>
        <ProductBanner  darkTheme hideDiscount baseURL={import.meta.env.VITE_APP_BASEURL} category="xiaomi" id={10} phonePicDesktop={"https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/1desktop.webp?alt=media&token=cfa4944a-3a79-40f6-9ae2-5f3a3ff89e85"} phonePicMobile={"https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/1mobile.webp?alt=media&token=2e4206b3-22ec-4bd6-809a-efb07be0a9d0"}/>
        <ProductCards category="xiaomi" mdCols={1} lgCols={2} xlCols={2} currentPage={0} postsPerPage={8}/> 
      
    </>
  );
};

export default XiaomiSection;
