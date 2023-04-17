import { MainLayout } from '@/layout/MainLayout'
import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout title="E-Commerce | Home">
      <h1>hola mundo</h1>
    </MainLayout>
  )
}
