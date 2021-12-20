import Link from 'next/link';
import styles from '../styles/PrimaryButton.module.scss'

export default function ({href, text}) {
    return (
        <Link href={href}>
            <button className={styles.button}>{text}</button>
        </Link>
    )
}