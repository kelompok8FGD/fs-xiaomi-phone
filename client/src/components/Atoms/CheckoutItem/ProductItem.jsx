import React from "react";

export default function ProductItem(props) {
  const { Tittle, Price, Image, Qty, ClassName } = props;
  const formattedPrice = Price.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  return (
    <div className="grid grid-cols-4">
      <div className="max-w-[100px]">
        <img src={Image} alt="" />
      </div>
      <div className={`col-span-2  ${ClassName}`}>
        <p>{Tittle}</p>
        <p>Jumlah: {Qty}</p>
      </div>
      <div>
        <p>Rp. {formattedPrice}</p>
      </div>
    </div>
  );
}
