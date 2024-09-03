import React from 'react'
import Title from '../../components/title/title'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import HomePage from '../../components/landing_page/homepage'
import QuemSomos from '../../components/landing_page/quemsomos'
import Produtos from '../../components/landing_page/produtos'
import Contato from '../../components/landing_page/contato'
import styles from './styles.module.css'

function Exercise09() {
  return (
    <>
      <Title number={9} title={'Landing page responsiva'} />

      <div className={styles.container}>
        <Header complete={true} />

        <section id='home'>
          <HomePage />
        </section>

        <section id='quem-somos'>
          <QuemSomos />
        </section>

        <section id='produtos'>
          <Produtos />
        </section>

        <section id='contato'>
          <Contato />
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Exercise09