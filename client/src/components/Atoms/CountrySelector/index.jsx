import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(''); 
  const { t } = useTranslation();
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  
  };

  const countryOptions = [
    `${t("country")}`,
    'Indonesia',
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Spain',
    
  ];

  return (
    <select className='bg-inputBackground text-text  py-[10px] px-[20px] bg-gray-100 w-full h-[60px] ' value={selectedCountry} onChange={handleCountryChange}>
      {countryOptions.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountrySelector;