import React from 'react'
import styles from './styles/CategoriesList.module.css'

const categoriesHeader = ['Codigo', 'Categoria']

export default function CategoriesList() {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Categoria</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}
