import {
  ArchiveBoxIcon,
  PlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Modal() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        className="text-white inline-flex  bg-emerald-800 hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-emerald-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-emerald-800/55 mr-6 mb-2 transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <PlusIcon className="h-6 w-6 text-white" />
        <span>Agregar</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    Agregar unidad de medida
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex w-72 flex-col items-end gap-6">
                    <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[10px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Codigo
                      </label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[10px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Unidad de medida
                      </label>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-6">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> */}

                  <button
                    className="text-white inline-flex  bg-emerald-800 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-emerald-800/55 mr-6 mb-2 transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Guardar
                  </button>

                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white inline-flex  bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-emerald-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-emerald-800/55 mr-6 mb-2 transition-all duration-150"
                  >
                    <span className="">Cancelar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
