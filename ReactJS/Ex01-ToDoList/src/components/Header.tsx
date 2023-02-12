import styles from './Header.module.css'
import logo from '../assets/Logo.svg'
import { Input } from "./Input";

export function Header () {

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <a href='#'>
                    <img 
                        src={logo} 
                        alt='' 
                        className={styles.logo}
                    />
                </a>
            </header>
        </div>
    )
}
