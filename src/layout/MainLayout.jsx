import Head from 'next/head'
import styles from './mainLayout.module.css'
import { Navbar } from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const MainLayout = ({
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
      <Navbar />
      <main className="flex flex-col justify-between items-center min-h-screen mb:p-4 lg:p-4 lg:p-24 p-2">{children}</main>
      <Footer />
    </>
  )
}
