import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Footer.module.css'

import bg from '../locales/bg'
import en from '../locales/en'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const router = useRouter()
  const { locale } = router
  const t = locale === 'bg' ? bg : en

    return ( 
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <address>
            <h3>{t.footerTitle1}</h3>
            <p>
              {t.addr1}<br />
              {t.addr2}<br />
              {t.addr3}
            </p>
          </address>
          <div className={styles.contacts}>
            <h3>{t.footerTitle2}</h3>
            <p><a href="tel:0888230529">0888/23 05 29</a></p>
            <p><a href="tel:052612551">052/ 61 25 51</a></p>
            <h3>e–mails:</h3>
            <p><a href="mailto:svetlin1045@abv.bg">svetlin1045@abv.bg</a></p>
            <p><a href="mailto:svetliq@gmail.com">svetliq@gmail.com</a></p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.socialIcons}>
          <Link href="https://bg.linkedin.com/in/svetlin-todorov-7246b486">
          <a target="_blank" rel="noopener">
          <Image src='/linkedinFooter.svg' width={30} height={30} alt="social-media-icon-linkedin"/>
          </a>
          </Link>
          <Link href="https://www.facebook.com/todorovlawyer/">
          <a target="_blank" rel="noopener">
          <Image src='/facebookFooter.svg' width={30} height={30} alt="social-media-icon-facebook"/>
          </a>
          </Link>
          <Link href="https://www.instagram.com/svetlin1045/">
          <a target="_blank" rel="noopener">
          <Image src='/instagramFooter.svg' width={30} height={30} alt="social-media-icon-instagram"/>
          </a>
          </Link>
          {/* <Link href="https://bg.linkedin.com/in/svetlin-todorov-7246b486"><a target="_blank"><i><FontAwesomeIcon size="lg" icon={faLinkedin}></FontAwesomeIcon></i></a></Link>
          <Link href="https://www.facebook.com/todorovlawyer/"><a target="_blank"><i><FontAwesomeIcon size="lg" icon={faFacebookSquare}></FontAwesomeIcon></i></a></Link>
          <Link href="https://www.instagram.com/svetlin1045/"><a target="_blank"><i><FontAwesomeIcon size="lg" icon={faInstagram}></FontAwesomeIcon></i></a></Link> */}
          </div>
          <h4>Copyright 2021<br/> <span>&#169;</span>{t.footerName}</h4>
          <h5><a href="mailto:iodesign@live.com" style={{textDecoration:'none', color:'white'}}>Web Development by Mighty Mint</a></h5>
        </div>
      </div>
      <div className={styles.footerLine}></div>
    </footer>
     );
}
 
export default Footer;