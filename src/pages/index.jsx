import Header from '@/components/header/Header'
import { MainLayout } from '@/layout/MainLayout'
import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout title="E-Commerce | Home">
      <Header />
    </MainLayout>
  )
}
