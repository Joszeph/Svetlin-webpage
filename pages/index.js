import {useEffect} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import bg from '../locales/bg'
import en from '../locales/en'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  const router = useRouter()
  const { locale } = router
  const t = locale === 'bg' ? bg : en

  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);

  return (
    <main>
    <section className={styles.mainHome}>
      <Image src="/main_image.webp" alt="main-Image-Todorov" width={1920} height={389} />
      <div className={styles.mainInfo}>
        <div className={styles.info} data-aos="fade-right">
          <h1 className={styles.h1}>
            {t.title1}<br />
            {t.title3}
          </h1>
          <h2 className={styles.h2}>
          {t.title4}<br />
          {t.title5}<br />
          {t.title6}
          </h2>
        </div>
        <div className={styles.btn} data-aos="fade-up">
        <button><Link href="/activities" alt=""><a>{t.buttonPractice}</a></Link></button>
        <button><Link href="/contacts" alt=""><a>{t.buttonContacts}</a></Link></button>
        </div>
      </div>
    </section>
    <section className={styles.quate}>
      <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">{t.quate}</h2>
    </section>
    <section className={styles.cards}>
      <div className={styles.card} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <Image src="/box1.webp" alt="box-Image-Todorov" width={300} height={151}/>
        <div className={styles.container}>
          <p>
            {t.card1}
          </p>
        </div>
      </div>
      <div className={styles.card} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="50">
        <Image src="/box2.webp" alt="box-Image-Todorov2" width={300} height={151}/>
        <div className={styles.container}>
          <p>
          {t.card2}
          </p>
        </div>
      </div>
      <div className={styles.card} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
        <Image src="/box3.webp" alt="box-Image-Todorov3" width={300} height={151}/>
        <div className={styles.container}>
          <p>
          {t.card3}
          </p>
        </div>
      </div>
    </section>
    <section className={styles.activities}>
      <div className={styles.titleBar}>
        <div className={styles.title} data-aos="fade-right">
          <h2>{t.areasOfactivityTitle}</h2>
        </div>
        <div className={styles.redEl}></div>
      </div>
      <div className={styles.activitiesList}>
        <div className={styles.leftList}>
          <h3>{t.activitiesTitle1}</h3>
          <h3>{t.activitiesTitle2}</h3>
          <h3>{t.activitiesTitle3}</h3>
          <h3>{t.activitiesTitle4}</h3>
          <h3>{t.activitiesTitle5}</h3>
        </div>
        <div className={styles.rightList}>
          <h3>{t.activitiesTitle6}</h3>
          <h3>{t.activitiesTitle7}</h3>
          <h3>{t.activitiesTitle8}</h3>
          <h3>{t.activitiesTitle9}</h3>
          <h3>{t.activitiesTitle10}</h3>
        </div>
      </div>
      <div className={styles.btnAct}>
      <Link href="/activities" alt=""><a><button>{t.moreBtn}</button></a></Link>
       </div>
    </section>
    <section className={styles.helpInfo}>
      <div className={styles.allContent}>
        <div className={styles.titlesInfoSection} >
          <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">{t.usefulInfo}</h2>
        </div>
        <div className={styles.contentParSection}>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
            <h3 style={{ textAlign: 'center', margin:'0px 0 20px 0' }}>{t.useInfoTitle1}</h3>
            <br />
            <br />
            <p>
              {t.useInfoP1}
            </p>
            <button className={styles.btnInfoPar}>
              {locale == 'bg' ?
                <Link href="/post/imam-praven-problem-imam-li-nuzhda-ot-advokat-i-kak-da-si-izbera-takv"><a>{t.articleLink1}</a></Link>
                :
                <Link href="/en/post/i-have-been-sentenced-and-imprisoned-in-bulgaria-how-can-i-apply-for-a-prison-transfer-to-the-uk"><a>{t.articleLink1}</a></Link>  
            }
              </button>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="50">
          <h3 style={{ textAlign: 'center', margin:'0px 0 20px 0' }}>{t.useInfoTitle2}</h3>
          <br />
          <p>
          {t.useInfoP2}
            </p>
            <button className={styles.btnInfoPar}>
            {locale == 'bg' ?
            <Link href="/post/predstoi-mi-da-zakupya-zhilishe-imam-li-nuzhda-ot-advokat-i-kak-da-izbera-takv"><a>{t.articleLink2}</a></Link>
            :
            <Link href="/en/post/how-long-someone-can-be-kept-in-detention-without-charges-being-pressed-against-him-her-i-have"><a>{t.articleLink2}</a></Link>
            }
            </button>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 style={{ textAlign: 'center', margin:'0px 0 20px 0' }}>{t.useInfoTitle3}</h3>
            <p>
            {t.useInfoP3}
            </p>
            <button className={styles.btnInfoPar}>
            {locale == 'bg' ?
            <Link href="/post/sho-e-to-zhilishen-kompleks-ot-zatvoren-tip-i-ima-li-pochva-u-nas"><a>{t.articleLink3}</a></Link>
            :
            <Link href="/en/post/terms-and-conditions-under-which-a-foreigner-who-is-not-a-citizen-of-a-country-member-of-eu-may"><a>{t.articleLink3}</a></Link>
          }
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.clients}>
      <div className={styles.titleBar}>
        <div className={styles.title} data-aos="fade-right">
          <h2>{t.clientsTitle}</h2>
        </div>
        <div className={styles.redEl}></div>
      </div>
      <div className={styles.clientslogos}>
          <div>
            <Link href="https://esseterre.bg"><a target="_blank" rel="noopener"><Image src="/clients-logos/Esseterre-logo.png" alt="Esseterre" width={200} height={100}/></a></Link>
          </div>
          <div>
            <Link href="https://izolacii.bg/"><a target="_blank" rel="noopener"><Image src="/clients-logos/izolacii_logo.png" alt="Изолации ЕООД" width={200} height={100}/></a></Link>
          </div>
          <div>
            <Link href="https://migmarket.bg/"><a target="_blank" rel="noopener"><Image src="/clients-logos/logo-MIG-MARKET.png" alt="MIG MARKET" width={200} height={100}/></a></Link>
          </div>
          <div>
            <Link href="http://www.milaflor.bg/"><a target="_blank" rel="noopener"><Image src="/clients-logos/logo-suprema.png" alt="Suprema" width={200} height={100}/></a></Link>
          </div>
          <div>
            <Link href="http://stf-bg.com/"><a target="_blank" rel="noopener"><Image src="/clients-logos/tehnicheski-flot-logo.png" alt="Строителен итехнически флот АД" width={200} height={90}/></a></Link>
          </div> 
      </div>
    </section>
  </main>
  )
}
