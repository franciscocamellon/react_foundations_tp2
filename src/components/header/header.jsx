import React from 'react'
import styles from './styles.module.css'

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.img_container}>
        <img src='src\assets\Image-not-found.png' height={45}></img>
      </div>
      {props.complete ?
        <nav>
          <ul>
            <li>Home</li>
            <li>Quem somos</li>
            <li>Produtos</li>
            <li>Contato</li>
          </ul>
        </nav> : <div className={styles.text_container}>Header</div>
      }

    </header>
  )
}

export default Header