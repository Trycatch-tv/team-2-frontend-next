import { Navbar } from '@/components/Navbar'
import Head from 'next/head'
import styles from './mainLayout.module.css'
import { FC, PropsWithChildren } from 'react'
import { Props } from '@/interfaces/fcProps.interface'

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
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
