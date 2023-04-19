import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'
import styles from './styles/AddAndFilter.module.css'

export default function AddAndFilter({ title, handlerState }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.add}>
        <button onClick={handlerState}>
          <PlusIcon width={'20px'} />
          <span>Agregar</span>
        </button>
      </div>
      <div className={styles.filter}>
        <div>
          <select name="" id="">
            <option selected disabled value="">
              Selecionar
            </option>
            <option value="">Codigo</option>
            <option value="">Categoria</option>
            <option value="">Estatus</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Buscar" />
        </div>
        <div>
          <button>
            <MagnifyingGlassIcon width={'20px'} />
          </button>
        </div>
      </div>
    </div>
  )
}
