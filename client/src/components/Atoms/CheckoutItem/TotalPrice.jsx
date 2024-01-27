import React from "react";

function TotalPrice(props) {
  const { TotalPrice, className } = props;
  const formattedTotalPrice = TotalPrice.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
  return (
    <div className={className}>
      <p>Rp {formattedTotalPrice}</p>
    </div>
  );
}

export default TotalPrice;
