import FormMeasures from '@/components/measures/FormMeasures'
import MeasuresList from '@/components/measures/MeasuresList'
import { MainLayout } from '@/layout'
import React from 'react'

const index = () => {
  return (
    <MainLayout
      title="Gestionar unidades de medidas"
      description="pagina para gestionar las unidades de medidas"
    >
      <MeasuresList />
    </MainLayout>
  )
}

export default index
