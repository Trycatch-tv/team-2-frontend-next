import Head from 'next/head'
import Image from 'next/image'
import { MainLayout } from '@/layout/MainLayout'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function Contactpage() {
  return (
    <MainLayout>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">src/pages/contact.js</code>
        </p>
      </div>

      <div className="center">
        <h1>Contact Page</h1>
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </MainLayout>
  )
}
