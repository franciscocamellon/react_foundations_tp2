import React from 'react'
import Title from '../../components/title/title'
import Habilidades from '../../components/portifolio/Habilidades'
import SobreMim from '../../components/portifolio/SobreMim'
import Projetos from '../../components/portifolio/Projetos'
import Contatos from '../../components/portifolio/Contatos'
import Certificacoes from '../../components/portifolio/Certificacoes'
import styles from './styles.module.css'
import Feedback from '../../components/portifolio/Feedback'

function Exercise16() {
  return (
    <>
      <Title number={16} title={'Portfólio - Parte 6'} />

      <div className={styles.container}>
        <SobreMim />
        <Habilidades />
        <Projetos />
        <Certificacoes />
        <Feedback />
        <Contatos />
      </div>
    </>
  )
}

export default Exercise16