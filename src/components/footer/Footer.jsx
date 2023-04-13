import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_img}>
          <img src="/logo-redim-white.png" alt="logo" />
        </div>
        <div className={styles.footer_text_center}>
          <p>Plataforma de gestion de inventario</p>
        </div>
        <div className={styles.footer_text_right}>
          <p>© 2023 Todos los derechos reservados.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
