import React from 'react'
import Title from '../../components/title/title'
import Card from '../../components/card/card'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import styles from './styles.module.css'


function Exercise06() {
  return (
    <>
      <Title number={6} title={'Reutilização de componentes'} />

      <Header />
      <div className={styles.body_container}>
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default Exercise06