import React from 'react'

import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import Modal from './AddMeasures'

const MeasuresList = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-xl bg-gray-100 sm:rounded-lg">
        <h2 className="font-bold px-12 py-12 text-2xl  inline-flex">
          Gestionar unidades de medidas
        </h2>
        {/* <button
          onClick={''}
          type="button"
          className="text-white inline-flex  bg-emerald-800 hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-emerald-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-emerald-800/55 mr-6 mb-2"
        >
          <PlusIcon className="h-6 w-6 text-white" />
          <span>Agregar</span>
        </button> */}

        <Modal />

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Codigo
              </th>
              <th scope="col" className="px-6 py-3">
                Simbolo
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                UNITCOD01
              </th>
              <td className="px-6 py-4">Kg</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                UNITCOD02
              </th>
              <td className="px-6 py-4">Lt</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                UNITCOD03
              </th>
              <td className="px-6 py-4">gr</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>

            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                UNITCOD04
              </th>
              <td className="px-6 py-4">Pulgadas</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default MeasuresList
