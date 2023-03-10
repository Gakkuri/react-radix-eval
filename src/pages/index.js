import Head from 'next/head'
import Dropdown from '@/components/Dropdown'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>React + Radix Evaluation</title>
        <meta name="description" content="Evaluation for job application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Dropdown />
      </main>
    </>
  )
}
