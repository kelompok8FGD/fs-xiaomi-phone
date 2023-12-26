import React from 'react'
import SiteNavbar from '../Navbar/SiteNavbar'

const Header = () => {
  return (
    <header
    id="top-site-header"
    className=" bg-contrast text-text px-5 lg:px-6 sticky h-[48px] xl:h-[56px] "
    role="banner"
  >
    <SiteNavbar/>
  </header>
  )
}

export default Header