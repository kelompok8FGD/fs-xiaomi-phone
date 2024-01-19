import CheckoutNavbar from "../components/organism/Navbar/CheckoutNavbar";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Checkout() {
  const [dataCheckout, setDataCheckout] = useState([]);

  const getApiCheckout = async () => {
    const response = await axios(
      "https://xiaomi-phone-api.onrender.com/api/v1/checkout",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJiZGZhc0BnbWFpbC5jb20iLCJpYXQiOjE3MDU1ODAyODYsImV4cCI6MTcwODE3MjI4Nn0.U3WHpbXwJM7mukn_oJO2WzF2h4Gg-Hv42WIbE54uQlg",
        },
      }
    );

    setDataCheckout(response.data);
  };

  useEffect(() => {
    getApiCheckout();
  }, []);

  return (
    <div>
      <CheckoutNavbar activeStep={2} />

      {/* Checkout Start */}
      <main className="grid grid-cols-1 lg:min-w-[1025px] lg:max-w-[1440px] lg:grid-cols-7 lg:m-auto lg:relative lg:mb-5">
        <article className="grid grid-flow-col grid-cols-1 max-w-full min-w-xl lg:col-span-4 lg:ml-4 lg:mr-1 lg:bg-white lg:mt-2">
          <div className="">
            <section className="bg-white mt-2 mb-4 px-8">
              <div className="pt-6 hidden lg:block">
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl">
                    Alamat Pengiriman
                  </h2>
                </div>
                <div className="bg-slate-100 h-[1px] max-w-2xl lg:mb-7"></div>
              </div>
            </section>
            <>
              <section className="bg-white mt-2 mb-4 px-8 lg:grid lg:grid-cols-2">
                <div className="max-w-lg py-6 lg:border lg:border-solid lg:rounded-lg lg:p-[10px] lg:mr-1 lg:hover:border-[#FF6900] lg:hover:cursor-pointer">
                  <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-lg">
                    {dataCheckout.address_name}
                  </h2>
                  <p className="text-lg lg:text-base">+62877****4477</p>
                  <p className="text-lg lg:text-base ">
                    {dataCheckout.address_line1}
                    <span> {dataCheckout.address_line2}</span>
                    <span> {dataCheckout.city}</span>
                  </p>

                  <p className="text-lg lg:text-base ">
                    {dataCheckout.region} {dataCheckout.postal_code}
                  </p>
                </div>
                <div className="hidden max-w-lg py-6 lg:block lg:border lg:border-solid lg:rounded-lg lg:p-[10px] lg:ml-1 lg:hover:border-[#FF6900] lg:hover:text-[#FF6900] lg:hover:cursor-pointer">
                  <div className="flex justify-center text-center">
                    <p className="font-inter">Tambah Alamat Baru</p>
                  </div>
                </div>
              </section>
            </>

            <section className="p-8 mb-4 bg-white">
              <div className="mb-6">
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    Faktur
                  </h2>
                </div>
                <div className="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>
              <div>
                <p>Formulir online faktur pajak dalam perbaikan.</p>
                <p>Permintaan faktur pajak hubungi call center</p>
                <br />
                <br />
                <p>(Maksimal di tanggal akhir bulan transaksi)</p>
                <p>Hotline : 00180300650029 (! Toll-Free / Bebas Biaya)</p>
                <p>Jam Operasional: Senin-Minggu Jam 09:00-18:00 WIB</p>
                <p>Email: service.id@support.mi.com</p>
              </div>
            </section>
            <section className="p-8 mb-4 bg-white">
              <div className="mb-6">
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    Metode pengiriman
                  </h2>
                </div>
                <div className="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>
              <div className="grid grid-cols-9 border border-solid rounded-lg mb-2 lg:hover:border-[#FF6900] lg:hover:cursor-pointer">
                <div className="text-center my-auto">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FF6900] h-5 w-5"
                  />
                </div>
                <div className="p-4 col-span-8">
                  <p>Pengiriman Sepeda motor</p>
                  <p className="text-[#FF6900]">
                    Layanan pengiriman ini tidak didukung
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-9 border border-solid rounded-lg mt-2 mb-3 lg:hover:border-[#FF6900] lg:hover:cursor-pointer">
                <div className="text-center my-auto">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FF6900] h-5 w-5"
                  />
                </div>
                <div className="p-4 col-span-8">
                  <p>Pengiriman standar</p>
                  <p>3-5 hari setelah pembayaran</p>
                  <p className="text-[#FF6900]">
                    Pengiriman gratis dari Rp 500.000
                  </p>
                </div>
              </div>
              <p>
                Dipengaruhi oleh cuaca dan festival, pengiriman akan tertunda
              </p>
            </section>
            <section className="p-8 mb-4 bg-white">
              <div className="pb-6">
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    Metode Pembayaran
                  </h2>
                </div>
                <div className="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>
              <div className="border border-solid rounded-lg p-4 my-3">
                <h3>Pembayaran teransfer Bank</h3>
              </div>
            </section>
          </div>
        </article>

        <aside className="grid grid-flow-col grid-cols-1 max-w-full min-w-xl lg:col-span-3 lg:ml-1 lg:mr-4 lg:mt-2 lg:bg-white">
          <div className="grid grid-cols-1">
            <section className="p-8 mb-4 bg-white lg:order-2 lg:pt-0 lg:pb-0 lg:mb-0">
              <div className="pb-6">
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    {dataCheckout.qty} item
                  </h2>
                </div>
                <div className="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>
              <div className="grid grid-cols-4">
                <div>
                  <img src={dataCheckout.image} alt="" />
                </div>
                <div className="col-span-2">
                  <p>{dataCheckout.name_product}</p>
                  <p>Jumlah: {dataCheckout.qty}</p>
                </div>
                <div>
                  <p>Rp. {dataCheckout.price}</p>
                </div>
              </div>
            </section>
            <section className="p-8 mb-4 bg-white lg:order-1 lg:pb-0 lg:mb-0">
              <div>
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl">
                    Ringkasan pesanan
                  </h2>
                </div>
              </div>
            </section>
            <section className="p-8 mb-4 bg-white lg:order-3 lg:pb-0 lg:mb-0 lg:mt-0 lg:pt-0">
              <div className="grid grid-flow-col grid-cols-2 pb-6">
                <div>
                  <p>Subtotal</p>
                </div>
                <div className="text-right">
                  <p>Rp 6.499.000</p>
                </div>
              </div>
              <div className="bg-slate-100 h-[1px] max-w-2xl"></div>
              <div className="grid grid-flow-col grid-cols-2 pt-6">
                <div>
                  <p>Biaya pengiriman</p>
                </div>
                <div className="text-right">
                  <p>Gratis</p>
                </div>
              </div>
            </section>
            <section className="p-8 mb-4 bg-white lg:order-5 lg:pb-0 lg:mb-0 lg:mt-0 lg:pt-0">
              <div className="grid grid-cols-2">
                <div>
                  <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    Kupon
                  </h2>
                </div>
                <div className="text-right">
                  <p className="lg:text-[#FF6900]">Gunakan Kupon</p>
                </div>
              </div>
            </section>
            <section className="p-8 mb-4 lg:order-last lg:pb-0 lg:mb-0 lg:mt-0 lg:pt-0">
              <div className="grid grid-cols-9 lg:hover:border-[#FF6900] lg:hover:cursor-pointer">
                <div className="text-center m-auto">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FF6900] h-5 w-5"
                  />
                </div>
                <div className="col-span-8">
                  <span className="">
                    Dengan melakukan pemesanan, berarti Anda telah membaca dan
                    menyetujui
                    <span className="text-[#FF6900]">
                      Ketentuan Penggunaandan
                    </span>
                    dan
                    <span className="text-[#FF6900]">
                      Kebijakan Privasi{" "}
                    </span>{" "}
                    Mi.com. Saya telah membaca dan menyetujui
                    <span className="text-[#FF6900]">
                      Kebijakan Pengembalian.
                    </span>
                  </span>
                </div>
              </div>
            </section>
            <section className="bg-white lg:order-2 lg:mt-0 lg:pt-0">
              <div className="relative">
                <div
                  id="yourFixedElement"
                  className="bottom-0 w-full p-4 mb-0 bg-white flex flex-row justify-normal lg:static lg:grid lg:order-2 lg:grid-cols-2 lg:pt-0 lg:pb-0 lg:mt-0 lg:mb-0"
                >
                  <div className="pr-5 my-auto justify-self-start left-2 lg:left-0">
                    <h1 className="font-Inter text-2xl font-bold text-[#FF6900] xsml:w-3xl lg:ml-auto lg:text-2xl">
                      Total:
                    </h1>
                  </div>
                  <div className="justify-self-start mx-auto my-auto lg:text-right lg:mr-auto">
                    <h1 className="font-Inter text-2xl xsml:w-3xl font-bold text-[#FF6900] sm:text-3xl lg:text-2xl">
                      Rp 6.499.000
                    </h1>
                  </div>
                  <div className="items-end lg:absolute lg:bottom-0 lg:right-20 lg:pb-10 lg:hidden">
                    <button className="w-[201px] h-[56px] rounded-lg bg-black opacity-1 text-center justify-self-end xsml:w-[241px]">
                      <h1 className="text-white font-Inter text-xl xsml:text-2x1">
                        Bayar Sekarang
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="hidden lg:grid lg:order-last text-center">
              <div className="items-end lg:bottom-0 lg:right-20 lg:pb-1">
                <button className="w-[241px] h-[56px] rounded-lg bg-black opacity-1 text-center justify-self-end lg:w-[400px]">
                  <h1 className="text-white font-Inter text-2xl z-50">
                    Bayar Sekarang
                  </h1>
                </button>
              </div>
            </section>
          </div>
        </aside>
      </main>
      {/* Checkout End */}
    </div>
  );
}

export default Checkout;
