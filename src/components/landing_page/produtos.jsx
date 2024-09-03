import React from 'react'
import './styles.css'

function Produtos() {
  return (
    <div className="produtos">
      <p className="text_title left">Produtos</p>
      <div className="lista-produtos">
        <div className="produto">
          <img src="src\assets\products\product-1.jpg" alt="Produto 1" />
          <p>Produto 1</p>
        </div>
        <div className="produto">
          <img src="src\assets\products\product-2.jpg" alt="Produto 2" />
          <p>Produto 2</p>
        </div>
        <div className="produto">
          <img src="src\assets\products\product-3.jpg" alt="Produto 3" />
          <p>Produto 3</p>
        </div>
      </div>
      <div className="lista-produtos">
        <div className="produto">
          <img src="src\assets\products\product-4.jpg" alt="Produto 1" />
          <p>Produto 4</p>
        </div>
        <div className="produto">
          <img src="src\assets\products\product-5.jpg" alt="Produto 2" />
          <p>Produto 5</p>
        </div>
        <div className="produto">
          <img src="src\assets\products\product-6.jpg" alt="Produto 3" />
          <p>Produto 6</p>
        </div>
      </div>
    </div>
  )
}

export default Produtos