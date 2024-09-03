import React from 'react'
import Title from '../../components/title/title'
import Habilidades from '../../components/portifolio/Habilidades'
import SobreMim from '../../components/portifolio/SobreMim'
import Projetos from '../../components/portifolio/Projetos'
import Contatos from '../../components/portifolio/Contatos'
import styles from './styles.module.css'

function Exercise14() {
  return (
    <>
      <Title number={14} title={'Portfólio - Parte 4'} />

      <div className={styles.container}>
        <SobreMim />
        <Habilidades />
        <Projetos />
        <Contatos />
      </div>
    </>
  )
}

export default Exercise14