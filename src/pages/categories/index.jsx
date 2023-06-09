import AddAndFilter from '@/utils/AddAndFilter'
import ItemList from '@/utils/ItemList'
import { MainLayout } from '@/layout/MainLayout'
import Confirmations from '@/utils/Confirmations'

import styles from '../../components/categories/styles/index.module.css'
import { useEffect, useState } from 'react'
import ModalForAdd from '@/utils/ModalForAdd'
import FormCategory from '@/components/categories/FormCategory'

export default function index() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAlertConfirm, setIsAlertConfirm] = useState(false)
  const [responseAPI, setResponseAPI] = useState([])
  const [arrayCategories, setArrayCategories] = useState([])
  const [search, setSearch] = useState({
    select: '',
    value: ''
  })
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

  const openFormAdd = () => {
    setIsOpen(true)
    setCategory({
      id: '',
      code: '',
      category: '',
      status: ''
    })
  }
  const openFormUpdate = item => {
    setIsOpen(true)
    setCategory({
      ...category,
      id: item.id,
      code: item.codigo,
      category: item.categoria,
      status: item.estado
    })
  }
  const handlerFilter = e => {
    const { name, type } = e.target
    setSearch({
      ...search,
      [name]:
        type == 'text'
          ? e.target.value
          : type == 'checkbox'
          ? e.target.checkbox
          : e.target.value
    })
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
  const saveCategory = () => {
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
      setResponseAPI(response)
    })
  }
  const updateCategory = () => {
    let _datos = {
      id: category.id,
      codigo: category.code,
      categoria: category.category,
      estado: category.status
    }
    fetch('https://tea2.herokuapp.com/categorias/save', {
      method: 'POST',
      body: JSON.stringify(_datos),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then(response => {
      setResponseAPI(response)
    })
  }

  const handlerDeleteItem = id => {
    fetch(`https://tea2.herokuapp.com/categorias/delete/${id}`).then(res =>
      setResponseAPI(res)
    )
  }

  const handlerForm = e => {
    e.preventDefault()
    setIsOpen(false)
  }

  const array = !search.value
    ? arrayCategories
    : arrayCategories.filter(item =>
        item[`${search.select}` !== '' ? `${search.select}` : 'categoria']
          .toString()
          .toLowerCase()
          .includes(search.value.toString().toLowerCase())
      )

  return (
    <MainLayout
      title="Categorias"
      description="pagina para gestionar categorias"
    >
      <ModalForAdd
        state={isOpen}
        setState={() => setIsOpen(false)}
        children={
          <FormCategory
            handlerForm={handlerForm}
            data={category}
            handlerInputChange={handlerInputChange}
            saveCategory={saveCategory}
            updateCategory={updateCategory}
          />
        }
      />
      <Confirmations
        isAlertConfirm={isAlertConfirm}
        setIsAlertConfirm={() => setIsAlertConfirm(false)}
      />
      <div className={styles.table}>
        <AddAndFilter
          handlerFilter={handlerFilter}
          title={'Categorias'}
          handlerState={openFormAdd}
          optionsSelect={['codigo', 'categoria', 'estado']}
        />
        <ItemList
          array={array}
          headerList={['Codigo', 'Categoria', 'Estado', 'Editar', 'Eliminar']}
          valuesList={['codigo', 'categoria', 'estado']}
          deleteItem={handlerDeleteItem}
          updateItem={openFormUpdate}
        />
      </div>
    </MainLayout>
  )
}
