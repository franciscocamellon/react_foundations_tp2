import React from 'react'
import { Link, Element } from 'react-scroll';

import Title from '../../components/title/title'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import HomePage from '../../components/landing_page/homepage'
import QuemSomos from '../../components/landing_page/quemsomos'
import Produtos from '../../components/landing_page/produtos'
import Contato from '../../components/landing_page/contato'
import styles from './styles.module.css'


function Exercise10() {
  return (
    <>
      <Title number={10} title={'Navegação por scroll'} />

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.img_container}>
            <img src='src\assets\Image-not-found.png' height={45}></img>
          </div>
          <nav>
            <ul>
              <li><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
              <li><Link to="quem-somos" spy={true} smooth={true} duration={500}>Quem Somos</Link></li>
              <li><Link to="produtos" spy={true} smooth={true} duration={500}>Produtos</Link></li>
              <li><Link to="contato" spy={true} smooth={true} duration={500}>Contato</Link></li>
            </ul>
          </nav>
        </header>

        <Element name='home'>
          <HomePage />
        </Element>

        <Element name='quem-somos'>
          <QuemSomos />
        </Element>

        <Element name='produtos'>
          <Produtos />
        </Element>

        <Element name='contato'>
          <Contato />
        </Element>

        <Footer />
      </div>
    </>
  )
}

export default Exercise10