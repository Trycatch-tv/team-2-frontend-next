import Image from 'next/image'
import { Inter } from '@next/font/google'
import { MainLayout } from '@/layout/MainLayout'
const inter = Inter({ subsets: ['latin'] })
const PricingPage = () => {
  return (
    <MainLayout>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">src/pages/pricing/index.js</code>
        </p>
      </div>

      <div className="center">
        <h1>Pricing Page</h1>
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
export default PricingPage
