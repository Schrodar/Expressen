import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {RiWindyLine} from 'react-icons/ri'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Utö Express</title>
        <meta name="description" content="Inventory utö express" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        
        <div>
          <h1 className={styles.title}>
            Väkommen till Utö Express
          </h1>
        </div>


        <div className={styles.grid}>
          <a href="/maskinsystem" className={styles.card}>
            <h2>Maskin Documentation &rarr;</h2>
            <p>Är du innhyrd mekaniker för att göra ett servis jobb
             <br></br> klicka här
            </p>
          </a>

                    <a href="#" className={styles.card}>
            <h2>Maskin Documentation &rarr;</h2>
            <p>Är du innhyrd mekaniker för att göra ett servis jobb
             <br></br> klicka här
            </p>
          </a>

                    <a href="#" className={styles.card}>
            <h2>Maskin Documentation &rarr;</h2>
            <p>Är du innhyrd mekaniker för att göra ett servis jobb
             <br></br> klicka här
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Inskolning olje schema &rarr;</h2>
            <p>Inskolnings instruktioner och oljeschema andra hjälpmedel </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Cafe och inredning &rarr;</h2>
            <p>inventarier för städ och cafe samt skyltar övrigt</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Kapten &rarr;</h2>
            <p>
              Uppdatering av gångtimar med mera 
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>
            Powered by Överste Hatti{' '}
          </code>
          <span className={styles.logo}>
            <RiWindyLine size={24} /> 
          </span>
        </a>
      </footer>
    </div>
  )
}

