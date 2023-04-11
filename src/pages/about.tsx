import Image from 'next/image'
import { Inter } from '@next/font/google'
import { MainLayout } from '@/layout/MainLayout'
import { ReactNode } from 'react'
import { DarkLayout } from '@/layout/DarkLayout'
const inter = Inter({ subsets: ['latin'] })
export default function AboutPage() {
  return (
    <>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">src/pages/about.js</code>
        </p>
      </div>

      <div className="center">
        <h1>About Page</h1>
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </>
  )
}
AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}
