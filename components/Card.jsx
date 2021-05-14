import styles from '../styles/Card.module.css'

const Card = () => {
    return ( 
        <div className={styles.container}>
            <span>12.05.2021</span>
            <h2>Имам правен проблем – имам ли нужда от адвокат и как да си избера такъв?</h2>
            <div className={styles.border}>
                <p>На всеки един от нас, рано или късно, му се налага да ползва правна помощ. Съвременният живот е дотолкова свързан с материалните блага, че на практика...</p>
            </div>
        </div>
     );
}
 
export default Card;