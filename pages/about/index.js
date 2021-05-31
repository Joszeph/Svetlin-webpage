import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from './about.module.css'

import "aos/dist/aos.css";

import bg from '../../locales/bg'
import en from '../../locales/en'

import{NextSeo} from 'next-seo'

const AboutMe = () => {

    const SEO = {
        title: "Адвокат Светлин Тодоров | За Мен",
        description: "Адвокат Светлин Тодоров | Адвокатска Кантора Варна | За Мен",
    
        openGraph:{
            title: "Адвокат Светлин Тодоров | За Мен",
            description: "Адвокат Светлин Тодоров | Адвокатска Кантора Варна | За Мен",
        }
    }

const router = useRouter()
const { locale } = router
const t = locale === 'bg' ? bg : en

    return ( 
        <main>
            <NextSeo {...SEO} />
            <div className={styles.container}>
                <section className={styles.titles} data-aos="fade-right">
                    <h1 className={styles.h1}>{t.aboutMeH1}</h1>
                    <h2>{t.aboutMeH2}</h2>
                    <p>{t.aboutMeP}</p>
                    {/* <ul>
                        <li>{t.aboutMeLi1}</li>
                        <li>{t.aboutMeLi2}</li>
                    </ul> */}
                </section>
                
                <section className={styles.aboutMe}>
                    <h3 className={styles.h3} data-aos="fade-right">{t.aboutMeH3}</h3>
                    <div className={styles.wrapper}>
                        <div className={styles.aboutText} data-aos="zoom-in">
                        <p>{t.aboutMeText}</p>
                        </div>
                    <Image src="/about_picture.webp" alt="Svetlin-Todorov" width={700} height={491} data-aos="fade-up"/>
                    </div>
                </section>
            </div>
        </main>
     );
}
 
export default AboutMe;