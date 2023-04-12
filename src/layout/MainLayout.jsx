import Head from 'next/head'
import styles from './mainLayout.module.css'
import { Navbar } from '@/components/navbar/Navbar'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Gestion de inventario</title>
        <meta name="description" content="First app with next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  )
}
