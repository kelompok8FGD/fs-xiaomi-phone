import React from "react";
import Logo from "../../public/logo.svg";
import SupportForm from "../components/organism/Forms/SupportForm";

const Support = () => {
  return (
    <div className="bg-contrast h-[100vh]">
      <div className="flex justify-around h-full">
        <div id="side-banner" className="h-full w-0 md:w-[200px] xl:w-[470px]">
          <img
            className="h-full w-full object-cover"
            src="https://r1.ilikewallpaper.net/ipad-air-wallpapers/download/29056/Orange-Purple-Gradation-Blur-ipad-air-wallpaper-ilikewallpaper_com.jpg"
            width="100%"
            height="100%"
          />
        </div>

        <div className="w-full flex flex-col gap-[0px] h-[90vh]">
          <header className="p-6 justify-between h-[100px] flex w-full gap-5 items-start">
            <div className="flex gap-5 w-fit items-center">
              <a href="/">
                <img className="w-[40px] h-[40px]" src={Logo} alt="" />
              </a>
              <h1 className="text-[28px] text-text">Contact Support</h1>
            </div>
          </header>
          <div
            className="p-8 w-[500px] relative bg-contrast text-left m-auto py-[20px]">
            <SupportForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
