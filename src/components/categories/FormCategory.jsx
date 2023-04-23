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
      <div className={styles.title}>
        {data.id == '' ? 'Agregar Categoria' : 'Actualizar categoria'}
      </div>
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
            <select
              required
              defaultValue={'default'}
              name="status"
              onChange={handlerInputChange}
            >
              <option value="default" disabled>
                Seleccionar
              </option>
              <option value="activo">Activa</option>
              <option value="inactivo">Inactiva</option>
            </select>
          </div>
          <div>
            <div className={styles.buttons}>
              {data.id == '' ? (
                <button className={styles.buttonSave} onClick={saveCategory}>
                  Guardar
                </button>
              ) : (
                <button className={styles.buttonSave} onClick={updateCategory}>
                  Actualizar
                </button>
              )}

              <button className={styles.buttonCancel}>Cancelar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
