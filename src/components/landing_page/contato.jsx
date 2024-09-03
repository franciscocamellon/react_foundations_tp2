import React from 'react'
import './styles.css'

function Contato() {
  return (
    <div className="contato">
      <p className="text_title left">Contato</p>
      <p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, neque id cursus venenatis, ante nulla efficitur orci, ut consectetur magna nisi a neque. Praesent pulvinar vitae ipsum sit amet aliquam. Mauris rhoncus mauris efficitur fringilla pharetra. Nam magna quam, euismod sed fringilla ut, ultricies ut turpis. In justo lorem, ornare non sollicitudin a, ultrices quis libero.
      </p>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Mensagem:
          <textarea rows="10" name="mensagem"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contato