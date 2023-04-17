import React from 'react'
import styles from './styles/FormAddCategory.module.css'

export default function FormAddCategory({
  title,
  setState,
  handlerInputChange,
  data,
  handlerForm
}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.form}>
        <form onSubmit={handlerForm}>
          <input
            type="text"
            name="code"
            value={data.code}
            onChange={handlerInputChange}
            placeholder="Codigo"
          />
          <input
            type="text"
            name="category"
            value={data.category}
            onChange={handlerInputChange}
            placeholder="Categoria"
          />
          <div className={styles.buttons}>
            <button className={styles.buttonSave}>Guardar</button>
            <button className={styles.buttonCancel} onClick={setState}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
