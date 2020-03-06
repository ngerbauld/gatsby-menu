import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../../assets/images/logo.png'
import Cart from '../../assets/images/cart.png'
import Bars from './bars'
import Times from './times'
import Accordion from './accordion'
import MutipleSlidesPerView from '../components/swiper'

import headerStyles from './header.module.scss'

const Header = () => {
  const [active, setActive] = useState(false)
  const toogleActive = () => {
    setActive(!active)
  }
  console.log("active status:", active)

  return (
    <div>
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItemStatus}>
            <div onClick={toogleActive}>
             { active ? <Times height={25} width={50} /> : <Bars height={25} width={50}/> }
            </div>
            <Link to="/"> <img className={headerStyles.logo} src={Logo} /></Link>
          </li>
          <li>
           <Link to="/sports"> <img className={headerStyles.cart} src={Cart} /> </Link>
          </li>
        </ul>
      </nav>
    </header>
    { active ? <MutipleSlidesPerView onClick={toogleActive} /> : "" }
    { active ? <Accordion /> : "" }
    </div>
    )
}

export default Header
