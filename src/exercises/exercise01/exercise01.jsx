import React from 'react'
import Title from '../../components/title/title'
import styles from './styles.module.css'

function Exercise01() {
  return (
    <>
      <Title number={1} title={'Criando um componente básico'} />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 10px',
        gap: '15px'
      }}>
        <img src='src\assets\exercise01.jpg' style={{ flex: '1' }}></img>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, neque id cursus venenatis, ante nulla efficitur orci, ut consectetur magna nisi a neque. Praesent pulvinar vitae ipsum sit amet aliquam. Mauris rhoncus mauris efficitur fringilla pharetra. Nam magna quam, euismod sed fringilla ut, ultricies ut turpis. In justo lorem, ornare non sollicitudin a, ultrices quis libero. Cras maximus, mi a finibus pharetra, dui turpis pharetra nunc, in hendrerit est velit scelerisque eros. Maecenas sit amet turpis quam. Mauris sed dolor sit amet elit malesuada blandit ut vel magna. Curabitur non ornare augue.</p>
      </div>
    </>
  )
}

export default Exercise01