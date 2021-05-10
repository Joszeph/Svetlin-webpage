import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Navbar from './Nav/NavBar'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return ( 
        <header>
      <div className={styles.topItems}>
        <div className={styles.contacts}>
          <a href="0888230529">тел.: 0888/23 05 29</a> | <a href="svetlin1045@abv.bg">e-mail: svetlin1045@abv.bg</a>
        </div>
        <div className={styles.socialIcons}>
          <Link href="/"><a><i><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon></i></a></Link>
          <Link href="/"><a><i><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i></a></Link>
          <Link href="/"><a><i><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></i></a></Link>
        </div>
      </div>
      <nav className={styles.navBar}>
        <Link href="/"><a><Image src="/logo.png" alt="" width={228} height={122}/></a></Link>
        <Navbar />
      </nav>
    </header>
     );
}
 
export default Header;