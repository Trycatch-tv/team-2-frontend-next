import AddAndFilter from '@/utils/AddAndFilter'
import { MainLayout } from '@/layout'
import Confirmations from '@/utils/Confirmations'
import ModalForAdd from '@/utils/ModalForAdd'
import React, { useEffect, useState } from 'react'
import ItemList from '@/utils/ItemList'
import styles from '../../components/brand/styles/index.module.css'
import FormBrand from '@/components/brand/FormBrand'

export default function index() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAlertConfirm, setIsAlertConfirm] = useState(false)
  const [responseAPI, setResponseAPI] = useState([])
  const [arrayBrands, setArrayBrands] = useState([])
  const [brand, setBrand] = useState({
    id: '',
    brand: '',
    status: ''
  })

  useEffect(() => {
    fetch('https://tea2.herokuapp.com/marca/all')
      .then(res => res.json())
      .then(data => setArrayBrands(data))
  }, [responseAPI])

  const openFormAdd = () => {
    setIsOpen(true)
    setBrand({
      id: '',
      brand: '',
      status: ''
    })
  }
  const openFormUpdate = item => {
    setIsOpen(true)
    setBrand({
      ...brand,
      id: item.id,
      brand: item.marca,
      status: item.estado
    })
  }

  const saveBrand = () => {
    let _datos = {
      marca: brand.brand,
      estado: brand.status
    }
    fetch('https://tea2.herokuapp.com/marca/save', {
      method: 'POST',
      body: JSON.stringify(_datos),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then(response => {
      setResponseAPI(response)
    })
  }
  const updateBrand = () => {
    let _datos = {
      id: brand.id,
      marca: brand.brand,
      estado: brand.status
    }
    fetch('https://tea2.herokuapp.com/marca/save', {
      method: 'POST',
      body: JSON.stringify(_datos),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then(response => {
      setResponseAPI(response)
    })
  }

  const handlerDeleteItem = id => {
    fetch(`https://tea2.herokuapp.com/marca/delete/${id}`).then(res =>
      setResponseAPI(res)
    )
  }
  const handlerInputChange = e => {
    const { name, type } = e.target
    setBrand({
      ...brand,
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
    setIsOpen(false)
  }

  return (
    <MainLayout title="Marcas" description="pagina para gestionar marcas">
      <ModalForAdd
        state={isOpen}
        setState={() => setIsOpen(false)}
        children={
          <FormBrand
            handlerForm={handlerForm}
            data={brand}
            handlerInputChange={handlerInputChange}
            saveBrand={saveBrand}
            updateBrand={updateBrand}
          />
        }
      />
      {/* <Confirmations /> */}
      <div className={styles.table}>
        <AddAndFilter
          title={'Marcas'}
          handlerState={openFormAdd}
          optionsSelect={['Marca', 'Estado']}
        />
        <ItemList
          array={arrayBrands}
          headerList={['Marca', 'Estado', 'Editar', 'Eliminar']}
          valuesList={['marca', 'estado']}
          deleteItem={handlerDeleteItem}
          updateItem={openFormUpdate}
        />
      </div>
    </MainLayout>
  )
}
