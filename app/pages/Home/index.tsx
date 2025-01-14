import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/Header/header';
import SearchBar from '@/components/SearchBar/searchBar';
import SearchResults from '@/components/SearchResults/searchResults';

import styles from './index.module.scss'

export default function  () {
  return (
    <div className={styles.customContainer}>
      <Head>
        <title>Recipe Calculator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <SearchBar/>
        <SearchResults/>
      </main>
    </div>
  )
}
