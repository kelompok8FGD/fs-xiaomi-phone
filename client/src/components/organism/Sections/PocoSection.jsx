import ProductCards from "../../molecule/Cards/ProductCards";
import ProductBanner from "../../molecule/Banners/ProductBanner";


export default function PocoSection() {
  const PocoPhonePicDesktop="https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/poco_f5%2Fbanner_poco_F5_panjang_desktop.jpg?alt=media&token=54a466d1-7760-40c2-ac1d-253a983e3eb4"
  const PocoPhonePicMobile="https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/poco_f5%2Fbanner_poco_F5_panjang_mobile.jpg?alt=media&token=d09ec3e7-209b-44d9-8547-6c17198d4131"
 
  return (
    <>
      {/* Banner Flagship */}
      <ProductBanner alignLeft lightTheme hideDiscount hideLearnMore={false} baseURL={import.meta.env.VITE_APP_BASEURL} category="poco" id={8} 
    phonePicDesktop={PocoPhonePicDesktop}
    PocoPhonePicMobile={PocoPhonePicMobile}/>
      <section className="w-full flex flex-col flex-wrap bg-[#F7F7F7]">
        {/* Large Card */}
        <ProductCards category="poco" mdCols={2} startfromproduct={0} endatproduct={2} />  
        {/* Small Card Start */}
        <ProductCards category="poco" mdCols={2} lgCols={3} xlCols={3} startfromproduct={3} endatproduct={7} />

      
      </section>
    </>
  );
}
