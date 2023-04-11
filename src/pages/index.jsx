import { MainLayout } from '@/layout/MainLayout'
import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">src/pages/index.js</code>
        </p>
      </div>

      <div className="center">
        <h1 className="text-red-400 text-2xl">Home Page</h1>
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
