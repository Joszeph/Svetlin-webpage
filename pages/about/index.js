import Image from 'next/image'
import styles from './about.module.css'

const AboutMe = () => {
    return ( 
        <main>
            <div className={styles.container}>
                <section className={styles.titles}>
                    <h1 className={styles.h1}>За мен</h1>
                    <h2>В практиката си, адвокат Светлин Тодоров се ръководи от следните принципи:</h2>
                    <ul>
                        <li>защита правата и законните интереси на клиента</li>
                        <li>почтеност, упорита работа и внимание към детайла</li>
                    </ul>
                </section>
                
                <section className={styles.aboutMe}>
                    <h3 className={styles.h3}>БИОГРАФИЯ</h3>
                    <div className={styles.wrapper}>
                        <div className={styles.aboutText}>
                        <p>Адвокат Светлин Тодоров е роден в гр. Варна през 1984 г. През 2003 г. завършва „Първа Езикова Гимназия” – Варна, профил – английски език и английска литература. През декември 2008 г. се дипломира по специалността „Право” в юридическия фактултет на Софийския Университет „Св. Климент Охридски”. Правоспособен юрист е от есента на 2009 г. През 2011 г. полага успешно изпита за адвокати, организиран от Висшия адвокатски съвет. От януари 2012 г. е член на Адвокатска колегия – гр. Варна и практикува, като адвокат на територията на област Варна и страната. Владее английски език – писмено и говоримо.</p>
                        </div>
                    <Image src="/about_picture.png" alt="" width={700} height={491}/>
                    </div>
                </section>
            </div>
        </main>
     );
}
 
export default AboutMe;