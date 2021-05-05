import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
    <section className={styles.mainHome}>
      <Image src="/main_image.png" alt="" width={1920} height={389}/>
      <div className={styles.mainInfo}>
        <div className={styles.info}>
          <h1 className={styles.h1}>
            Доверие<br />
            Качество<br />
            Професионализъм
          </h1>
          <h2 className={styles.h2}>
            Принципите от които се ръководя в<br />
            практиката ми като адвокат са:<br />
            почтеност и защита интересите на клиента
          </h2>
        </div>
        <div className={styles.btn}>
        <button><Link href="/activities" alt=""><a>дейности</a></Link></button>
        <button><Link href="/contacts" alt=""><a>контакти</a></Link></button>
        </div>
      </div>
    </section>
    <section className={styles.quate}>
      <h2>“Fiat justitia, et pereat mundus“</h2>
    </section>
    <section className={styles.cards}>
      <div className={styles.card}>
        <Image src="/box1.png" alt="" width={300} height={151}/>
        <div className={styles.container}>
          <p>
            Осъществяване на процесуално представителство по граждански,
            наказателни и административни дела. Представителство пред
            арбитражни съдълища и други особени юрисдикции.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <Image src="/box2.png" alt="" width={300} height={151}/>
        <div className={styles.container}>
          <p>
            Осъществяване на преговори и медиация между страни по правен спор.
            Предоставяне на устни и писмени правни консултации.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <Image src="/box3.png" alt="" width={300} height={151}/>
        <div className={styles.container}>
          <p>
            Изготвяне на договори, правни становища, нотариални покани; искови
            молби; касационни жалби; жалби срещу административни актове и
            наказателни постановления; проекти за устав; учредителен акт и/или
            дружествен договор на юридически лица и търговски дружества и др.
          </p>
        </div>
      </div>
    </section>
    <section className={styles.activities}>
      <div className={styles.titleBar}>
        <div className={styles.title}>
          <h2>СФЕРИ НА ДЕЙНОСТ</h2>
        </div>
        <div className={styles.redEl}></div>
      </div>
      <div className={styles.activitiesList}>
        <div className={styles.leftList}>
          <h3>Облигационно право</h3>
          <h3>Семейно право</h3>
          <h3>Вещно право</h3>
          <h3>Търговско право</h3>
          <h3>Медицинско и био право</h3>
        </div>
        <div className={styles.rightList}>
          <h3>Лекарска грешка</h3>
          <h3>Трудово право и трудови злополуки</h3>
          <h3>Пътно транспортни произшествия</h3>
          <h3>Застрахователно право</h3>
          <h3>Трудово право</h3>
        </div>
      </div>
      <div className={styles.btnAct}>
      <Link href="/activities" alt=""><a><button>още дейности</button></a></Link>
       </div>
    </section>
    <section className={styles.helpInfo}>
      <div className={styles.allContent}>
        <div className={styles.titlesInfoSection}>
          <h2>ПОЛЕЗНА ИНФОРМАЦИЯ</h2>
          <h3>
            Тълкувателна дейност и задължителна съдебна практика на Върховния
            касационен съд и Върховния административен съд на Република
            България.
          </h3>
        </div>
        <div className={styles.contentParSection}>
          <div>
            <p>
              Относно правното значение на изрична клауза в договора... При
              сключването на договор за прехвърляне на собственост срещу
              минали (вече престирани) грижи и издръжка и задължение за
              гледане и издръжка след сключването на договора (за в бъдеще),
              част от грижите и издръжката са дадени в миналото. Ако
              прехвърлителят обаче е прехвърлил целия имот, без да определи,
              каква част от имота прехвърля за минали и каква част за бъдещи
              грижи и издръжка, договорът остава алеаторен. Затова и
              неизпълнението на задълженията...
            </p>
            <button className={styles.btnInfoPar}>научи поевече</button>
          </div>
          <div>
            <p>
              Относно правното значение на изрична клауза в договора... При
              сключването на договор за прехвърляне на собственост срещу
              минали (вече престирани) грижи и издръжка и задължение за
              гледане и издръжка след сключването на договора (за в бъдеще),
              част от грижите и издръжката са дадени в миналото. Ако
              прехвърлителят обаче е прехвърлил целия имот, без да определи,
              каква част от имота прехвърля за минали и каква част за бъдещи
              грижи и издръжка, договорът остава алеаторен. Затова и
              неизпълнението на задълженията...
            </p>
            <button className={styles.btnInfoPar}>научи поевече</button>
          </div>
          <div>
            <p>
              Относно правното значение на изрична клауза в договора... При
              сключването на договор за прехвърляне на собственост срещу
              минали (вече престирани) грижи и издръжка и задължение за
              гледане и издръжка след сключването на договора (за в бъдеще),
              част от грижите и издръжката са дадени в миналото. Ако
              прехвърлителят обаче е прехвърлил целия имот, без да определи,
              каква част от имота прехвърля за минали и каква част за бъдещи
              грижи и издръжка, договорът остава алеаторен. Затова и
              неизпълнението на задълженията...
            </p>
            <button className={styles.btnInfoPar}>научи поевече</button>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.clients}>
      <div className={styles.titleBar}>
        <div className={styles.title}>
          <h2>КЛИЕНТИ</h2>
        </div>
        <div className={styles.redEl}></div>
      </div>
      <div className={styles.clientslogos}>
        <div>
          <Image src="/web_03.png" alt="" width={200} height={90}/>
        </div>
        <div>
          <Image src="/web_06.png" alt="" width={200} height={90}/>
        </div>
        <div>
          <Image src="/web_08.png" alt="" width={200} height={90}/>
        </div>
        <div>
          <Image src="/web_10.png" alt="" width={200} height={90}/>
        </div>
        <div>
          <Image src="/web_13.png" alt="" width={200} height={90}/>
        </div>
      </div>
    </section>
  </main>
  )
}
