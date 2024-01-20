const BannerError = (props) => {
  const { ErrorPicDesktop } = props;
  return (
    <section
      id="error_page"
      className="grid grid-cols-1 m-8 p-4 lg:grid-cols-2 items-center font-inter"
    >
      <picture className="rounded-xl m-3 w-full">
        <img src={`${ErrorPicDesktop}`} />
      </picture>

      <div className="bg-white rounded-xl m-3 hidden lg:inline">
        <div className="p-8">
          <h3 className="text-[22px] font-semibold">
            Halaman yang Anda cari tidak bisa dibuka
          </h3>
          <p className="text-sm font-normal text-slate-500">
            Namun, banyak produk menarik lainnya di toko
          </p>
          {/* fitur search can implemen in this code */}
          <input type="text" className="w-72 p-2 outline-none" />
          <br />
          <a href="/" className="text-sm mt-10 text-amber-600">
            atau kembali ke halaman awal
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerError;
