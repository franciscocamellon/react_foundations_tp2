import React from 'react'
import './styles.css'

function Title(props) {
  return (
    <div className='container'>
      <div className='exercise'>Exercício {props.number}</div>
      <div className='title'>{props.title}</div>
    </div>
  )
}

export default Title