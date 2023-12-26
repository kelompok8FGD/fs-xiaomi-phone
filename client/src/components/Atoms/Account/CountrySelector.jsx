import React, { useState } from 'react';

const YourComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState(''); 

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  
  };

  const countryOptions = [
    'Select a country',
    'United States',
    'Indonesia',
    'United Kingdom',
    'Germany',
    'France',
    
  ];

  return (
    <select className='bg-inputBackground text-[#999]   py-[10px] px-[20px] w-full h-[60px] ' value={selectedCountry} onChange={handleCountryChange}>
      {countryOptions.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default YourComponent;