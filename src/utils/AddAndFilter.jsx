import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'
import styles from './styles/AddAndFilter.module.css'

export default function AddAndFilter({
  title,
  handlerState,
  optionsSelect,
  handlerFilter
}) {
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
          <select
            name="select"
            defaultValue={'default'}
            onChange={handlerFilter}
          >
            <option value="default" disabled>
              Seleccionar
            </option>
            {optionsSelect &&
              optionsSelect.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Buscar"
            name="value"
            onChange={handlerFilter}
          />
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
