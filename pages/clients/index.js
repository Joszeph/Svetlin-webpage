import Image from 'next/image'
import Link from 'next/link'
import styles from './clients.module.css'

const Clients = () => {
    return ( 
        <main className={styles.container}>
            <div className={styles.headers}>
            <h1>Клиенти</h1>
            <p>Клиенти на адв. Светлин Тодоров са били или понастоящем са реномирани търговски дружества в производствения, сферата на услугите и строителния бранш от Варна и региона, сред които: имаш ги като търговски марки. </p>
            <p>За защита на правата и законните им интереси на адв. Светлин Тодоров са се доверявали и училища като IV - та Eзикова Гимназия - Варна, ОУ "Св. Св. Климент и Методий" - Варна и ОУ "Христо Ботев" - Община Суворово.</p>
            </div>
            <section className={styles.clientList}>
                <div>
                    <div> <Link href="https://esseterre.bg"><a target="_blank"><Image src="/clients-logos/Esseterre-logo.png" alt="Esseterre" width={200} height={100}/></a></Link></div>
                    <div>Text</div>
                </div>
                <div>
                    <div><Link href="https://izolacii.bg/"><a target="_blank"><Image src="/clients-logos/izolacii_logo.png" alt="Изолации ЕООД" width={200} height={100}/></a></Link></div>
                    <div>Text</div>
                </div>
                <div>
                    <div> <Link href="https://migmarket.bg/"><a target="_blank"><Image src="/clients-logos/logo-MIG-MARKET.png" alt="MIG MARKET" width={200} height={100}/></a></Link></div>
                    <div>Text</div>
                </div>
                <div>
                    <div> <Link href="http://www.milaflor.bg/"><a target="_blank"><Image src="/clients-logos/logo-suprema.png" alt="Suprema" width={200} height={100}/></a></Link></div>
                    <div>Text</div>
                </div>
                <div>
                    <div> <Link href="http://stf-bg.com/"><a target="_blank"><Image src="/clients-logos/tehnicheski-flot-logo.png" alt="Строителен итехнически флот АД" width={200} height={90}/></a></Link></div>
                    <div>Text</div>
                </div>
            </section>
        </main>
     );
}
 
export default Clients;