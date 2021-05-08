import{useState,useEffect} from 'react'
import ContactForm from "../../components/ContactForm"
import styles from './contacts.module.css'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../../components/Map'), {
    loading: () => "Loading...",
    ssr: false
  })

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/27.906136997158796%2C43.20269505233881.json?access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrN2Y1Nmp4YjB3aG4zZ253YnJoY21kbzkifQ.JM5ZeqwEEm-Tonrk5wOOMw&cachebuster=1620414456346&autocomplete=true&types=address%2Ccountry`;
  
const Contacts = () => {

    const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url).then((response) =>
        response.text()).then((res) => JSON.parse(res))
      .then((json) => {
        setLocations(json.features);
      }).catch((err) => console.log({ err }));
    };
    fetchLocations();
  }, []);
    
    return ( 
        <main>
            <div className={styles.title}>
                <h1>Контакти</h1>
            </div>
            <div className={styles.container}>
            <section className={styles.left}>
                  <h2>Свържете се с мен:</h2>
                  <ContactForm />
              </section>
              <section className={styles.right}>
              <div className={styles.mapContainer}>
            <Map locations={locations}/>
          </div>
              </section>
          </div>
        </main>
    
     );
}
 
export default Contacts;