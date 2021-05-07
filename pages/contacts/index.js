import ContactForm from "../../components/ContactForm"
import Map from "../../components/Map"
import styles from './contacts.module.css'


const Contacts = () => {
    
    return ( 
        <main>
            <div className={styles.title}>
                <h1>Контакти</h1>
            </div>
            <div className={styles.container}>
            <section className={styles.left}>
                <div>
                    <Map />
                </div>
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