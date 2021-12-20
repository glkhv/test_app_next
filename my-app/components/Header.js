import styles from '../styles/Header.module.scss'
import PrimaryButton from './PrimaryButton'

export default function ({title, subtitle, button, button_link}) {
    return (
        <div className={styles.container}>
            <div className='row'>
                <div className='column-9'>
                    <div className={styles.title}>
                        <h1>{title}</h1>
                        <p className="subtitle">{subtitle}</p>
                    </div>
                </div>
                <div className='column-3'>
                    <div className={styles.button}>
                        <PrimaryButton href = {button_link} text = {button}/>
                    </div>
                </div>
            </div>
        </div>
    )
}