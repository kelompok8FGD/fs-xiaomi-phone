import BannerStore from "../../Atoms/StoreBanner/BannerStore";


const StoreBanner = () => {
  return (
    <section className="">
      <div className="pt-20">
        <div className="relative w-full px-1 md:px-1 flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <BannerStore Title='TUKAR TAMBAH' Tagline='Lebih untung, lebih hemat! *Syarat dan Ketentuan Berlaku' BannerPicLarge='/banner/banner1.webp' BannerPicSmall='/banner/banner-sm-1.webp' Button='TUKAR TAMBAH SEKARANG' />
        </div>
      </div>

      <div className="pt-5">
        <div className="relative w-full px-4 md:px-1 flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <BannerStore Title='Zona Pengguna Baru' Tagline='Selamat datang! Ada hadiah eksklusif voucher Rp 75k bagi Anda yang baru bergabung!' BannerPicLarge='/banner/banner3.webp' BannerPicSmall='/banner/banner-sm-3.webp' Button='Kumpulkan' />
        </div>
      </div>

      <div className="pt-5">
        <div className="relative w-full px-4 md:px-1 flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <BannerStore Title='Masterpiece in sight ' Tagline='Behind every masterpiece, is a story worth a thousand words.' BannerPicLarge='/banner/banner2.webp' BannerPicSmall='/banner/banner-sm-2.webp' Button='Learn More' />
        </div>
      </div>
    </section>

  );
};

export default StoreBanner;
