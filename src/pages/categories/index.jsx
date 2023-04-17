import AddAndFilter from '@/components/categories/AddAndFilter'
import CatagoriesList from '@/components/categories/CategoriesList'
import { MainLayout } from '@/layout/MainLayout'
import Confirmations from '@/utils/Confirmations'

import styles from '../../components/categories/styles/index.module.css'
import { useState } from 'react'
import ModalForAdd from '@/utils/ModalForAdd'
import FormAddCategory from '@/components/categories/FormAddCategory'

export default function index() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState({
    code: '',
    category: ''
  })

  const handlerInputChange = e => {
    const { name, type } = e.target
    setData({
      ...data,
      [name]:
        type == 'text'
          ? e.target.value
          : type == 'checkbox'
          ? e.target.checkbox
          : e.target.value
    })
  }
  const handlerForm = e => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <MainLayout
      title="Categorias"
      description="pagina para gestionar categorias"
    >
      <ModalForAdd
        state={isOpen}
        setState={() => setIsOpen(false)}
        children={
          <FormAddCategory
            handlerForm={handlerForm}
            data={data}
            handlerInputChange={handlerInputChange}
            title={'Agregar categoria'}
            setState={() => setIsOpen(false)}
          />
        }
      />
      <Confirmations />
      <div className={styles.table}>
        <AddAndFilter
          title={'Categorias'}
          handlerState={() => setIsOpen(true)}
        />
        <CatagoriesList />
      </div>
    </MainLayout>
  )
}
