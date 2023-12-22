import styles from '@/components/searchResults/searchResults.module.scss'
import Image from 'next/image'


export default function SearchResults() {
    return(
        <div className={styles.searchContainer__results}>
            <div className={styles.searchContainer__result}>
                <p className={styles.searchContainer__resultTitle}>Projector</p>
                <Image src="/images/Projector.png" width="80" height="80" alt="projector icon"></Image>
                <p className={styles.searchContainer__resultGridSize}>Large Grid</p>
                <Image src="/plus-solid.svg" alt="plus symbol" className={styles.searchResult__icon} width={16} height={16} />
            </div>
            <div className={styles.searchContainer__result}>
                <p className={styles.searchContainer__resultTitle}>Projector</p>
                <Image src="/images/Projector.png" width="80" height="80" alt="projector icon"></Image>
                <p className={styles.searchContainer__resultGridSize}>Small Grid</p>
                <Image src="/plus-solid.svg" alt="plus symbol" className={styles.searchResult__icon} width={16} height={16} />
            </div>                
        </div>
    )
}