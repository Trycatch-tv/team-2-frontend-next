import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className=" bg-emerald-800 p-16 text-white   items-center justify-between md:flex">
      <div className=" md:w-60">
        <img src="/logo-redim-white.png" alt="logo" />
      </div>
      <div className="text-center pt-2">
        <p>Plataforma de gestion de inventario</p>
      </div>
      <div className="text-center pt-2">
        <p>© 2023 Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer
