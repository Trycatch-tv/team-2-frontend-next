import { useId } from "react"
import {
    ArchiveBoxIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'

export default function FormProduct({
    handleSubmit,
    handlerInputChange,
    setSelectedImage, closeModal,
    initialFocus,
    color,
    nombBtn,
    data, imageUrl,
    marcas,
    categorias,
    uniMed
}) {
    const idForm = useId()

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-1 md:gap-6">
                <div className="&_select]:bg-gray-50 [&_select]:border [&_select]:border-gray-300 [&_select]:text-gray-900 [&_select]:text-sm [&_select]:rounded-lg [&_select]:focus:ring-blue-500 [&_select]:focus:border-blue-500 [&_select]:block [&_select]:w-full [&_select]:p-2.5">
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="hidden"
                                name="id_"
                                id={`${idForm}-id`}
                                value={data.id_}
                            />
                            <input
                                type="text"
                                name="prod_"
                                onChange={handlerInputChange}
                                defaultValue={data.nom_}
                                id={`${idForm}-nombre`}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor={`${idForm}-nombre`}
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Producto
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="pre_"
                                onChange={handlerInputChange}
                                value={data.pre_}
                                id={`${idForm}-precio`}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor={`${idForm}-precio`}
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Precio
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="can_"
                                onChange={handlerInputChange}
                                value={data.can_}
                                id={`${idForm}-cantidad`}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor={`${idForm}-cantidad`}
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Cantidad
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <label
                                htmlFor={`${idForm}-categoria`}
                                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                            >
                                Categoria
                            </label>
                            <select
                                id={`${idForm}-categoria`}
                                name="cat_"
                                defaultValue={data.catId}
                            >
                                {
                                    categorias &&
                                    categorias.map((cat, ind) => {
                                        return (
                                            <option key={ind++} value={cat.id}>{cat.categoria}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label
                                htmlFor={`${idForm}-marca`}
                                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                            >
                                Marca
                            </label>
                            <select
                                id={`${idForm}-marca`}
                                name="mar_"
                                defaultValue={data.marId}
                            >
                                {
                                    marcas &&
                                    marcas.map((mar, ind) => {
                                        return (
                                            <option key={ind} value={mar.id}>{mar.marca}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label
                                htmlFor={`${idForm}-unidadmedida`}
                                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                            >
                                Unidad Medida
                            </label>
                            <select
                                id={`${idForm}-unidadmedida`}
                                name="uni_"
                                defaultValue={data.unmId}
                            >
                                <option key={1} value="">Selecionar</option>
                                {
                                    uniMed &&
                                    uniMed.map((uni, ind) => {
                                        return (
                                            <option key={ind++} value={uni.id}>{uni.unidad_medida}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label
                            htmlFor={`${idForm}-descripcion`}
                            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                        >
                            Descripción
                        </label>
                        <textarea
                            onChange={handlerInputChange}
                            name="des_"
                            value={data.des_}
                            id={`${idForm}-descripcion`}
                            rows={2}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-0 border-b-2 border-gray-300 focus:ring-blue-500 focus:border-0 focus:border-b-2 focus:border-blue-600"
                            placeholder="Descripción"
                        ></textarea>
                    </div>
                </div>
                <div className="hidden">
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
                            id={`${idForm}-imagen`}
                            name="file"
                            type="file"
                        />
                        <input
                            type="hidden"
                            value={imageUrl}
                            id={`${idForm}-img`}
                            name="img_"
                        />
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt={data.nom_}
                                className="h-52 w-max-full"
                            />
                        )}
                    </div>
                </div>
            </div>
            <button
                ref={initialFocus}
                type="submit"
                className={`text-white ${color} hover:${color}/55 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4] mr-2 mb-2`}
            >
                <ArchiveBoxIcon className="h-6 w-6 text-white" />
                <span>{nombBtn}</span>
            </button>
            <button
                onClick={closeModal}
                className="text-white bg-red-500 hover:bg-danger-100 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
                <XMarkIcon className="h-6 w-6 text-white" />
                <span>Cancelar</span>
            </button>
        </form>
    )
}