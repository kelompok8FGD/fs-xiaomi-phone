import BannerError from "../../Atoms/BannerError";
import ListCard from "../../molecule/Error/Card/ListCard";

const LayoutError = () => {
  return (
    <>
      <BannerError ErrorPicDesktop="https://firebasestorage.googleapis.com/v0/b/tutorial-1ad91.appspot.com/o/xiaomi%2Fpage-404.png?alt=media&token=a64d3e39-3765-49b5-aa69-5061731bf8b7" />

      <section id="judul_card" className="text-center font-inter">
        <h1 className="text-slate-500 text-xl">
          Masih bingung? Coba lihat produk premium ini, mungkin ada yang Anda
          suka!
        </h1>
      </section>

      <ListCard />
    </>
  );
};

export default LayoutError;
