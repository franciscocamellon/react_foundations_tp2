import React from 'react'
import Title from '../../components/title/title'
import styles from './styles.module.css'
import './styles.module.css'

function Exercise04() {
  return (
    <>
      <Title number={4} title={'Criação de formulário'} />

      <div className={styles.container}>

        <form >
          <h3>Cadastro de Produtos</h3>

          <div className={styles.row}>
            <label>Nome do produto</label>
            <input type="text" placeholder='Informe o nome do produto' />
          </div>

          <div className={styles.col}>
            <div className={styles.row}>
              <label>Preço de venda</label>
              <input placeholder='Informe o preço de venda' />
            </div>
            <div className={styles.row}>
              <label>Preço de custo</label>
              <input placeholder='Informe o preço de custo' />
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.row}>
              <label>Fornecedor</label>
              <select>
                <option>Selecione um fornecedor</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className={styles.row}>
              <label>Categoria</label>
              <select>
                <option>Selecione uma categoria</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <label>Descrição do produto</label>
            <textarea rows="10" placeholder='Informe a descrição do produto' />
          </div>

          <div className={styles.btn_container}>
            <button type="button" className={styles.btn}>Salvar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Exercise04