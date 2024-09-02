import React from 'react'
import Title from '../../components/title/title'
import Card from '../../components/card/card'
import styles from './styles.module.css'

function Exercise05() {

  const numberOfCards = [1, 2, 3, 4]

  return (
    <>
      <Title number={5} title={'Componentização básica'} />

      <div className={styles.container}>
        {numberOfCards.map((card, index) => (
          <div className={styles.card_container}>
            <Card />
          </div>
        ))}
      </div>
    </>
  )
}

export default Exercise05