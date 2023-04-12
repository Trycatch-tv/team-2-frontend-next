import styles from './navbar.module.css'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react'

export const MenuNavHome = ({ item1, item2, item3 }) => (
  <>
    <p>
      <a href="/productos">{item1}</a>
    </p>
    <p>
      <a href="/register">{item2}</a>
    </p>
    <p>
      <a href="/categories">{item3}</a>
    </p>
  </>
)

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_links_logo}>
          <img src="/logo-redim.png" alt="logo redimensionado" />
        </div>

        <div className={styles.navar_links}>
          <div className={styles.navbar_links_container}>
            <MenuNavHome
              item1={'Productos'}
              item2={'Registrar Productos'}
              item3={'Gestionar Categoria'}
            />
          </div>
        </div>

        <div className={styles.navbar_sign}>
          <p>
            <a href="/login">Sign In</a>
          </p>
        </div>

        <div className={styles.navbar_menu}>
          {toggleMenu ? (
            <RiCloseLine
              color="black"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenuLine
              color="black"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className={styles.navbar_menu_container}>
              <div className={styles.navbar_menu_container_links}>
                <MenuNavHome
                  item1={'Productos'}
                  item2={'Registrar Productos'}
                  item3={'Gestionar Categoria'}
                />
                <div className={styles.navbar_menu_container_links_sign}>
                  <a href="/login">
                    <button type="button">Sign In</button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
