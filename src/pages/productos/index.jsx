import { useState, Fragment, useEffect, useId, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  PlusIcon,
  ArchiveBoxIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ExclamationCircleIcon,
  CircleStackIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { MainLayout } from '@/layout/MainLayout'
import { ProductList } from '@/components/product/ProductList'
import { fromJSON } from 'postcss'

function useFormulario() {
  const [cod_, getCod] = useState(0)
  const [nom_, getNom] = useState(0)
  const [pre_, getPre] = useState(0)
  const [can_, getCan] = useState(0)
  const [catId, getCatId] = useState(0)
  const [marId, getMarId] = useState(0)
  const [uniId, getUniId] = useState(0)
  const [det_, getDet] = useState(0)

  return {
    cod_, getCod,
    nom_, getNom,
    pre_, getPre,
    can_, getCan,
    catId, getCatId,
    marId, getMarId,
    uniId, getUniId,
    det_, getDet
  }
}

export default function Productos() {
  const idForm = useId()
  const [products, setProducts] = useState([])
  const [idProd, setIdProd] = useState(0)
  const [codProd, setCodProd] = useState(0)
  const [msnAlert, setMsnAlert] = useState('')
  const [detProd, setDetProd] = useState({})
  const [tipoFiltro, setTipoFiltro] = useState('')
  const [filtro, setFiltro] = useState('')
  const [productFiltrado, setProductFiltrado] = useState({})
  const productRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [isAlertConfirm, setAlertConfirm] = useState(false)
  const [isModal, setModal] = useState(false)

  let [isBtnSave, setIsBtnSave] = useState('Guardar')
  let [isColorBtnSave, setColorIsBtnSave] = useState('#4285F4')
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const {
    cod_, getCod,
    nom_, getNom,
    pre_, getPre,
    can_, getCan,
    catId, getCatId,
    marId, getMarId,
    uniId, getUniId,
    det_, getDet
  } = useFormulario()

  useEffect(() => {
    fetch("https://mocki.io/v1/577cc7a3-07d6-4e14-b1b0-f62ef81f4699")
      .then(async res => await res.json()).
      then(res => {
        let rta = res.Search?.map(products => ({
          id_: products.id,
          cod_: products.codigo,
          nom_: products.nombre,
          des_: products.descripcion,
          can_: products.cantidad,
          pre_: products.precio,
          catId: products.categoriaId,
          cat_: products.categoria,
          marId: products.marcaId,
          mar_: products.marca,
          unmId: products.unidadmediadId,
          uni_: products.unidadmedida,
          img_: products.imagen
        }))
        productRef.current = rta
        setProducts(rta)
      }).catch(err => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    if (isOpen) {
      setModal(false)
      setAlertConfirm(false)
    }

    if (isAlertConfirm) {
      setModal(false)
      setIsOpen(false)
    }

    if (isModal) {
      setIsOpen(false)
      setAlertConfirm(false)
    }
  }, [isOpen, isAlertConfirm, isModal])

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])

  useEffect(() => {
    if (detProd) {
      getCod(detProd.cod_)
      getNom(detProd.nom_)
      getPre(detProd.pre_)
      getCan(detProd.can_)
      getCatId(detProd.catId)
      getMarId(detProd.marId)
      getUniId(detProd.unmId)
      setImageUrl(detProd.img_)
      getDet(detProd.des_)
    }
  }, [detProd])

  function filterCat(obj) {
    if (obj.toLowerCase().includes(filtro.toLowerCase())) {
      return true
    }
    return false
  }

  const verDetalleProducto = (id) => {
    setIsBtnSave('Editar')
    setIdProd(id)
    setColorIsBtnSave('bg-yellow-500')
    setMsnAlert(`Llego a ${isBtnSave} el producto`)
    setModal(true)

    const getInfoProduct = products.filter((prod) => prod.id_ == id)
    if (getInfoProduct) {
      setDetProd(getInfoProduct[0])
    }
  }

  const crearProducto = () => {
    setModal(true)
    setIsBtnSave('Guardar')
    setColorIsBtnSave('bg-blue-500')
    setIdProd('')
    getCod('')
    getNom('')
    getPre('')
    getCan('')
    getCatId('')
    getMarId('')
    getUniId('')
    setImageUrl('')
    getDet('')
  }

  const eliminarProducto = () => {
    setAlertConfirm(false)
    setIsOpen(true)
    setMsnAlert(`Se eliminó el producto`)
    const filterProduct = products.filter((prod) => prod.cod_ != codProd)
    setProducts(filterProduct)
  }

  const handleDelete = (cod) => {
    setAlertConfirm(true)
    setCodProd(cod)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(false)
    setIsOpen(true)

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson)
  }

  const filtrarPor = (e) => {
    e.preventDefault()
    let prod_ = productRef.current
    if (tipoFiltro == 'categoria') {
      setProducts(prod_.filter(prod => { return prod.cat_.toLowerCase().includes(filtro.toLowerCase()) }))
    } else if (tipoFiltro == 'codigo') {
      setProducts(prod_.filter(prod => { return prod.cod_.toLowerCase().includes(filtro.toLowerCase()) }))
    } else if (tipoFiltro == 'producto') {
      setProducts(prod_.filter(prod => { return prod.nom_.toLowerCase().includes(filtro.toLowerCase()) }))
    } else if (tipoFiltro == 'marca') {
      setProducts(prod_.filter(prod => { return prod.mar_.toLowerCase().includes(filtro.toLowerCase()) }))
    } else if (tipoFiltro == 'unida') {
      setProducts(prod_.filter(prod => { return prod.cat_.toLowerCase().includes(filtro.toLowerCase()) }))
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

  return (
    <MainLayout
      title="Productoss"
      description="pagina para gestionar productos"
    >
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full rounded-lg text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg transition-all bg-white">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="p-6 text-center">
                      <CheckCircleIcon className="mx-auto mb-4 text-yellow-500 w-14 h-14 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Felicitaciones
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{msnAlert}</p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>

              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition show={isAlertConfirm} as={Fragment}>
        <Dialog
          onClose={() => setAlertConfirm(false)}
          className="relative z-50"
        >
          <Transition.Child
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full rounded-lg text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg transition-all bg-white">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="p-6 text-center">
                      <ExclamationCircleIcon className="mx-auto mb-4 text-red-500 w-14 h-14 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Esta seguro de eliminar?
                      </h3>
                      <button
                        onClick={() => eliminarProducto()}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                      >
                        Si, Estoy seguro
                      </button>
                      <button
                        onClick={() => setAlertConfirm(false)}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        No, cancelar
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition show={isModal} as={Fragment}>
        <Dialog onClose={() => setModal(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full lg:max-w-1/2 md:max-w-5xl rounded-lg text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg transition-all bg-white">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left [&_h2]:text-base [&_h2]:text-4xl [&_h2]:font-semibold [&_h2]:leading-6 [&_h2]:text-gray-900">
                      <Dialog.Title>Producto</Dialog.Title>
                    </div>
                    <div className="mt-2 mb-4 pt-6">

                      <form method="post" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 md:gap-6">
                          <div className='&_select]:bg-gray-50 [&_select]:border [&_select]:border-gray-300 [&_select]:text-gray-900 [&_select]:text-sm [&_select]:rounded-lg [&_select]:focus:ring-blue-500 [&_select]:focus:border-blue-500 [&_select]:block [&_select]:w-full [&_select]:p-2.5'>
                            <div className="grid md:grid-cols-2 md:gap-6">
                              <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="cod_" onChange={e => getCod(e.target.value)} value={cod_} id={`${idForm}-codigo`} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor={`${idForm}-codigo`} className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Código</label>
                                <input type="hidden" name="id_" id={`${idForm}-id`} value={idProd} />
                              </div>
                              <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="prod_" onChange={e => getNom(e.target.value)} value={nom_} id={`${idForm}-nombre`} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor={`${idForm}-nombre`} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Producto</label>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                              <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="pre_" onChange={e => getPre(e.target.value)} value={pre_} id={`${idForm}-precio`} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor={`${idForm}-precio`} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Precio</label>
                              </div>
                              <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="can_" onChange={e => getCan(e.target.value)} value={can_} id={`${idForm}-cantidad`} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor={`${idForm}-cantidad`} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cantidad</label>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-3 md:gap-6">
                              <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor={`${idForm}-categoria`} className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Categoria</label>
                                <select id={`${idForm}-categoria`} name="cat_" value={catId} onChange={e => getCatId(e.target.value)}>
                                  <option value="">Selecionar</option>
                                  <option value="1">Bebidas</option>
                                  <option value="2">Embutidos</option>
                                  <option value="3">Lácteos</option>
                                  <option value="4">Abarrotes</option>
                                </select>
                              </div>
                              <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor={`${idForm}-marca`} className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Marca</label>
                                <select id={`${idForm}-marca`} name="mar_" value={marId} onChange={e => getMarId(e.target.value)}>
                                  <option value="">Selecionar</option>
                                  <option value="1">Inka kola</option>
                                  <option value="2">Kola inglesa</option>
                                  <option value="3">Breadt</option>
                                  <option value="4">La Segoviana</option>
                                  <option value="5">Gloria</option>
                                  <option value="6">Laive</option>
                                  <option value="7">Costeño</option>
                                  <option value="8">Florida</option>
                                </select>
                              </div>
                              <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor={`${idForm}-unidadmedida`} className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Unidad Medida</label>
                                <select id={`${idForm}-unidadmedida`} name="uni_" value={uniId} onChange={e => getUniId(e.target.value)}>
                                  <option value="">Selecionar</option>
                                  <option value="1">Caja 6 unidades</option>
                                  <option value="2">1 Lt</option>
                                  <option value="3">Paquete</option>
                                  <option value="4">200g</option>
                                  <option value="5">Pack x6 400g</option>
                                  <option value="6">Tripack Caja 1L</option>
                                  <option value="7">1.8kg</option>
                                  <option value="8">5kg</option>
                                  <option value="9">140g</option>
                                </select>
                              </div>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                              <label htmlFor={`${idForm}-descripcion`} className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Descripción</label>
                              <textarea onChange={e => getDet(e.target.value)} name="des_" value={det_} id={`${idForm}-descripcion`} rows={2} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-0 border-b-2 border-gray-300 focus:ring-blue-500 focus:border-0 focus:border-b-2 focus:border-blue-600" placeholder="Descripción"></textarea>
                            </div>
                          </div>
                          <div>
                            <div className="relative z-0 w-full mb-6 group">
                              <label
                                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                                htmlFor={`${idForm}-imagen`}
                              >
                                Cargar imagen
                              </label>
                              <input
                                onChange={e =>
                                  setSelectedImage(e.target.files[0])
                                }
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby={`${idForm}-imagen_help`}
                                id={`${idForm}-imagen`} name="file"
                                type="file"
                              />
                              <input type="hidden" value={imageUrl} id={`${idForm}-img`} name='img_' />
                              {imageUrl && (
                                <img
                                  src={imageUrl}
                                  alt={nom_}
                                  className='h-52 w-max-full'
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className={`text-white ${isColorBtnSave} hover:${isColorBtnSave}/55 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4] mr-2 mb-2`}
                        >
                          <ArchiveBoxIcon className="h-6 w-6 text-white" />
                          <span>{isBtnSave}</span>
                        </button>
                        <button
                          onClick={() => setModal(false)}
                          className="text-white bg-red-500 hover:bg-danger-100 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                        >
                          <XMarkIcon className="h-6 w-6 text-white" />
                          <span>Cancelar</span>
                        </button>
                      </form>

                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


      <div class='container m-auto mb-8 md:mb-20'>
        <main className="px-4 md:px-10 mx-auto -m-28 pt-10 w-full m-auto mt-10 relative">
          <div className="w-full mb-12 px-4 -mt-36">
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
                  <div className="basis-1/2">
                    <div className="mb-3 xl:w-full">
                      <div className="relative mb-4 flex-wrap items-stretch">
                        <form id={`${idForm}-search-form`} onSubmit={filtrarPor}>
                          <div className="flex relative">
                            <select
                              name="tipo_filtro"
                              id={`${idForm}-tipofiltro`}
                              value={tipoFiltro}
                              onChange={e => { setTipoFiltro(e.target.value) }}
                              className="m-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                              className="-mr-0.5 w-full block  min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-gray-500 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-gray-300"
                              placeholder="Buscar"
                              aria-label="Search"
                              aria-describedby="button-addon1"
                              value={filtro}
                              onChange={e => setFiltro(e.target.value)}
                            />
                            <button
                              className="z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg"
                              type="submit"
                              id="button-addon1"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                            >
                              <MagnifyingGlassIcon className="h-6 w-6 text-black" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProductList showProduct={verDetalleProducto} deleteProduct={handleDelete} products={products} />
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}
