import { Navbar } from '@/components/Navbar'
import Head from 'next/head'
import styles from './mainLayout.module.css'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>First app</title>
        <meta name="description" content="First app with next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  )
}
