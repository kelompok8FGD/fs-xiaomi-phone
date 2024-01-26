import React from "react";

function TotalPrice(props) {
  const { TotalPrice } = props;
  const formattedTotalPrice = TotalPrice.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
  return (
    <div>
      <p>Rp {formattedTotalPrice}</p>
    </div>
  );
}

export default TotalPrice;
