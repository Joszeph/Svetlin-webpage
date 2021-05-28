import { useRouter } from 'next/router'
import ContactForm from "../../components/ContactForm"
import styles from './contacts.module.css'

import dynamic from 'next/dynamic'

import{NextSeo} from 'next-seo'

import "aos/dist/aos.css"

import bg from '../../locales/bg'
import en from '../../locales/en'

const Map = dynamic(() => import('../../components/Map'), {
    loading: () => "Loading...",
    ssr: false
  })
  
const Contacts = () => { 

  const SEO = {
    title: "Адвокат Светлин Тодоров | Контакти",
    description: "Адвокат Светлин Тодоров | Адвокатска Кантора Варна | Контакти",

    openGraph:{
        title: "Адвокат Светлин Тодоров | Контакти",
        description: "Адвокат Светлин Тодоров | Адвокатска Кантора Варна | Контакти",
    }
}

  const router = useRouter()
  const { locale } = router
  const t = locale === 'bg' ? bg : en

    return ( 
        <main>
          <NextSeo {...SEO} />
            <div className={styles.title} data-aos="fade-right">
                <h1>{t.contactsH1}</h1>
            </div>
            <div className={styles.container}>
            <section className={styles.left}>
                <Map/>  
            </section>
            <section className={styles.right}>
              <h2>{t.contactsH2}</h2>
              <ContactForm />
            </section>
          </div>
        </main>
    
     );
}
 
export default Contacts;