<<<<<<< HEAD:qtify/src/components/SearchBar/Search.jsx
import React from 'react'
import styles from "./Search.module.css"
import {ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg'

const Search = ({placeholder}) => {
  return (
    <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder}/>
        <button className={styles.searchButton} type='submit'>
            <SearchIcon />
        </button>
    </form>
  )
}

=======
import React from 'react'
import styles from "./Search.module.css"
import {ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg'

const Search = ({placeholder}) => {
  return (
    <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder}/>
        <button className={styles.searchButton} type='submit'>
            <SearchIcon />
        </button>
    </form>
  )
}

>>>>>>> L-square-QTify/main:src/components/SearchBar/Search.jsx
export default Search