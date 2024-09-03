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
            <li><a href="#home">Home</a></li>
            <li><a href="#quem-somos">Quem Somos</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav> : <div className={styles.text_container}>Header</div>
      }

    </header>
  )
}

export default Header