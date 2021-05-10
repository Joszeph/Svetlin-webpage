import ContactForm from "../../components/ContactForm"
import styles from './contacts.module.css'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../../components/Map'), {
    loading: () => "Loading...",
    ssr: false
  })
  
const Contacts = () => { 
    return ( 
        <main>
            <div className={styles.title}>
                <h1>Контакти</h1>
            </div>
            <div className={styles.container}>
            <section className={styles.left}>
                <Map/>  
            </section>
            <section className={styles.right}>
              <h2>Свържете се с мен:</h2>
              <ContactForm />
            </section>
          </div>
        </main>
    
     );
}
 
export default Contacts;