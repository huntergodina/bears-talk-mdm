import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getData } from './api/data'
import { DraftData, DraftPick } from './api/types'
import { bestFitForTeam } from './api/draftLogic'

export async function getStaticProps() {
  const draftData = await getData();
  return {
    props: {
      draftData: draftData
    }
  }
}

export default function Home({ draftData } : any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bears Talk Mock Draft Machine</title>
      </Head>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
