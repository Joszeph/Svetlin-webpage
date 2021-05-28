import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'
import Navbar from './Nav/NavBar'
import LangSwitch from '../components/LangSwitch'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";


import bg from '../locales/bg'
import en from '../locales/en'

const Header = () => {

  const router = useRouter()
  const { locale } = router
  const t = locale === 'bg' ? bg : en

    return ( 
        <header>
      <div className={styles.topItems}>
        <div className={styles.contacts}>
          <LangSwitch />
         <div> <a href="tel:0888230529">{t.tel}.: 0888/23 05 29</a> | <a href="mailto:svetlin1045@abv.bg">e-mail: svetlin1045@abv.bg</a></div>
        </div>
        <div className="socialIcons">
          <Link href="https://bg.linkedin.com/in/svetlin-todorov-7246b486"><a target="_blank"><i><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i></a></Link>
          <Link href="https://www.facebook.com/todorovlawyer/"><a target="_blank"><i><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></i></a></Link>
          <Link href="https://www.instagram.com/svetlin1045/"><a target="_blank"><i><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></i></a></Link>
        </div>
      </div>
      <nav className={styles.navBar}>
        <Link href="/"><a><Image src={t.logo} alt="" width={228} height={122}/></a></Link>
        <Navbar />
      </nav>
      <style jsx>{`
        .socialIcons{
          // font-size: 2em;
          margin-top:10px;
          text-align: end;
        }
      
        .socialIcons a{
          text-decoration: none;
          color:#333333;
          margin-left: 5px;
        }
        
      `}</style>
    </header>
     );
}
 
export default Header;