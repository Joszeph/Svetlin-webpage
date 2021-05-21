import{useRouter} from 'next/router'
import Image from 'next/image'
import styles from './activities.module.css'

import bg from '../../locales/bg'
import en from '../../locales/en'

import "aos/dist/aos.css"

import{NextSeo} from 'next-seo'

const Activities = () => {

    const SEO = {
        title: "Адвокат Светлин Тодоров | Сфери На Дейност",
        description: "Адвокат Светлин Тодоров | Адвокатска Кантора Варна | Сфери На Дейност",
    
        openGraph:{
            title: "Адвокат Светлин Тодоров | Сфери На Дейност",
            description: "Адвокат Светлин Тодоров | Адвокатска Кантора Варна | Сфери На Дейност",
        }
    }

    const router = useRouter()
    const { locale } = router
    const t = locale === 'bg' ? bg : en

    return ( 
        <main>
            <NextSeo {...SEO} />
            <section className={styles.activities}>
                <h1 className={styles.h1} data-aos="fade-right">{t.activH1Title}</h1>
                <Image src="/activities_image.jpeg" alt="" width={1200} height={300} />
            </section>
            <section className={styles.texts}>
                <div data-aos="zoom-in-up">
                <h2>{t.actH1a}</h2>
                    <ul>
                        <li>{t.actUlH1a1}</li>
                        <li>{t.actUlH1a2}</li>
                        <li>{t.actUlH1a3}</li>
                        <li>{t.actUlH1a4}</li>
                        <li>{t.actUlH1a5}</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>{t.actH1b}</h2>
                    <ul>
                        <li>{t.actUlb1}</li>
                        <li>{t.actUlb2}</li>
                        <li>{t.actUlb3}</li>
                        <li>{t.actUlb4}</li>
                        <li>{t.actUlb5}</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                <h2>{t.actH1c}</h2>
                    <ul>
                        <li>{t.actUlc1}</li>
                        <li>{t.actUlc2}</li>
                        <li>{t.actUlc3}</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>{t.actH1d}</h2>
                    <ul>
                        <li>{t.actUld1}</li>
                        <li>{t.actUld2}</li>
                        <li>{t.actUld3}</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>{t.actH1e}</h2>
                </div>
                <div data-aos="zoom-in-up">
                <h2>{t.actH1f}</h2>
                </div>
                <div data-aos="zoom-in-up">
                <h2>{t.actH1g}</h2>
                </div>
                <div data-aos="zoom-in-up">
                <h2>{t.actH1h}</h2>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>{t.actH1i}</h2>
                    <ul>
                        <li>{t.actUli1}</li>
                        <li>{t.actUli2}</li>
                        <li>{t.actUli3}</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                <h2>{t.actH1j}</h2>
                <ul>
                    <li>{t.actUlj1}</li>
                 </ul>
            </div>
            <div data-aos="zoom-in-up">
                <h2>{t.actH1k}</h2>
                <ul>
                        <li>{t.actUlk1}</li>
                        <li>{t.actUlk2}</li>
                    </ul>
            </div>
                <div data-aos="zoom-in-up">
                    <h2>{t.actH1l}</h2>
                    <ul>
                        <li>{t.actUll1}</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                <h2>{t.actH1m}</h2>
                    <ul>
                        <li>{t.actUlm1}</li>
                        <li>{t.actUlm2}</li>
                        <li>{t.actUlm3}</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                <h2>{t.actH1n}</h2>
                <ul>
                        <li>{t.actUln1}</li>
                        <li>{t.actUln2}</li>
                        <li>{t.actUln3}</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>{t.actH1r}</h2>
                    <ul>
                        <li>{t.actUlr1}</li>
                        <li>{t.actUlr2}</li>
                        <li>{t.actUlr3}</li>
                        <li>{t.actUlr4}</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>{t.actH1s}</h2>
                </div>
            </section>
        </main>
     );
}
 
export default Activities;