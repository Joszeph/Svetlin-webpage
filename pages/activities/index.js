import{useEffect} from 'react'
import Image from 'next/image'
import styles from './activities.module.css'

import AOS from "aos";
import "aos/dist/aos.css";

const Activities = () => {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

    return ( 
        <main>
            <section className={styles.activities}>
                <h1 className={styles.h1}>Сфери на дейност</h1>
                <Image src="/activities_image.jpeg" alt="" width={1200} height={300}/>
            </section>
            <section className={styles.texts}>
                <div data-aos="zoom-in-up">
                <h2>Облигационно право</h2>
                    <ul>
                        <li>съставяне на договори</li>
                        <li>консултация по договори</li>
                        <li>процесуално представителство</li>
                        <li>представителство на пострадали и/или извършители на деликт</li>
                        <li>неоснователно обогатяване</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>Семейно право</h2>
                    <ul>
                        <li>разводи</li>
                        <li>издръжка</li>
                        <li>домашно насилие</li>
                        <li>брачни договори</li>
                        <li>неоснователно обогатяване</li>
                        <li>консултация при осиновяване</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                <h2>Вещно право</h2>
                    <ul>
                        <li>сделки с недвижими имоти</li>
                        <li>процесуално представителство</li>
                        <li>делби</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>Търговско право</h2>
                    <ul>
                        <li>регистрация и промяна в обстоятелствата на търговски дружества</li>
                        <li>изготвяне на договори</li>
                        <li>процесуално представителство</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>Медицинско и био право</h2>
                </div>
                <div data-aos="zoom-in-up">
                <h2>Лекарска грешка</h2>
                </div>
                <div data-aos="zoom-in-up">
                <h2>Трудово право и трудови злополуки</h2>
                </div>
                <div data-aos="zoom-in-up">
                <h2>Пътно транспортни произшествия</h2>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>Застрахователно право</h2>
                    <ul>
                        <li>консултация по договори и полици</li>
                        <li>процесуално представителство</li>
                        <li>искове срещу застрахователни компании от пострадали от ПТП</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                <h2>Трудово право</h2>
                <ul>
                    <li>искове от работника срещу работодателя при трудова злополука и професионална болест</li>
                 </ul>
            </div>
            <div data-aos="zoom-in-up">
                <h2>Административно право</h2>
                <ul>
                        <li> оспорване на административни актове</li>
                        <li> митнически спорове</li>
                    </ul>
            </div>
                <div data-aos="zoom-in-up">
                    <h2>Административно-наказателно право</h2>
                    <ul>
                        <li>обжалване на наказателни постановления</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                <h2>Наказателно право</h2>
                    <ul>
                        <li>защита в наказателния процес</li>
                        <li>представителство на пострадали лица</li>
                        <li>особени производства</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                <h2>Право на интелектуалната собственост</h2>
                <ul>
                        <li>регистрация на търговски марки</li>
                        <li>лицензионни договори</li>
                        <li>правна консултация</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>Процесуално представителство</h2>
                    <ul>
                        <li>граждански дела</li>
                        <li>образуване и водене на изпълнителни дела</li>
                        <li>обезпечение на искове</li>
                        <li>образуване и водене на заповедно производство по чл. 410 и чл. 417 ГПК</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h2>Реституционни права</h2>
                </div>
            </section>
        </main>
     );
}
 
export default Activities;