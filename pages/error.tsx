import Head from 'next/head'

import Header from '@/components/Header/header';

import styles from './error.module.scss'

export default function  () {
  return (
    <div className="bg-rose-500W h-screen overflow-hidden    ">
      <Head>
        <title>Recipe Calculator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <Header/>
        <div className="flex flex-col items-center h-full">
            <h1 className="font-mono text-6xl pt-28 pb-8">Oops, that's an error.</h1>   
            <p className="font-sans text-base bg-black/10 p-2 rounded">Sorry about that, want to go <a className= "text-white hover:underline" href="/">home?</a></p>
        </div>
      </main>
    </div>
  )
}
