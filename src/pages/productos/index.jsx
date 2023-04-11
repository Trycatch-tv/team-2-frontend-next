import { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PencilSquareIcon, TrashIcon, PlusIcon, ArchiveBoxIcon, XMarkIcon, MagnifyingGlassIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

export default function Productos() {
    let [isOpen, setIsOpen] = useState(false)
    let [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    let [isBtnSave, setIsBtnSave] = useState('Guardar')
    let [isColorBtnSave, setColorIsBtnSave] = useState('#4285F4')
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    function editarProducto() {
        setIsBtnSave('Editar')
        setColorIsBtnSave('bg-yellow-500')
        setIsOpen(true)
    }

    function crearProducto() {
        setIsBtnSave('Guardar')
        setColorIsBtnSave('bg-blue-500')
        setIsOpen(true)
    }

    function eliminarProducto() {
        setIsConfirmationOpen(true)
    }

    function completeOrder() {
        // ...
    }

    return (
        <>
            <Transition
                show={isConfirmationOpen}
                as={Fragment}
            >
                <Dialog onClose={() => setIsConfirmationOpen(false)} className="relative z-50">
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

                                        <div class="p-6 text-center">
                                            <ExclamationCircleIcon class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" />
                                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Esta seguro de eliminar?</h3>
                                            <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                Si, Estoy seguro
                                            </button>
                                            <button onClick={() => setIsConfirmationOpen(false)} data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancelar</button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Transition
                show={isOpen}
                as={Fragment}
            >
                <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
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
                                            <form id="guardarproducto" className="[&_select]:bg-gray-50 [&_select]:border [&_select]:border-gray-300 [&_select]:text-gray-900 [&_select]:text-sm [&_select]:rounded-lg [&_select]:focus:ring-blue-500 [&_select]:focus:border-blue-500 [&_select]:block [&_select]:w-full [&_select]:p-2.5">
                                                <div className="grid grid-flow-col gap-4 md:grid-cols-2 md:gap-6 [&_input]:block [&_input]:py-2.5 [&_input]:px-0 [&_input]:w-full [&_input]:text-sm [&_input]:text-gray-900 [&_input]:bg-transparent [&_input]:border-0 [&_input]:border-b-2 [&_input]:border-gray-300 [&_input]:appearance-none [&_input]:focus:ring-0 [&_input]:peer">
                                                    <div className="relative z-0 w-full group">
                                                        <label for="countries" className="block text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                                                        <select id="categoria">
                                                            <option>Bebidas</option>
                                                            <option>Embutidos</option>
                                                            <option>Lácteos</option>
                                                            <option>Abarrotes</option>
                                                        </select>
                                                    </div>
                                                    <div className="relative z-0 w-full group">
                                                        <input type="codigo" name="floating_codigo" id="floating_codigo" className="focus:border-blue-600 focus:outline-none" placeholder=" " required />
                                                        <label for="floating_codigo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Código</label>
                                                    </div>
                                                    <div className="relative z-0 w-full group">
                                                        <input type="producto" name="floating_producto" id="floating_producto" className="focus:border-blue-600 focus:outline-none" placeholder=" " required />
                                                        <label for="floating_producto" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Producto</label>
                                                    </div>
                                                    <div className="relative z-0 w-full group">
                                                        <label for="countries" className="block text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                                                        <select id="marca">
                                                            <option>Inka kola</option>
                                                            <option>Kola inglesa</option>
                                                            <option>Breadt</option>
                                                            <option>La Segoviana</option>
                                                            <option>Gloria</option>
                                                            <option>Laive</option>
                                                            <option>Costeño</option>
                                                            <option>Florida</option>
                                                        </select>
                                                    </div>
                                                    <div className="relative z-0 w-full6 group">
                                                        <label for="countries" className="blocktext-sm font-medium text-gray-900 dark:text-white">Unidad de medida</label>
                                                        <select id="unidadmedida">
                                                            <option>Caja 6 unidades</option>
                                                            <option>1 Lt</option>
                                                            <option>Paquete</option>
                                                            <option>200g</option>
                                                            <option>Pack x6 400g</option>
                                                            <option>Tripack Caja 1L</option>
                                                            <option>1.8kg</option>
                                                            <option>5kg</option>
                                                            <option>140g</option>
                                                        </select>
                                                    </div>
                                                    <div className="row-span-5">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Cargar imagen</label>
                                                        <input onChange={(e) => setSelectedImage(e.target.files[0])} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                                                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Imagen del articulo</div>
                                                        {imageUrl && selectedImage && (
                                                            <img src={imageUrl} alt={selectedImage.name} height="100px" />
                                                        )}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <button onClick={completeOrder} type="button" className={`text-white ${isColorBtnSave} hover:${isColorBtnSave}/55 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4] mr-2 mb-2`}>
                                            <ArchiveBoxIcon className="h-6 w-6 text-white" />
                                            <span>{isBtnSave}</span>
                                        </button>
                                        <button onClick={() => setIsOpen(false)} className="text-white bg-red-500 hover:bg-danger-100 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                            <XMarkIcon className="h-6 w-6 text-white" />
                                            <span>Cancelar</span>
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <div className="mt-40"></div>
            <main className="px-4 md:px-10 mx-auto -m-16 w-10/12 m-auto mt-10 mb-20 relative">
                <div className="w-full mb-12 px-4 -mt-36">
                    <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="px-4 max-w-full flex-grow basis-1/2">
                                    <h2 className="font-semibold text-2xl text-blueGray-700 inline-flex">Productos</h2>
                                    <button onClick={crearProducto} type="button" className="text-white inline-flex float-right bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                        <PlusIcon className="h-6 w-6 text-white" />
                                        <span>Agregar</span>
                                    </button>
                                </div>
                                <div className="basis-1/2">
                                    <div className="mb-3 xl:w-full">

                                        <div className="relative mb-4 flex-wrap items-stretch">
                                            <div className="flex relative">
                                                <select name="" id="" className="m-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">Selecionar</option>
                                                    <option value="abarrotes">Categoria</option>
                                                    <option value="bebidas">Codigo</option>
                                                    <option value="embutios">Producto</option>
                                                    <option value="lacteos">Marca</option>
                                                    <option value="umedida">Unida Medida</option>
                                                </select>
                                                <input
                                                    type="search"
                                                    className="-mr-0.5 w-full block  min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                                    placeholder="Buscar"
                                                    aria-label="Search"
                                                    aria-describedby="button-addon1" />
                                                <button
                                                    className="z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                                    type="button"
                                                    id="button-addon1"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">
                                                    <MagnifyingGlassIcon className="h-6 w-6 text-black" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr className="[&_th]:px-6 [&_th]:align-middle [&_th]:border [&_th]:border-solid [&_th]:py-3 [&_th]:text-xl [&_th]:border-l-0 [&_th]:border-r-0 [&_th]:whitespace-nowrap [&_th]:font-semibold [&_th]:text-left [&_th]:text-oscuro">
                                        <th>#</th>
                                        <th>Categoría</th>
                                        <th>Código</th>
                                        <th>Producto</th>
                                        <th>Marca</th>
                                        <th>Unida Medida</th>
                                        <th>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="[&_td]:border-t-0 [&_td]:px-6 [&_td]:align-middle [&_td]:border-l-0 [&_td]:border-r-0 [&_td]:text-mb [&_td]:whitespace-nowrap [&_td]:p-4">
                                    <tr>
                                        <td>1</td>
                                        <td>Bebidas</td>
                                        <td>COD001</td>
                                        <td>Gaseosa</td>
                                        <td>Inka kola</td>
                                        <td>Caja 6 unidades</td>
                                        <td className="flex gap-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded" onClick={editarProducto}>
                                                <PencilSquareIcon className="h-6 w-6 text-white" />
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded" onClick={eliminarProducto}>
                                                <TrashIcon className="h-6 w-6 text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Bebidas</td>
                                        <td>COD002</td>
                                        <td>Gaseosa</td>
                                        <td>Kola inglesa</td>
                                        <td>1 Lt</td>
                                        <td className="flex gap-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded" onClick={editarProducto}>
                                                <PencilSquareIcon className="h-6 w-6 text-white" />
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded">
                                                <TrashIcon className="h-6 w-6 text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Embutidos</td>
                                        <td>COD003</td>
                                        <td>Jamon del país</td>
                                        <td>Breadt</td>
                                        <td>Paquete</td>
                                        <td className="flex gap-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded" onClick={editarProducto}>
                                                <PencilSquareIcon className="h-6 w-6 text-white" />
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded">
                                                <TrashIcon className="h-6 w-6 text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Embutidos</td>
                                        <td>COD004</td>
                                        <td>Jamón del país</td>
                                        <td>La Segoviana</td>
                                        <td>200g</td>
                                        <td className="flex gap-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded" onClick={editarProducto}>
                                                <PencilSquareIcon className="h-6 w-6 text-white" />
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded">
                                                <TrashIcon className="h-6 w-6 text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Lácteos</td>
                                        <td>COD005</td>
                                        <td>Mantequilla con Sal</td>
                                        <td>Gloria</td>
                                        <td>200g</td>
                                        <td className="flex gap-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded" onClick={editarProducto}>
                                                <PencilSquareIcon className="h-6 w-6 text-white" />
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded">
                                                <TrashIcon className="h-6 w-6 text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Lácteos</td>
                                        <td>COD006</td>
                                        <td>Leche Light</td>
                                        <td>Gloria</td>
                                        <td>Pack x6 400g</td>
                                        <td className="flex gap-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded" onClick={editarProducto}>
                                                <PencilSquareIcon className="h-6 w-6 text-white" />
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded">
                                                <TrashIcon className="h-6 w-6 text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Lácteos</td>
                                        <td>COD007</td>
                                        <td>Leche Parcialmente Descremada Sin Lactosa</td>
                                        <td>Gloria</td>
                                        <td>Tripack Caja 1L</td>
                                        <td className="flex gap-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded" onClick={editarProducto}>
                                                <PencilSquareIcon className="h-6 w-6 text-white" />
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded">
                                                <TrashIcon className="h-6 w-6 text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Lácteos</td>
                                        <td>COD008</td>
                                        <td>Yogurt Bebible Sabor Vainilla Francesa</td>
                                        <td>Laive</td>
                                        <td>1.8kg</td>
                                        <td className="flex gap-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded" onClick={editarProducto}>
                                                <PencilSquareIcon className="h-6 w-6 text-white" />
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded">
                                                <TrashIcon className="h-6 w-6 text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Abarrotes</td>
                                        <td>COD009</td>
                                        <td>Arroz Extra</td>
                                        <td>Costeño</td>
                                        <td>5kg</td>
                                        <td className="flex gap-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded" onClick={editarProducto}>
                                                <PencilSquareIcon className="h-6 w-6 text-white" />
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded">
                                                <TrashIcon className="h-6 w-6 text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Abarrotes</td>
                                        <td>COD0010</td>
                                        <td>Filete de Atún en Aceite</td>
                                        <td>Florida</td>
                                        <td>140g</td>
                                        <td className="flex gap-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded" onClick={editarProducto}>
                                                <PencilSquareIcon className="h-6 w-6 text-white" />
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded">
                                                <TrashIcon className="h-6 w-6 text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}