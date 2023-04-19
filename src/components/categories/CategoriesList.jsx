import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import styles from './styles/CategoriesList.module.css'

const categoriesHeader = ['Codigo', 'Categoria']

export default function CategoriesList({ array, deleteCategory }) {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Categoria</th>
            <th>Estado</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {array &&
            array.map(item => (
              <tr key={item.id}>
                <td>{item.codigo}</td>
                <td>{item.categoria}</td>
                <td>{item.estado}</td>
                <td>
                  <button onClick={() => console.log(item.id)}>
                    <PencilSquareIcon />
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteCategory(item.id)}>
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
