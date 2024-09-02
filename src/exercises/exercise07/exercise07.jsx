import React from 'react'
import Title from '../../components/title/title'
import Card from '../../components/card/card'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import styles from './styles.module.css'

function Exercise07() {
  return (
    <>
      <Title number={7} title={'Reutilização de componentes com responsividade'} />
      <div className={styles.container}>
        <Header />
        <div className={styles.body_container}>
          <Card />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Exercise07