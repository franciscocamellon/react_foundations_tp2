import React from 'react'
import Title from '../../components/title/title'
import styles from './styles.module.css'
import Habilidades from '../../components/portifolio/Habilidades'
import SobreMim from '../../components/portifolio/SobreMim'

function Exercise12() {
  return (
    <>
      <Title number={12} title={'Portfólio - Parte 2'} />

      <div className={styles.container}>
        <SobreMim />
        <Habilidades />
      </div>

    </>
  )
}

export default Exercise12