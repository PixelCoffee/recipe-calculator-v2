import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/header/header';
import SearchBar from '@/components/searchBar/searchBar';

import styles from '@/pages/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Calculator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <SearchBar/>
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
