import React from 'react'
import Title from '../../components/title/title'
import styles from './styles.module.css'

function Exercise02() {
  return (
    <>
      <Title number={2} title={'Componente com styles inline'} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 10px',
        gap: '15px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <img src='src\assets\exercise02.png' width="250" />
          <img src='src\assets\exercise02.png' width="250" />
          <img src='src\assets\exercise02.png' width="250" />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',

        }}>
          <p style={{ marginLeft: '10px', marginTop: '50px' }}>
            <h3>Lorem ipsum</h3><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, neque id cursus venenatis, ante nulla efficitur orci, ut consectetur magna nisi a neque. Praesent pulvinar vitae ipsum sit amet aliquam. Mauris rhoncus mauris efficitur fringilla pharetra. Nam magna quam, euismod sed fringilla ut, ultricies ut turpis. In justo lorem, ornare non sollicitudin a, ultrices quis libero. Cras maximus, mi a finibus pharetra, dui turpis pharetra nunc, in hendrerit est velit scelerisque eros. Maecenas sit amet turpis quam. Mauris sed dolor sit amet elit malesuada blandit ut vel magna.
          </p>
          <img src='src\assets\exercise02.png' width="500" />
        </div>
      </div>
    </>
  )
}

export default Exercise02