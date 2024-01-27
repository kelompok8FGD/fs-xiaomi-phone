import React, { useEffect } from "react";
import Bannerleft from "/account/bannerleft.jpg";
import Logo from "../../public/logo.svg";
import { useTranslation } from "react-i18next";
import AccountForm from "../components/organism/Forms/AccountForm";
import AccountNavbar from "../components/organism/Navbar/AccountNavbar";

const Account = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-contrast max-w-full">
      <div className="flex justify-around max-w-full">
        <div id="side-banner" className="h-100vh w-0 md:w-[200px] xl:w-[470px]">
          <img
            className="h-full w-full object-cover"
            src={Bannerleft}
            width="100%"
            height="100%"
          />
        </div>

        <div className="w-full max-w-full flex flex-col gap-[0px]">
          <header className="p-6 justify-between h-[100px] flex w-full gap-5 items-start">
            <div className="flex gap-5 w-fit items-center">
              <a href="/">
                <img className="w-[40px] h-[40px]" src={Logo} alt="" />
              </a>
              <h1 className="text-[28px] text-text">{t("account")}</h1>
            </div>

            <div className="hidden md:block w-[50%]">
              <AccountNavbar />
            </div>
          </header>
          <div className="p-8 min-w-[300px] md:w-[500px] max-w-full relative bg-contrast text-left m-auto py-[20px]">
            <AccountForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
