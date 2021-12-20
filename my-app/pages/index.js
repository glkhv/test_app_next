import Header from "../components/Header"
import styles from "../styles/index.module.scss"

export default function Test() {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <p> </p>
            </div>
            <div className={styles.subnav}>
                <p> </p>
            </div>
            <div className={styles.content}>
                <Header title = {'Create an Empty'} subtitle = {'API ID: Restaurants'} button = {'Save'} button_link = {'/'}/>
                <div className="row">
                    <div className="column-9">
                        <div className={styles.grid_example}>
                            <h3> Блок 1 </h3>
                        </div>
                        <div className={styles.grid_example}>
                            <h3> Блок 2 </h3>
                        </div>
                    </div>
                    <div className="column-3">
                        <div className={styles.grid_example}>
                            <h3> Блок 3 </h3>
                        </div>
                        <div className={styles.grid_example}> 
                            <h3> Блок 4 </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}