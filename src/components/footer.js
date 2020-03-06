import React from "react"
import { Link } from 'gatsby'

import footerStyles from './footer.module.scss'
import ChevronDown from './chevronDown'

const Footer = () => {
  return (
    <div className={footerStyles.box}>
      <footer className={footerStyles.footer}>
        <div>
          <ul className={footerStyles.footerList}>
            <li>
              <Link className={footerStyles.footerItem} to="/">REVIEWS</Link>
            </li>
            <li>
              <Link className={footerStyles.footerItem} to="/">CONTACT</Link>
            </li>
            <li>
              <Link className={footerStyles.footerItem} to="/">ACCOUNT</Link>
            </li>
          </ul>
        </div>
        <div className={footerStyles.lang}>
          <p><strong>LANGUAGE:</strong> EN € <ChevronDown height={6} width={6} /></p>
        </div>
        <div className={footerStyles.details}>
          <div className={footerStyles.info}>
            <p><strong>Call</strong> 020-2050738</p>
            <p>Mon - Thu, 9:00 - 19:00</p>
            <p>Fri, 9:00 - 18:00</p>
          </div>
          <div className={footerStyles.info}>
            <p ><strong>mail</strong> onshallo@aceandtate.nl</p>
            <p><strong>whatsapp</strong> +31 6 33236677</p>
          </div>
        </div>
      </footer>
    </div>
    )
}
export default Footer
