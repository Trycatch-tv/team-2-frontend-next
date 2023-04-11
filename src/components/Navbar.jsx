import styles from './navbar.module.css'
import { CustomActiveLink } from './CustomActiveLink'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  }
]
export const Navbar = () => {
  return (
    <nav className={styles.menuContainer}>
      {menuItems.map(item => (
        <CustomActiveLink key={item.href} text={item.text} href={item.href} />
      ))}
    </nav>
  )
}
