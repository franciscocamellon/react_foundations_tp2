import React from 'react'
import './styles.css'

function QuemSomos() {
  return (
    <div className="quem-somos">
      <p className="text_title left">Quem somos</p>
      <p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, neque id cursus venenatis, ante nulla efficitur orci, ut consectetur magna nisi a neque. Praesent pulvinar vitae ipsum sit amet aliquam. Mauris rhoncus mauris efficitur fringilla pharetra. Nam magna quam, euismod sed fringilla ut, ultricies ut turpis. In justo lorem, ornare non sollicitudin a, ultrices quis libero.
      </p>
      <div className="equipe">
        <div className="membro-equipe">
          <img src="src\assets\users\avatar-1.jpg" />
          <p>Nome do Membro 1</p>
        </div>
        <div className="membro-equipe">
          <img src="src\assets\users\avatar-2.jpg" />
          <p>Nome do Membro 2</p>
        </div>
        <div className="membro-equipe">
          <img src="src\assets\users\avatar-3.jpg" />
          <p>Nome do Membro 2</p>
        </div>
        <div className="membro-equipe">
          <img src="src\assets\users\avatar-4.jpg" />
          <p>Nome do Membro 2</p>
        </div>

      </div>
    </div>
  )
}

export default QuemSomos