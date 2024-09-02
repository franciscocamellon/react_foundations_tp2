import React from 'react'
import Title from '../../components/title'
import styles from './styles.module.css'

function Exercise04() {
  return (
    <>
      <Title number={4} title={'Criação de formulário'} />

      <div className={styles.container}>

        <form className={styles.form_container}>
          <h3>Cadastro de Produtos</h3>
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />

        </form>
        <button type='submit' />
      </div>
    </>
  )
}

export default Exercise04