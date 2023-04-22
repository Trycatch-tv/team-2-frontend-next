import React from 'react'
import styles from './styles/FormBrand.module.css'

export default function FormBrand({
  handlerInputChange,
  data,
  handlerForm,
  saveBrand,
  updateBrand
}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {data.id == '' ? 'Agregar Marca' : 'Actualizar Marca'}
      </div>
      <div className={styles.form}>
        <form onSubmit={handlerForm}>
          <div className={styles.property}>
            <label htmlFor="brand">Marca:</label>
            <input
              type="text"
              name="brand"
              value={data.brand}
              onChange={handlerInputChange}
              placeholder="Marca"
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
                <button className={styles.buttonSave} onClick={saveBrand}>
                  Guardar
                </button>
              ) : (
                <button className={styles.buttonSave} onClick={updateBrand}>
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
