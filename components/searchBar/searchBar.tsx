import styles from '@/components/searchBar/searchBar.module.scss'
import Image from 'next/image'

export default function SearchBar() {
    return(
        <div className={styles.searchContainer}>
            <div className={styles.inputWrapper}>
                <input className={styles.searchContainer__input} type="text" placeholder='Search for blocks...'/>
                <Image src="/search-solid.svg" alt="search icon" className={styles.searchContainer__icon} width={16} height={16} />
            </div>

            <input type="button" className={styles.searchContainer__toggleButton} value="Component View" />
        </div>
    )
}