import AddAndFilter from '@/components/categories/AddAndFilter'
import CatagoriesList from '@/components/categories/CategoriesList'
import { MainLayout } from '@/layout/MainLayout'
import Confirmations from '@/utils/Confirmations'

import styles from '../../components/categories/styles/index.module.css'
import { useEffect, useState } from 'react'
import ModalForAdd from '@/utils/ModalForAdd'
import FormAddCategory from '@/components/categories/FormAddCategory'
import { StyleRegistry } from 'styled-jsx'

export default function index() {
  const [isOpen, setIsOpen] = useState(false)
  const [responseAPI, setResponseAPI] = useState([])
  const [arrayCategories, setArrayCategories] = useState([])
  const [category, setCategory] = useState({
    id: '',
    code: '',
    category: '',
    status: ''
  })

  useEffect(() => {
    fetch('https://tea2.herokuapp.com/categorias/all')
      .then(res => res.json())
      .then(data => setArrayCategories(data))
  }, [responseAPI])

  const handlerDeleteCategory = id => {
    fetch(`https://tea2.herokuapp.com/categorias/delete/${id}`).then(res =>
      setResponseAPI(res)
    )
  }

  const handlerInputChange = e => {
    const { name, type } = e.target
    setCategory({
      ...category,
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
    let _datos = {
      codigo: category.code,
      categoria: category.category,
      estado: category.status
    }

    fetch('https://tea2.herokuapp.com/categorias/save', {
      method: 'POST',
      body: JSON.stringify(_datos),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then(response => {
      console.log(response)
      setResponseAPI(response)
    })
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
            data={category}
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
        <CatagoriesList
          array={arrayCategories}
          deleteCategory={handlerDeleteCategory}
        />
      </div>
    </MainLayout>
  )
}
