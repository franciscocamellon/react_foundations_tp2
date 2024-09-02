import React from 'react'
import Title from '../../components/title/title'
import styles from './styles.module.css'

function Exercise03() {
  return (
    <>
      <Title number={3} title={'Componente com estilos em className'} />

      <div className={styles.container}>
        <div className={styles.product_images}>
          <img src='src\assets\exercise02.png' width="250" />
          <img src='src\assets\exercise02.png' width="250" />
          <img src='src\assets\exercise02.png' width="250" />
        </div>
        <div className={styles.product_description}>
          <p>
            <h3>Lorem ipsum</h3><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, neque id cursus venenatis, ante nulla efficitur orci, ut consectetur magna nisi a neque. Praesent pulvinar vitae ipsum sit amet aliquam. Mauris rhoncus mauris efficitur fringilla pharetra. Nam magna quam, euismod sed fringilla ut, ultricies ut turpis. In justo lorem, ornare non sollicitudin a, ultrices quis libero. Cras maximus, mi a finibus pharetra, dui turpis pharetra nunc, in hendrerit est velit scelerisque eros. Maecenas sit amet turpis quam. Mauris sed dolor sit amet elit malesuada blandit ut vel magna.
          </p>
          <img src='src\assets\exercise02.png' width="500" />
        </div>
      </div>
    </>
  )
}

export default Exercise03