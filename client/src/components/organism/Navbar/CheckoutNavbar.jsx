import React from "react";

const CheckoutNavbar = ({ activeStep }) => {
  return (
    <div id="checkout-cart-header" className="hidden h-[157px] w-full max-w-full md:flex flex-col items-center bg-white mt-1">
      <nav id="nav-checkout" className="w-full max-w-full flex flex-col md:flex-row flex-wrap items-start justify-center md:items-center gap-5 md:gap-0 px-8 md:px-0 bg-white h-full mt-1">
        <div
          id="step1"
          className="flex sm:pl-[35px] relative items-center text-[#d0d0d0] text-[18px] border-[#d0d0d0]"
        >
          <span
            id="step1_number"
            className={`inline-flex items-center justify-center w-[30px] h-[30px] border-2 border-solid rounded-[12px] mr-[8px] ${
              activeStep === 1 ||  activeStep === 2  ? "bg-[#ff6700] text-[#fff] border-[#ff6700]" : "border-[#d0d0d0]" }`}
          >
            1
          </span>
          <span id="step1_text" className={activeStep === 1 || activeStep === 2 ? "text-[#ff6700]" : ""}>
            Keranjang
          </span>
        </div>
        <div
          id="step2"
          className={`flex relative items-center text-[#d0d0d0] text-[18px] before:block before:h-[1px] before:mx-4 before:w-[10vw] ${
            activeStep === 2 ? "before:bg-[#ff6700]" : "before:bg-[#d0d0d0]"}`}>
          <span
            id="step2_number"
            className={`inline-flex items-center justify-center w-[30px] h-[30px] border-2 border-solid rounded-[12px] mr-[8px] ${
              activeStep === 2 ? "bg-[#ff6700] text-[#fff] border-[#ff6700]" : "border-[#d0d0d0]"}`}
          >
            2
          </span>
          <span id="step2_text" className={activeStep === 2 ? "text-[#ff6700]" : ""}>
            Tempatkan pesanan
          </span>
        </div>
        <div
          id="step3"
          className={`flex relative items-center text-[#d0d0d0] text-[18px] before:block before:h-[1px] before:mx-4 before:w-[10vw] ${
            activeStep === 3 ? "before:bg-[#ff6700]" : "before:bg-[#d0d0d0]"}`}>
         <span
            id="step3_number"
            className={`inline-flex items-center justify-center w-[30px] h-[30px] border-2 border-solid rounded-[12px] mr-[8px] ${
              activeStep === 3 ? "bg-[#ff6700] text-[#fff] border-[#ff6700]" : "border-[#d0d0d0]"}`}
          >
            3
          </span>
          <span id="step3_text" className={activeStep === 3 ? "text-[#ff6700]" : ""}>
            Ulasan
          </span>
        </div>
      </nav>
    </div>
  );
};

export default CheckoutNavbar;
