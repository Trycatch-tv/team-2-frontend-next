import FormCategory from '@/components/categories/FormCategory'
import FormMeasures from '@/components/measures/FormMeasures'
import { MainLayout } from '@/layout'
import AddAndFilter from '@/utils/AddAndFilter'
import Confirmations from '@/utils/Confirmations'
import ItemList from '@/utils/ItemList'
import ModalForAdd from '@/utils/ModalForAdd'
import React, { useEffect, useState } from 'react'
import styles from '../../components/categories/styles/index.module.css'

const index = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAlertConfirm, setIsAlertConfirm] = useState(false)
  const [responseAPI, setResponseAPI] = useState([])
  const [arrayMeasures, setArrayMeasures] = useState([])
  const [search, setSearch] = useState({ select: '', value: '' })
  const [measure, setMeasure] = useState({
    id: '',
    code: '',
    measure: '',
    status: ''
  })

  useEffect(() => {
    fetch('https://tea2.herokuapp.com/unidadmedida/all')
      .then(res => res.json())
      .then(data => setArrayMeasures(data))
  }, [responseAPI])

  const openFormAdd = () => {
    setIsOpen(true)
    setMeasure({
      id: '',
      code: '',
      measure: '',
      status: ''
    })
  }
  const openFormUpdate = item => {
    setIsOpen(true)
    setMeasure({
      ...measure,
      id: item.id,
      code: item.codigo,
      measure: item.unidad_medida,
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
    setMeasure({
      ...measure,
      [name]:
        type == 'text'
          ? e.target.value
          : type == 'checkbox'
          ? e.target.checkbox
          : e.target.value
    })
  }
  const saveMeasure = () => {
    let _datos = {
      codigo: measure.code,
      unidad_medida: measure.measure,
      estado: measure.status
    }
    fetch('https://tea2.herokuapp.com/unidadmedida/save', {
      method: 'POST',
      body: JSON.stringify(_datos),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then(response => {
      setResponseAPI(response)
    })
  }
  const updateMeasure = () => {
    let _datos = {
      id: measure.id,
      codigo: measure.code,
      unidad_medida: measure.measure,
      estado: measure.status
    }
    fetch('https://tea2.herokuapp.com/unidadmedida/save', {
      method: 'POST',
      body: JSON.stringify(_datos),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then(response => {
      setResponseAPI(response)
    })
  }

  const handlerDeleteItem = id => {
    fetch(`https://tea2.herokuapp.com/unidadmedida/delete/${id}`).then(res =>
      setResponseAPI(res)
    )
  }

  const handlerForm = e => {
    e.preventDefault()
    setIsOpen(false)
  }

  const array = !search.value
    ? arrayMeasures
    : arrayMeasures.filter(item =>
        item[`${search.select}` !== '' ? `${search.select}` : 'unidad_medida']
          .toString()
          .toLowerCase()
          .includes(search.value.toString().toLowerCase())
      )

  return (
    <MainLayout
      title="Gestionar unidades de medidas"
      description="pagina para gestionar las unidades de medidas"
    >
      <ModalForAdd
        state={isOpen}
        setState={() => setIsOpen(false)}
        children={
          <FormMeasures
            handlerForm={handlerForm}
            data={measure}
            handlerInputChange={handlerInputChange}
            saveMeasure={saveMeasure}
            updateMeasure={updateMeasure}
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
          title={'Medidas'}
          handlerState={openFormAdd}
          optionsSelect={['codigo', 'estado']}
        />

        <ItemList
          array={array}
          headerList={['Codigo', 'Medida', 'Estado', 'Editar', 'Eliminar']}
          valuesList={['codigo', 'unidad_medida', 'estado']}
          deleteItem={handlerDeleteItem}
          updateItem={openFormUpdate}
        />
      </div>
    </MainLayout>
  )
}

export default index
