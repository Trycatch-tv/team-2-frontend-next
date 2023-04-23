import React, { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import {
    ExclamationCircleIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline'

const elementos = [
    { titulo: "Felicitaciones", subtitulo: "Se eliminó de manera correcta" },
    { titulo: "Felicitaciones", subtitulo: "Se guardo de manera correcta" },
    { titulo: "Esta seguro de eliminar?", subtitulo: "" }
]

export default function Alerta({ tipo, valor, eliminarProductos, closeAlert }) {
    let info = tipo == 2 ? ({ titulo: "Esta seguro de eliminar?", subtitulo: "" }) : (tipo == 1 ? ({ titulo: "Felicitaciones", subtitulo: "Se guardo de manera correcta" }) : ({ titulo: "Felicitaciones", subtitulo: "Se eliminó de manera correcta" }))
    console.log(elementos[tipo])
    console.log(valor)
    console.log(tipo)
    return (
        <Transition show={valor} as={Fragment}>
            <Dialog onClose={closeAlert}>
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
                                        {
                                            (tipo == 2) ?
                                                (
                                                    <ExclamationCircleIcon className="mx-auto mb-4 text-yellow-500 w-14 h-14 dark:text-gray-200" />
                                                ) : (
                                                    <CheckCircleIcon className="mx-auto mb-4 text-yellow-500 w-14 h-14 dark:text-gray-200" />
                                                )
                                        }
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                            {info.titulo}
                                        </h3>
                                        {
                                            (tipo == 2) ?
                                                (
                                                    <>
                                                        <button
                                                            onClick={eliminarProductos}
                                                            data-modal-hide="popup-modal"
                                                            type="button"
                                                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                                        >
                                                            Si, Estoy seguro
                                                        </button>
                                                        <button
                                                            onClick={closeAlert}
                                                            data-modal-hide="popup-modal"
                                                            type="button"
                                                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                                        >
                                                            No, cancelar
                                                        </button>
                                                    </>
                                                ) :
                                                (
                                                    <div className="mt-2"><p className="text-sm text-gray-500">{info.subtitulo}</p></div>
                                                )
                                        }
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}