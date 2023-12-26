import React from "react";
import "./SiteGoods.css";
import SiteGoodsType from "../../../molecule/Redmi/SiteGoodsType/SiteGoodsType";

import RedmiNote11 from "../../../../../public/redmi/redmi-note11.webp";
import RedmiNote11Pro from "../../../../../public/redmi/redmi-note11pro.webp";
import RedmiNote11Pro5G from "../../../../../public/redmi/redmi-note11pro5G.webp";
import Redmi102022 from "../../../../../public/redmi/redmi10-2022.webp";
import Redmi105G from "../../../../../public/redmi/redmi10-5g.webp";
import Redmi10A from "../../../../../public/redmi/redmi10a.webp";
import Redmi10C from "../../../../../public/redmi/redmi10c.webp";
import Redmi12C from "../../../../../public/redmi/redmi12c.webp";
import Redmi9C from "../../../../../public/redmi/redmi9c.webp";
import RedmiA1 from "../../../../../public/redmi/redmiA1.webp";
import RedmiA2 from "../../../../../public/redmi/redmiA2.webp";

// import SiteGoodsType from "../../Fragments/SiteGoodsType/SiteGoodsType";
// import RedmiNote11 from "../../../assets/images/redmi/redmi-note11.webp";
// import RedmiNote11Pro from "../../../assets/images/redmi/redmi-note11pro.webp";
// import RedmiNote11Pro5G from "../../../assets/images/redmi/redmi-note11pro5G.webp";
// import Redmi102022 from "../../../assets/images/redmi/redmi10-2022.webp";
// import Redmi105G from "../../../assets/images/redmi/redmi10-5g.webp";
// import Redmi10A from "../../../assets/images/redmi/redmi10a.webp";
// import Redmi10C from "../../../assets/images/redmi/redmi10c.webp";
// import Redmi12C from "../../../assets/images/redmi/redmi12c.webp";
// import Redmi9C from "../../../assets/images/redmi/redmi9c.webp";
// import RedmiA1 from "../../../assets/images/redmi/redmiA1.webp";
// import RedmiA2 from "../../../assets/images/redmi/redmiA2.webp";

const SiteGoods = () => {
  return (
    <div>
      {/* <!-- First Grid Contain 3 Cards --> */}
      <div className="site-goods first-grid">
        {/* <!-- Redmi Note 11 --> */}
        <SiteGoodsType
          CardType="half"
          ProductName="goods-redmi-note11"
          urlProduct="#"
          Diskon="23"
          Title="Redmi Note 11"
          Subtitle="Snapdragon® 680 | 50MP AI Quad Camera"
          PriceAfter="1.999.000"
          PriceBefore="2.599.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={RedmiNote11}
        />

        {/* <!-- Redmi Note 11 Pro --> */}
        <SiteGoodsType
          CardType="quarter"
          ProductName="goods-redmi-note11pro"
          urlProduct="#"
          Diskon="9"
          Title="Redmi Note 11 Pro"
          Subtitle="Kamera pro-grade 108MP｜120Hz FHD+ Super AMOLED"
          PriceAfter="3.249.000"
          PriceBefore="3.599.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={RedmiNote11Pro}
        />

        {/* <!-- Redmi Note 11 pro 5G --> */}
        <SiteGoodsType
          CardType="quarter"
          ProductName="goods-redmi-note11pro5g"
          urlProduct="#"
          Diskon="4"
          Title="Redmi Note 11 Pro 5G"
          Subtitle="Snapdragon® 5G | 120Hz Super Amoled"
          PriceAfter="4.099.000"
          PriceBefore="4.299.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={RedmiNote11Pro5G}
        />
      </div>

      {/* <!-- Second Grid Contain 2 Cards --> */}
      <div className="site-goods second-grid">
        {/* <!-- Redmi 12 C --> */}
        <SiteGoodsType
          CardType="half"
          ProductName="goods-redmi12c"
          urlProduct="#"
          Diskon="17"
          Title="Redmi 12C"
          PriceAfter="1.149.000"
          PriceBefore="1.399.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={Redmi12C}
        />

        {/* <!-- Redmi A2 --> */}
        <SiteGoodsType
          CardType="half"
          ProductName="goods-redmiA2"
          urlProduct="#"
          Diskon="17"
          Title="Redmi A2"
          PriceAfter="949.000"
          PriceBefore="1.149.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={RedmiA2}
        />
      </div>

      {/* <!-- Third Grid Contain 2 Cards --> */}
      <div className="site-goods third-grid">
        {/* <!-- Redmi 10A --> */}
        <SiteGoodsType
          CardType="half"
          ProductName="goods-redmi10a"
          urlProduct="#"
          Diskon="40"
          Title="Redmi 10A"
          Subtitle="6’53” Dot Drop Display | Baterai 5000 mAH"
          PriceAfter="899.000"
          PriceBefore="1.499.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={Redmi10A}
        />

        {/* <!-- Redmi 10C --> */}
        <SiteGoodsType
          CardType="half"
          ProductName="goods-redmi10c"
          urlProduct="#"
          Diskon="28"
          Title="Redmi 10C"
          Subtitle="Snapdragon® 680 | Kamera 50 MP"
          PriceAfter="1.349.000"
          PriceBefore="1.899.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={Redmi10C}
        />
      </div>

      <div className="site-goods last-grid">
        {/* <!-- Redmi 10 5G --> */}
        <SiteGoodsType
          CardType="quarter"
          ProductName="goods-redmi10-5g"
          urlProduct="#"
          Diskon="42"
          Title="Redmi 10 5G"
          Subtitle="Dual 5G｜90 Hz Fitur AdaptiveSync"
          PriceAfter="1.599.000"
          PriceBefore="2.799.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={Redmi105G}
        />

        {/* <!-- Redmi 10 2022 --> */}
        <SiteGoodsType
          CardType="quarter"
          ProductName="goods-redmi10-2022"
          urlProduct="#"
          Diskon="31"
          Title="Redmi 10 2022"
          Subtitle="Quad kamera AI 50 MP | Layar FHD+ 90 Hz"
          PriceAfter="1.499.000"
          PriceBefore="2.199.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={Redmi102022}
        />

        {/* <!-- Redmi A1 --> */}
        <SiteGoodsType
          CardType="quarter"
          ProductName="goods-redmiA1"
          urlProduct="#"
          Diskon="17"
          Title="Redmi A1"
          Subtitle="Kamera ganda AI 8M｜Baterai 5000 mAh"
          PriceAfter="949.000"
          PriceBefore="1.149.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={RedmiA1}
        />

        {/* <!-- Redmi 9C --> */}
        <SiteGoodsType
          CardType="quarter"
          ProductName="goods-redmi9c"
          urlProduct="#"
          Diskon="15"
          Title="Redmi 9C"
          Subtitle="Triple Kamera AI | Layar Besar 6.53” HD+"
          PriceAfter="1.349.000"
          PriceBefore="1.599.000"
          urlBeliSekarang="#"
          urlLearnMore="#"
          ImageProduct={Redmi9C}
        />
      </div>
    </div>
  );
};

export default SiteGoods;
