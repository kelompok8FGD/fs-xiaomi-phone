import React from "react";
import GooglePlay from "/src/assets/global/google-play-logo.svg";
import FooterList from "./FooterList";

const list1 = [
  { to: 'redmi', pagename: 'Redmi Note 11' },
  { to: 'redmi', pagename: 'Redmi 10A' },
  { to: 'redmi', pagename: 'Redmi AC' },
  
];

const list2 = [
  { to: '#', pagename: 'Garansi' },
  { to: '#', pagename: 'Service Center Resmi' },
];

const list3 = [
  { to: '/about', pagename: 'Tentang Kita' },
  { to: '/about', pagename: 'Leadership Team'},
  { to: '/about', pagename: 'Kebijakan Privasi'},
  { to: '#', pagename: 'Integrity and Compliance'},
  { to: '#', pagename: 'Trust Center'},

];

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-[#191919] text-white flex justify-center">
      <div
        id="footer-wrapper"
        className="p-5 md:p-20 max-w-[1500px] pt-[64px] flex  h-full w-full flex-col">
        <div className="flex flex-col lg:flex-row">
          <div
            id="list"
            className="hidden md:flex flex-row text-left w-full lg:w-[65%]  h-full">
            <div className="w-[40%] xl:w-[30%] h-full pr-5 ">
            <FooterList listtitle="PRODUCT" listprops={list1}/>
            </div>
            <div className=" w-[auto] h-full pr-5">
            <FooterList listtitle="DUKUNGAN" listprops={list2}/>
            </div>
            <div className=" w-auto h-full px-10 ">
            <FooterList listtitle="TENTANG" listprops={list3}/>
            
            </div>
          </div>
          <div
            id="info"
            className="p-0 lg:pl-20 md:flex flex-col w-full lg:w-[35%] bg-[#191919] h-full items-start justify-between">
            <div id="info-warpper" className="w-full">
              <div className="flex flex-col w-full justify-between">
                <div id="footer-follow">
                  <h3 className="footer_title">Ikuti sosial media Xiaomi</h3>
                  <ul className="flex gap-5 pt-4">

                    <li>
                      <a
                        href="https://www.facebook.com/XiaomiIndonesia"
                        target="_blank"
                        rel="noopenner noreferrer nofollow "
                        aria-label="Social Media-facebook">
                        <i
                          className="micon micon-facebook"
                          id="facebook-social"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/xiaomi.indonesia?igshid=4e0hzv0q2nmu"
                        target="_blank"
                        rel="noopenner noreferrer nofollow "
                        aria-label="Social Media-instagram">
                        <i className="micon micon-instagram" id="ig-social"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/xiaomiindonesia"
                        target="_blank"
                        rel="noopenner noreferrer nofollow"
                        aria-label="Social Media-twitter">
                        <i
                          className="micon micon-twitter"
                          id="twitter-social"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UC4qeOFEmsAHF2jQ4y0qHikw"
                        target="_blank"
                        rel="noopenner noreferrer nofollow"
                        aria-label="Social Media-youtube">
                        <i className="micon micon-youtube" id="yt-social"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div id="footer-connect">
                  <h3 className="footer_title lg:pt-5">
                    Untuk berlangganan buletin kami
                  </h3>
                  <div id="footer_form" className="w-full pt-4">
                    <div id="footer_input" className="w-full block relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full h-[48px] bg-[#191919] border border-white border-2  p-3 focus:border-[#FFA500] rounded-md"
                        placeholder="Masukkan alamat email di sini"
                      />
                      <button
                        id="submitt-icon"
                        className="absolute top-0 right-[10px] px-1 flex h-full items-center">
                        <i className="micon micon-forward text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="footer-app" className="py-5">
              <h3 className="footer-title py-4">Unduh Aplikasi Mi Store</h3>
              <button className="w-fit h-[48px] border border-white border-2 flex items-center pr-[15px] py-2 rounded-md">
                <a
                  href="https://www.mi.co.id/id/appdownload/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Temukan di Google Play Store"
                  className="flex justify-between">
                  <img
                    src={GooglePlay}
                    className="h-[20px]"
                    alt=""
                    loading="lazy"
                    height="40"
                    width="40"
                  />
                  <span className="text-white">
                    Temukan di Google Play Store
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-auto flex flex-col justify-start md:flex-row-reverse ">
          <div className="flex w-full flex-col justify-start md:flex-row md:justify-between md:items-center">
            <div className="w-fit">
              <a
                href="//www.mi.co.id/id/sitemap/"
                target="_blank"
                className="text-white flex items-center">
                Peta Situs
              </a>
            </div>
            <div className="w-fit">
              <a
                href="//www.mi.co.id/id/select-location/"
                className="text-white flex items-center">
                Indonesia / Indonesia
                <i className="micon micon-language-earth locale__icon text-md ml-[10px] text-white"></i>
              </a>
            </div>
          </div>
          <div className="flex w-full justify-left gap-5 lg:min-w-fit lg:w-max md:px-5 items-center border-t-2 border-white md:border-0">
            <p className="text-white">
              Copyright © 2010 - 2023 Xiaomi. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;