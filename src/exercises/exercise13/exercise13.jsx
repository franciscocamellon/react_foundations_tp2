import React from 'react'
import Title from '../../components/title/title'
import Habilidades from '../../components/portifolio/Habilidades'
import SobreMim from '../../components/portifolio/SobreMim'
import styles from './styles.module.css'
import Projetos from '../../components/portifolio/Projetos'

function Exercise13() {
  return (
    <>
      <Title number={13} title={'Portfólio - Parte 3'} />

      <div className={styles.container}>
        <SobreMim />
        <Habilidades />
        <Projetos />
      </div>
    </>
  )
}

export default Exercise13