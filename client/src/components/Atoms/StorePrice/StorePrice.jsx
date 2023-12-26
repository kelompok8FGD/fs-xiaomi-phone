import React from 'react';

const Price = ({ value }) => {
  return (
    <p className="font-medium text-lg text-slate-700 pb-5 ml-5">
      <small className="text-sm">Rp&nbsp;</small>
      {value}
    </p>
  );
};

export default Price;