<<<<<<< HEAD:qtify/src/components/Navbar/Navbar.jsx
import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css'
import Search from '../SearchBar/Search'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <Search placeholder='Search an album of your choice'/>
        <Button children='Give Feedback'/>
    </nav>
  )
}

=======
import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css'
import Search from '../SearchBar/Search'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <Search placeholder='Search an album of your choice'/>
        <Button children='Give Feedback'/>
    </nav>
  )
}

>>>>>>> L-square-QTify/main:src/components/Navbar/Navbar.jsx
export default Navbar