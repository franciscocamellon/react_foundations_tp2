import React from 'react'
import Title from '../../components/title/title'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import styles from './styles.module.css'

function Exercise08() {
  return (
    <>
      <Title number={8} title={'Landing page'} />

      <div className={styles.container}>
        <Header complete={true} />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',

        }}>
          <img src='src\assets\exercise02.png' width="200" />
          <p style={{ marginTop: '50px' }}>
            <h3>Lorem ipsum</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, neque id cursus venenatis, ante nulla efficitur orci, ut consectetur magna nisi a neque. Praesent pulvinar vitae ipsum sit amet aliquam. Mauris rhoncus mauris efficitur fringilla pharetra. Nam magna quam, euismod sed fringilla ut, ultricies ut turpis. In justo lorem, ornare non sollicitudin a, ultrices quis libero.
          </p>

        </div>
        <br />
        <div>
          <h3>Quem somos</h3>
          <p >

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, neque id cursus venenatis, ante nulla efficitur orci, ut consectetur magna nisi a neque. Praesent pulvinar vitae ipsum sit amet aliquam. Mauris rhoncus mauris efficitur fringilla pharetra. Nam magna quam, euismod sed fringilla ut, ultricies ut turpis. In justo lorem, ornare non sollicitudin a, ultrices quis libero.
          </p></div>
        <div>
          <h3>Produtos</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <img src='src\assets\exercise02.png' width="150" />
            <img src='src\assets\exercise02.png' width="150" />
            <img src='src\assets\exercise02.png' width="150" />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <img src='src\assets\exercise02.png' width="150" />
            <img src='src\assets\exercise02.png' width="150" />
            <img src='src\assets\exercise02.png' width="150" />
          </div>
        </div>
        <div>
          <h3>Contato</h3>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, neque id cursus venenatis, ante nulla efficitur orci, ut consectetur magna nisi a neque. Praesent pulvinar vitae ipsum sit amet aliquam. Mauris rhoncus mauris efficitur fringilla pharetra. Nam magna quam, euismod sed fringilla ut, ultricies ut turpis. In justo lorem, ornare non sollicitudin a, ultrices quis libero.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Exercise08