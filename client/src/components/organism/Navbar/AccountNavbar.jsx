import React, { useState } from 'react'
import { useTranslation } from "react-i18next";

const AccountNavbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
      setIsDropdownOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);
    };

      

    const { t, i18n } = useTranslation();
    const languages = [
      {
        code: "en",
        name: "English",
      },
      {
        code: "id",
        name: "Bahasa Indonesia",
      },
    ]
  return (
    <nav id="account-top-nav">
                <ul className="text-text">
                  <li>
                    <a href="">{t("useragreement")} </a>
                  </li>
                  <li>
                    <a href="">{t("privacypolicy")} </a>
                  </li>
                  <li>
                    <a href="">{t("help")} </a>
                  </li>
                  <li>
                    <span>|</span>
                  </li>
                  <li>
                  <div className="only-medium relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
           
        
      <button
        id="dropdownHoverButton"
        className="text-text text-[22px]  focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-2 py-1.5 text-center flex gap-2 items-center justify-center"
        type="button"
      >  {t("language")} 
      <svg
        className={`w-2.5 h-2.5 transition-transform transform ${
          isDropdownOpen ? 'rotate-180' : ''
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
       
      </button>
 <div className="flex justify-center items-center gap-4">
    
      </div>
      <div
        className={`${
          isDropdownOpen ? 'block' : 'hidden'
        } z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-max px-4  transition-transform transform origin-top`}
      >
             <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col justify-center items-center " aria-labelledby="dropdownHoverButton">
             
            {languages.map(language => (
              <button className="text-black hover:bg-gray-100 py-2 hover:text-accent block" onClick={() => i18n.changeLanguage(language.code)} key={language.code}>{language.name}</button>
            )

            )}
          
           </ul>
     
       



  
      </div>
    </div>
                  </li>
                </ul>
              </nav>
  )
}

export default AccountNavbar