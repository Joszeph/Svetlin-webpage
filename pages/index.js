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
      <h2>"Накрая побеждава справедливата кауза"</h2>
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
        </div>
        <div className={styles.contentParSection}>
          <div>
            <h3 style={{ textAlign: 'center', margin:'0px 0 20px 0' }}>Имам правен проблем – имам ли нужда от адвокат и как да си избера такъв?</h3>
            <p>
              На всеки един от нас, рано или късно, му се налага да ползва правна помощ.
              Съвременният живот е дотолкова свързан с материалните блага, че на практика
              е невъзможно човек да не участва поне в няколко правоотношения с имуществен характер
              и последици през съзнателния си живот.  Неизчерпателно такива правоотношения могат
              да бъдат: покупката на жилище...
            </p>
            <button className={styles.btnInfoPar}>научи поевече</button>
          </div>
          <div>
          <h3 style={{ textAlign: 'center', margin:'0px 0 20px 0' }}>Предстои ми да закупя жилище. Имам ли нужда от адвокат и как да избера такъв?</h3>
          <p>
            В живота на всеки човек, рано или късно, настъпва моментът да закупи собствен дом. Това е важна крачка в житейския ни път, а в повечето случаи покупката на жилище е свързана и със значителни разходи, вземането на ипотечни кредити, ангажирането на посредничеството на брокерски фирми и много други фактически и правни дейсвия. Затова е логично да се запитаме – следва ли да ангажирам...
            </p>
            <button className={styles.btnInfoPar}>научи поевече</button>
          </div>
          <div>
          <h3 style={{ textAlign: 'center', margin:'0px 0 20px 0' }}>Що е то „жилищен комплекс от затворен тип“ и има ли почва у нас?</h3>
            <p>
            Напоследък стана особено модерно строителните предприемачи да предлагат за продажба жилища в „комплекси от затворен тип“. Увещанията им са, че бъдещият собственик на такова жилище ще живее в една сигурна, спокойна и уютна среда, далеч от градския шум и мръсотия, а общите части на сградата и дворът, в който е построена, ще бъдат винаги чисти и поддържани. Що е то обаче...
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
