import { useState, useEffect, useId, useRef } from 'react'

import {
  PlusIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { MainLayout } from '@/layout/MainLayout'
import { ProductList } from '@/components/product/ProductList'
import Alerta from '@/utils/Alert'
import ModalForm from '@/utils/ModalForm'
import FormProduct from '@/components/product/FormProduct'

function useFormulario() {
  const [idProd, setIdProd] = useState(0)
  const [codProd, setCodProd] = useState(0)

  return {
    idProd,
    setIdProd,
    codProd,
    setCodProd
  }
}

export default function Productos() {
  const idForm = useId()
  const [products, setProducts] = useState([])

  let completeButtonRef = useRef(null)

  const {
    idProd,
    setIdProd,
    codProd,
    setCodProd
  } = useFormulario()

  const [msnAlert, setMsnAlert] = useState('')

  const [tipoFiltro, setTipoFiltro] = useState('')
  const [filtro, setFiltro] = useState('')

  const [productFiltrado, setProductFiltrado] = useState({})

  const productRef = useRef(null)
  const categoryRef = useRef(null)
  const brandRef = useRef(null)
  const uniMedRef = useRef(null)


  const [tipoAlert, setTipoAlert] = useState(2)
  const [isOpen, setIsOpen] = useState(false)
  const [isModal, setModal] = useState(false)

  let [isBtnSave, setIsBtnSave] = useState('Guardar')
  let [isColorBtnSave, setColorIsBtnSave] = useState('#4285F4')
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const [detProd, setDetProd] = useState({
    id_: '',
    cod_: '',
    nom_: '',
    des_: '',
    can_: '',
    pre_: '',
    catId: '',
    cat_: '',
    marId: '',
    mar_: '',
    unmId: '',
    uni_: '',
    img_: '',
    file: ''
  })

  const getInfoProducts = () => {
    fetch('https://tea2.herokuapp.com/productos/all')
      .then(async res => await res.json())
      .then(res => {
        productRef.current = res?.map(products => ({
          id_: products.id,
          cod_: "COD" + products.id,
          nom_: products.nombre,
          des_: products.descripcion,
          can_: products.cantidad,
          pre_: products.precio,
          catId: products?.categoria?.id,
          cat_: products?.categoria?.categoria,
          marId: products?.marca?.id,
          mar_: products?.marca?.marca,
          unmId: products?.unidadMedida?.id,
          uni_: products?.unidadMedida?.unidad_medida,
          img_: products?.imagen
        }))
        setProducts(productRef.current)
      })
      .catch(err => {
        console.error(err)
      }
      )
  }

  useEffect(() => {

    getInfoProducts()

    fetch('https://tea2.herokuapp.com/categorias/all')
      .then(async res => await res.json())
      .then(res => {
        categoryRef.current = res
      })
      .catch(err => {
        console.error(err)
      })

    fetch('https://tea2.herokuapp.com/marca/all')
      .then(async res => await res.json())
      .then(res => {
        brandRef.current = res
      })
      .catch(err => {
        console.error(err)
      })

    fetch('https://tea2.herokuapp.com/unidadmedida/all')
      .then(async res => await res.json())
      .then(res => {
        uniMedRef.current = res
      })
      .catch(err => {
        console.error(err)
      })

  }, [])

  useEffect(() => {
    if (isOpen) {
      setModal(false)
    }

    if (isModal) {
      setIsOpen(false)
    }
  }, [isOpen, isModal])

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage))
      setDetProd({
        ...detProd,
        img_: URL.createObjectURL(selectedImage),
        file_: selectedImage
      })
    }
  }, [selectedImage])

  const verDetalleProducto = id => {
    setIsBtnSave('Editar')
    setIdProd(id)
    setColorIsBtnSave('bg-yellow-500')
    setMsnAlert(`Llego a ${isBtnSave} el producto`)
    setModal(true)

    const getInfoProduct = products.filter(prod => prod.id_ == id)
    if (getInfoProduct) {
      setDetProd({
        ...getInfoProduct[0],
        file: ''
      })
      setImageUrl(getInfoProduct[0].img_)
    }
  }

  const crearProducto = () => {
    setModal(true)
    setIsBtnSave('Guardar')
    setColorIsBtnSave('bg-blue-500')
    setDetProd({
      ...detProd,
      id_: 0,
      cod_: '',
      nom_: '',
      des_: '',
      can_: '',
      pre_: '',
      catId: '',
      cat_: '',
      marId: '',
      mar_: '',
      unmId: '',
      uni_: '',
      img_: '',
      file: ''
    })
    setImageUrl('')
  }

  const eliminarProducto = () => {
    fetch(`https://tea2.herokuapp.com/productos/delete/${idProd}`,
      {
        method: "DELETE"
      })
      .then(function (res) { })

    if (!isOpen) {
      setIsOpen(true)
    }
    setMsnAlert(`Se eliminó el producto`)
    const filterProduct = products.filter(prod => prod.cod_ != codProd)
    setProducts(filterProduct)
    setTipoAlert(0)
  }

  const handleDelete = (cod, idd_) => {
    if (!isOpen) {
      setIsOpen(true)
    }
    setCodProd(cod)
    setIdProd(idd_)
    setTipoAlert(2)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setTipoAlert(1)
    const form = e.target

    const formData = new FormData(form)

    const formJson = Object.fromEntries(formData.entries())

    let cate = [...categoryRef.current].filter(cat => Number(cat.id) === Number(formJson.cat_))
    cate = (cate) ? cate[0] : {}

    let marca = [...brandRef.current].filter(brad => Number(brad.id) === Number(formJson.mar_))
    marca = (marca) ? marca[0] : {}

    let um = [...uniMedRef.current].filter(un_i => Number(un_i.id) === Number(formJson.uni_))
    um = (um) ? um[0] : {}

    let senData = {
      id: formJson.id_,
      nombre: formJson.prod_,
      descripcion: formJson.des_,
      precio: formJson.pre_,
      cantidad: formJson.can_,
      imagen: formJson.img_,
      estado: "disponible",
      file: formJson.file,
      categoria: cate,
      marca: marca,
      unidadMedida: um,
      estado: "disponible"
    }

    fetch("https://tea2.herokuapp.com/productos/save",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(senData)
      })
      .then(function (res) { getInfoProducts() })

    setModal(false)
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  const filtrarPor = e => {
    e.preventDefault()
    let prod_ = productRef.current
    if (tipoFiltro == 'categoria') {
      setProducts(
        prod_.filter(prod => {
          return prod.cat_.toLowerCase().includes(filtro.toLowerCase())
        })
      )
    } else if (tipoFiltro == 'codigo') {
      setProducts(
        prod_.filter(prod => {
          return prod.cod_.toLowerCase().includes(filtro.toLowerCase())
        })
      )
    } else if (tipoFiltro == 'producto') {
      setProducts(
        prod_.filter(prod => {
          return prod.nom_.toLowerCase().includes(filtro.toLowerCase())
        })
      )
    } else if (tipoFiltro == 'marca') {
      setProducts(
        prod_.filter(prod => {
          return prod.mar_.toLowerCase().includes(filtro.toLowerCase())
        })
      )
    } else if (tipoFiltro == 'unida') {
      setProducts(
        prod_.filter(prod => {
          return prod.cat_.toLowerCase().includes(filtro.toLowerCase())
        })
      )
    } else if (tipoFiltro == 'precio') {
      setProducts(prod_.filter(prod => { return prod.pre_ == filtro }))
    } else if (tipoFiltro == 'cantidad') {
      setProducts(prod_.filter(prod => { return prod.can_ == filtro }))
    } else {
      if (tipoFiltro == '') {
        setFiltro('')
        setProducts(prod_)
      }
    }
  }

  const handlerInputChange = (e) => {
    const { name, type } = e.target
    setDetProd({
      ...detProd,
      [name]:
        type == 'checkbox'
          ? e.target.checkbox
          : e.target.value
    })
  }

  return (
    <MainLayout padd="true" title="Productos" description="pagina para gestionar productos">
      <ModalForm
        stateModal={isModal}
        closeModal={() => setModal(false)}
        titulo="Producto"
        initialFocus={completeButtonRef}
        children={
          <FormProduct
            closeModal={() => setModal(false)}
            handleSubmit={handleSubmit}
            handlerInputChange={handlerInputChange}
            setSelectedImage={setSelectedImage}
            data={detProd}
            imageUrl={imageUrl}
            color={isColorBtnSave}
            nombBtn={isBtnSave}
            initialFocus={completeButtonRef}
            categorias={categoryRef.current}
            marcas={brandRef.current}
            uniMed={uniMedRef.current}
          />
        }
      />

      <Alerta
        tipo={tipoAlert}
        valor={isOpen}
        eliminarProductos={() => eliminarProducto()}
        closeAlert={() => setIsOpen(false)}
      />

      <div className='container'>
        <div className="w-full mb-12 px-4">
          <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="px-4 max-w-full flex-grow basis-1/2">
                  <h2 className="font-semibold text-2xl text-blueGray-700 inline-flex">
                    Productos
                  </h2>
                  <button
                    onClick={crearProducto}
                    type="button"
                    className="text-white inline-flex float-right bg-emerald-800 hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-emerald-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-emerald-800/55 mr-2 mb-2"
                  >
                    <PlusIcon className="h-6 w-6 text-white" />
                    <span>Agregar</span>
                  </button>
                </div>
                <div className="basis-1/2 flex-grow max-w-full">
                  <div className="mb-3 xl:w-full">
                    <div className="relative mb-4 flex-wrap items-stretch">

                      <form id={`${idForm}-search-form`} onSubmit={filtrarPor}>
                        <div className="flex relative">
                          <select
                            name="tipo_filtro"
                            id={`${idForm}-tipofiltro`}
                            value={tipoFiltro}
                            onChange={e => { setTipoFiltro(e.target.value) }}
                            className="m-0 bg-secundary border border-gray-300 text-white text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option value="">Selecionar</option>
                            <option value="categoria">Categoria</option>
                            <option value="codigo">Codigo</option>
                            <option value="producto">Producto</option>
                            <option value="marca">Marca</option>
                            <option value="unida">Unida Medida</option>
                            <option value="precio">precio</option>
                            <option value="cantidad">Cantidad</option>
                          </select>
                          <input
                            type="search"
                            id={`${idForm}-filtro-search`}
                            name="filtro_search"
                            className="-mr-0.5 w-full block min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-gray-500 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-gray-300"
                            placeholder="Buscar"
                            aria-label="Search"
                            aria-describedby="button-addon1"
                            value={filtro}
                            onChange={e => setFiltro(e.target.value)}
                          />
                          <button
                            className="z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-secundary hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-emerald-800/50"
                            type="submit"
                            id="button-addon1"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductList
              showProduct={verDetalleProducto}
              deleteProduct={handleDelete}
              products={products}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
