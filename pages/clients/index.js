import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from './clients.module.css'

import "aos/dist/aos.css"

import{NextSeo} from 'next-seo'

import bg from '../../locales/bg'
import en from '../../locales/en'

const Clients = () => {

const SEO = {
    title: "Адвокат Светлин Тодоров | Клиенти",
    description: "Адвокат Светлин Тодоров | Адвокатска Кантора Варна | Клиенти",

    openGraph:{
        title: "Адвокат Светлин Тодоров | Клиенти",
        description: "Адвокат Светлин Тодоров | Адвокатска Кантора Варна | Клиенти",
    }
}

const router = useRouter()
const { locale } = router
const t = locale === 'bg' ? bg : en

    return ( 
        <main className={styles.container}>
            <NextSeo {...SEO} />
            <div className={styles.headers} data-aos="fade-right">
            <h1>{t.clientH1}</h1>
            <p>{t.clientText1}</p>
            <p>{t.clientText2}</p>
            </div>
            <section className={styles.clientList}>
                <div className={styles.divClients1} data-aos="fade-up">
                    <div><Link href="https://esseterre.bg"><a target="_blank"><Image src="/clients-logos/Esseterre-logo.png" alt="Esseterre" width={200} height={100}/></a></Link></div>
                    <div className={styles.clinetText}>
                        <h2>{t.divClients1h1}</h2>
                        <p>{t.divClientsP1}</p>
                    </div>
                </div>
                <div className={styles.divClients2} data-aos="fade-up">
                    <div><Link href="https://izolacii.bg/"><a target="_blank"><Image src="/clients-logos/izolacii_logo.png" alt="Изолации ЕООД" width={200} height={100}/></a></Link></div>
                    <div className={styles.clinetText}>
                    <h2>{t.divClients2h1}</h2>
                        <p>{t.divClientsP2}
                        </p>
                    </div>
                </div>
                <div className={styles.divClients3} data-aos="fade-up">
                    <div><Link href="https://migmarket.bg/"><a target="_blank"><Image src="/clients-logos/logo-MIG-MARKET.png" alt="MIG MARKET" width={200} height={100}/></a></Link></div>
                    <div className={styles.clinetText}>
                    <h2>{t.divClients3h1}</h2>
                        <p>{t.divClientsP3}</p>
                    </div>
                </div>
                <div className={styles.divClients4} data-aos="fade-up">
                    <div><Link href="http://www.milaflor.bg/"><a target="_blank"><Image src="/clients-logos/logo-suprema.png" alt="Suprema" width={200} height={100}/></a></Link></div>
                    <div className={styles.clinetText}>
                    <h2> {t.divClients4h1}</h2>
                        <p>{t.divClientsP4}</p>
                    </div>
                </div>
                <div className={styles.divClients5} data-aos="fade-up">
                    <div><Link href="http://stf-bg.com/"><a target="_blank"><Image src="/clients-logos/tehnicheski-flot-logo.png" alt="Строителен итехнически флот АД" width={200} height={90}/></a></Link></div>
                    <div className={styles.clinetText}>
                    <h2> {t.divClients5h1}</h2>
                        <p>{t.divClientsP5}</p>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default Clients;