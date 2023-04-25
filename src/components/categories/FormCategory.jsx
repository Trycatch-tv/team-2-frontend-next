import React from 'react'
import styles from './styles/FormCategory.module.css'

export default function FormCategory({
  handlerInputChange,
  data,
  handlerForm,
  saveCategory,
  updateCategory
}) {
  return (
    <div className={styles.container}>
      <div className="text-lg font-semibold">
        {data.id == '' ? 'Agregar Categoria' : 'Actualizar categoria'}
      </div>
      <div className={styles.form}>
        <form onSubmit={handlerForm}>
          <div className="relative h-10 w-full min-w-[200px]">
            <input
              className="peer h-full w-full rounded-[7px] border-b border-l border-r border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              type="text"
              name="code"
              value={data.code}
              onChange={handlerInputChange}
              placeholder=" "
            />
            <label
              className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[10px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              htmlFor="code"
            >
              Codigo
            </label>
          </div>
          <div className="relative h-10 w-full min-w-[200px]">
            <input
              className="peer h-full w-full rounded-[7px] border-b border-l border-r border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              type="text"
              name="category"
              value={data.category}
              onChange={handlerInputChange}
              placeholder=" "
            />
            <label
              className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[10px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              htmlFor="category"
            >
              Categoria
            </label>
          </div>
          <div className="block w-full flex items-left justify-left border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <select
              className="px-2"
              required
              defaultValue={'default'}
              name="status"
              onChange={handlerInputChange}
            >
              <option value="default" disabled>
                Seleccionar Estado
              </option>
              <option value="activo">Activa</option>
              <option value="inactivo">Inactiva</option>
            </select>
          </div>
          <div>
            <div className="flex items-center justify-end pt-12">
              {data.id == '' ? (
                <button
                  className="text-white inline-flex  bg-emerald-800 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-emerald-800/55 mr-6 mb-2 transition-all duration-150"
                  onClick={saveCategory}
                >
                  Guardar
                </button>
              ) : (
                <button
                  className="text-white inline-flex  bg-emerald-800 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-emerald-800/55 mr-6 mb-2 transition-all duration-150"
                  onClick={updateCategory}
                >
                  Actualizar
                </button>
              )}

              <button className="text-white inline-flex  bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-emerald-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-emerald-800/55 mr-6 mb-2 transition-all duration-150">
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
