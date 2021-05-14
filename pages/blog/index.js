import Card from '../../components/Card.jsx'
import styles from './blog.module.css'

import "aos/dist/aos.css";

const Blog = () => {
    return ( 
        <main className={styles.container}>
          <div className={styles.title} data-aos="fade-right">
            <h1>Правен блог</h1>
          </div>
          <section>
            <div data-aos="zoom-in-up">
            <Card />
            </div>
          </section>
        </main>
     );
}
 
export default Blog;