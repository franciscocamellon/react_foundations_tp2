import React from 'react'
import Title from '../../components/title/title'
import Habilidades from '../../components/portifolio/Habilidades'
import SobreMim from '../../components/portifolio/SobreMim'
import Projetos from '../../components/portifolio/Projetos'
import Contatos from '../../components/portifolio/Contatos'
import styles from './styles.module.css'
import Certificacoes from '../../components/portifolio/Certificacoes'

function Exercise15() {
  return (
    <>
      <Title number={15} title={'Portfólio - Parte 5'} />

      <div className={styles.container}>
        <SobreMim />
        <Habilidades />
        <Projetos />
        <Certificacoes />
        <Contatos />
      </div>
    </>
  )
}

export default Exercise15