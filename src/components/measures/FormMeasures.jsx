import React from 'react'
import styles from '../categories/styles/FormCategory.module.css'

export default function FormMeasures({
  handlerInputChange,
  data,
  handlerForm,
  saveMeasure,
  updateMeasure
}) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          {data.id == ''
            ? 'Agregar Unidad de Medida'
            : 'Actualizar Unidad de Medida'}
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
              <label htmlFor="measure">Unidad de medida:</label>
              <input
                type="text"
                name="measure"
                value={data.measure}
                onChange={handlerInputChange}
                placeholder="Unidad de medida"
              />
            </div>
            <div className={styles.property}>
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
                  <button className={styles.buttonSave} onClick={saveMeasure}>
                    Guardar
                  </button>
                ) : (
                  <button className={styles.buttonSave} onClick={updateMeasure}>
                    Actualizar
                  </button>
                )}

                <button className={styles.buttonCancel}>Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
