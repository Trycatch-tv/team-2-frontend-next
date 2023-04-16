import { MainLayout } from '@/layout/MainLayout'
import Notifications from '../../utils/Notifications'

export default function index() {
  return (
    <MainLayout
      title="Categorias"
      description="pagina para gestionar categorias"
    >
      <Notifications resolution="Congratulations!!!" />
    </MainLayout>
  )
}
