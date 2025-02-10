import {NavLink} from 'react-router'

import styles from '../Componentes/Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.notActive}>Home</NavLink>
        <NavLink to="/produtos" className={({ isActive }) => isActive ? styles.active : styles.notActive}>Produtos</NavLink>
        <NavLink to="/sobre" className={({ isActive }) => isActive ? styles.active : styles.notActive}>Sobre</NavLink>
    </nav>
  )
}

export default Navbar