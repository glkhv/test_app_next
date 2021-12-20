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
                        <p className={styles.grid_example}> </p>
                    </div>
                    <div className="column-3">
                        <p className={styles.grid_example}> </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}