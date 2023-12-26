import React from "react";
import Tab from "../components/molecule/Tab";
import imgMiLogo from "../assets/about/mobile-internet.svg";
import imgAjang from "../assets/about/ajang.svg";
import imgLingkungan from "../assets/about/lingkungan.svg";

function About() {
  return (
    <>
      <div>
        <section className="w-full justify-center px-16 lg:w-full ">
          <h2 className="font-bold text-[45px] font-Inter text-center pt-16">
            Tentang kita
          </h2>
          <Tab />
        </section>
      </div>
      <div className="bg-white">
        <section className="justify-center items-center py-[60px] px-4 lg:w-full relative bg-white h-[480px]">
          <div className="relative h-[360px] text-center m-auto lg:max-w-[1260px] max-w-[800px] bg-[#FF6900]">
            <span className="absolute inset-0 text-4xl flex items-center justify-center font-Inter font-extrabold text-white text-opacity-10 text-[350px] ">
              13
            </span>
            <span className="absolute inset-0 bottom-[100px] text-4xl flex items-center justify-center font-Inter font-extrabold text-white text-[115px]">
              13
            </span>
            <div className="flex items-center justify-center flex-wrap">
              <span className="absolute bottom-[165px] ml-28 h-[1px] w-9 bg-white">
                {" "}
              </span>
              <span className="absolute text-xl inset-0 top-6 flex items-center justify-center font-Inter text-white font-bold">
                Years
              </span>
              <span className="absolute bottom-[165px] mr-28 h-[1px] w-9 bg-white">
                {" "}
              </span>
              <span className="absolute text-center text-white top-[200px] max-w-[440px] px-8 flex flex-wrap my-3">
                Always believe that something wonderful is about to happen
              </span>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 text-center m-auto lg:max-w-[1260px]">
            <div className="p-4">
              <img src={imgMiLogo} alt="" />
            </div>
            <div className="p-6 flex flex-col justify-center text-left">
              <h2 className="font-Inter text-3xl">LOGO KAMI</h2>
              <p className="py-4">
                "MI" di logo kami adalah singkatan dari “Mobile Internet”. Logo
                itu juga mempunyai arti lain, termasuk "Mission Impossible",
                karena Xiaomi menghadapi banyak tantangan yang tampaknya
                mustahil dihadapi pada awal perjalanan kami.had seemed
                impossible to defy in our early days.
              </p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 px-5 pt-10 justify-center">
          <div className=" background-text-images m-auto text-center bg-cover lg:max-w-[1260px]">
            <h3 className="font-Inter text-3xl py-4 font-medium text-white px-8 pt-8">
              MEMBUAT TEKNOLOGI BERKUALITAS BISA DIAKSES OLEH SIAPA SAJA
            </h3>
            <p className="font-Inter text-base text-white px-8 pb-8 mx-10">
              Xiaomi Corporation ("Xiaomi") didirikan pada bulan April 2010 dan
              terdaftar di Bursa Efek Hong Kong pada tanggal 9 Juli 2018
              (1810.HK). Xiaomi adalah perusahaan manufaktur produk pintar dan
              elektronik konsumen yang terutama berfokus pada smartphone dan
              perangkat keras pintar yang terhubung melalui platform IoT. Lewat
              visi kami "Menjadikan pengguna sebagai teman dan menjadi
              perusahaan yang paling disukai di hati pengguna", Xiaomi terus
              berupaya mengejar inovasi, pengalaman pengguna berkualitas tinggi,
              dan efisiensi pengoperasian. Perusahaan ini terus meluncurkan
              produk-produk luar biasa dengan harga yang sebenarnya agar semua
              orang dapat menikmati kehidupan yang lebih baik lewat teknologi
              inovatif. Menurut Canalys, pangsa pasar perusahaan sebagai pemasok
              smartphone menempati peringkat 3 secara global di kuartal kedua
              tahun 2022. Perusahaan juga telah membangun platform AIoT (AI+IoT)
              konsumen yang terkemuka di dunia dengan lebih dari 526,9 juta
              perangkat pintar yang terhubung ke platform per tanggal 30 Juni
              2022, tidak termasuk smartphone, tablet, dan laptop. Produk Xiaomi
              tersedia di lebih dari 100 negara dan wilayah di seluruh dunia.
              Pada bulan Agustus 2022, perusahaan masuk dalam daftar Fortune
              Global 500 untuk keempat kalinya dengan menempati peringkat
              ke-266, naik 72 posisi dibandingkan tahun 2021. Xiaomi terdaftar
              di Hang Seng Index, Hang Seng China Enterprises Index, Hang Seng
              TECH Index, dan Hang Seng China 50 Index.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 px-5 py-10 ">
          <div className="bg-cover text-center m-auto lg:max-w-[1260px]">
            <h3 className="font-Inter text-3xl py-4 font-medium text-black px-8 ">
              BUDAYA KAMI
            </h3>
            <p className="font-Inter text-base text-black px-8 pb-8">
              "Semata-mata untuk penggemar" – itulah keyakinan kami. Para
              penggemar berat Mi kamilah yang mengawali setiap langkah kami.
              Nyatanya, banyak karyawan Xiaomi yang merupakan penggemar Mi
              sebelum bergabung dalam tim. Sebagai tim, kami berupaya bersama
              mewujudkan kesempurnaan, menyempurnakan dan meningkatkan produk
              kami demi memberikan pengalaman pengguna yang terbaik. Kami juga
              tidak takut dalam menguji gagasan-gagasan baru dan mendobrak
              keterbatasan kami sendiri. Dedikasi dan keyakinan kami terhadap
              inovasi, bersama dengan dukungan dari penggemar Mi, merupakan
              kekuatan pendorong di balik produk Mi unik kami.
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 text-center m-auto lg:max-w-[1260px]">
            <div className="p-4 flex flex-col justify-center">
              <h2 className="font-Inter text-left font-medium text-3xl">
                LINGKUNGAN KANTOR
              </h2>
              <p className="py-4 text-left">
                Kami sangat egaliter, terbuka, dan inovatif. Tidak ada rapat
                yang perlu waktu lama. Tidak ada proses yang panjang. Kami
                menyediakan lingkungan yang ramah dan kolaboratif untuk
                mengembangkan kreativitas.
              </p>
            </div>
            <div className="p-4 ">
              <img src={imgLingkungan} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 text-center m-auto lg:max-w-[1260px]">
            <div className="p-4">
              <img src={imgAjang} alt="" />
            </div>
            <div className="p-4 flex flex-col justify-center text-left">
              <h2 className="font-Inter text-3xl font-medium">AJANG</h2>
              <p className="py-4">
                Xiaomi memiliki banyak talenta hebat! Kompetisi yang ramah
                membuat tim Mi memamerkan kepiawaian mereka dalam basket,
                renang, badminton, dan lainnya. “Mi Idol” tahunan juga telah
                mengungkap banyak potensi hebat.
              </p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 px-5 pt-10 justify-center mb-[48px]">
          <div className=" background-text-images m-auto text-center bg-cover lg:max-w-[1260px]">
            <h3 className="font-Inter text-3xl py-4 font-medium text-white px-8 pt-8">
              KARIER
            </h3>
            <p className="font-Inter text-base text-white px-8 pb-8">
              Xiaomi berfokus untuk menjadi perusahaan internet seluler yang
              paling berorientasi pengguna, dan kami bertekad untuk dapat terus
              melampaui harapan melalui inovasi pada perangkat lunak, perangkat
              keras, dan layanan. Banyak dari karyawan kami pada awalnya
              merupakan penggemar produk Mi sebelum mereka memutuskan untuk
              bergabung dengan kami. Tim kami tidak hanya sangat antusias dengan
              teknologi, tetapi juga terus berupaya untuk mencapai kesempurnaan
              untuk mendobrak pandangan kuno dan batas-batas, semuanya hanya
              untuk memastikan produk kami tetap unik dan menawarkan pengalaman
              pengguna yang tiada duanya.
            </p>
            <a href="https://www.linkedin.com/company/xiaomi-technology/">
              <button className="text-black font-Inter font-normal bg-slate-100 rounded-xl p-2 px-4 mb-10">
                LIHAT SEMUA POSISI
              </button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
