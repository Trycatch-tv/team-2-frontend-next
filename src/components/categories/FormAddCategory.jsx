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
          <div className={styles.property}>
            <label htmlFor="code">Codigo:</label>
            <input
              type="text"
              name="code"
              value={data.code}
              onChange={handlerInputChange}
              placeholder="Codigo"
            />
          </div>
          <div className={styles.property}>
            <label htmlFor="category">Categoria:</label>
            <input
              type="text"
              name="category"
              value={data.category}
              onChange={handlerInputChange}
              placeholder="Categoria"
            />
          </div>
          <div className={styles.property}>
            <label htmlFor="status">Estatus:</label>
            <select required name="status" onChange={handlerInputChange}>
              <option selected disabled>
                Selecionar
              </option>
              <option value="activo">Activa</option>
              <option value="inactivo">Inactiva</option>
            </select>
          </div>
          <div>
            <div className={styles.buttons}>
              <button className={styles.buttonSave} onClick={setState}>
                Guardar
              </button>
              <button className={styles.buttonCancel} onClick={setState}>
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
