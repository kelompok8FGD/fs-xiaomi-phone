import React from "react";
import "../components/organism/Redmi/RedmiPhoneList.css";
import SiteBanner from "../components/organism/Redmi/SiteBanner/SiteBanner";
import SiteGoods from "../components/organism/Redmi/SiteGoods/SiteGoods";
import SubNavPhoneList from "../components/molecule/Redmi/SubNavPhoneList/SubNavPhoneList";
import NavbarProducts from "../components/organism/Navbar/NavbarProducts";

const RedmiPhoneList = () => {
  return (
    <div>
      <NavbarProducts
        titleHead="Redmi Phone"
        title1="Redmi Phone"
        title2="Xiaomi Phone"
        title3="Poco Phone"
        toTitle1="/redmi"
        toTitle2="/xiaomi"
        toTitle3="/poco"
      />
      <div className="redmi-page">
        <SiteBanner />
        <SiteGoods />
      </div>
    </div>
  );
};

export default RedmiPhoneList;
