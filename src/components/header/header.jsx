import React from 'react'
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.img_container}>
        <img src='src\assets\Image-not-found.png' height={45}></img>
      </div>
      <div className={styles.text_container}>Header</div>
    </header>
  )
}

export default Header