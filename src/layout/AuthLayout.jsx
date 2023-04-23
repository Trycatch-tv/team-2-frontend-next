import Head from 'next/head'
import styles from './mainLayout.module.css'
import { Navbar } from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const AuthLayout = ({
  children,
  title = 'Home',
  description = 'Home Page'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  )
}
