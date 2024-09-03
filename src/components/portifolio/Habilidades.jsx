import React from 'react'
import { FaCode } from "react-icons/fa6";
import './styles.css'

function Habilidades() {

  const habilidades = [
    { nome: 'JavaScript', categoria: 'Linguagens de Programação' },
    { nome: 'React.js', categoria: 'Frameworks & Bibliotecas' },
    { nome: 'Node.js', categoria: 'Frameworks & Bibliotecas' },
    { nome: 'HTML & CSS', categoria: 'Linguagens de Marcação' },
    { nome: 'Git & GitHub', categoria: 'Ferramentas de Controle de Versão' },
    { nome: 'SQL', categoria: 'Bancos de Dados' },
    { nome: 'Python', categoria: 'Linguagens de Programação' },
  ];

  const categorias = [...new Set(habilidades.map(h => h.categoria))];

  return (
    <div className="habilidades-container">
      <h2>Habilidades</h2>
      {categorias.map(categoria => (
        <div key={categoria} className="habilidade-categoria">
          <h3>{categoria}</h3>
          <ul>
            {habilidades
              .filter(habilidade => habilidade.categoria === categoria)
              .map(habilidade => (
                <li key={habilidade.nome}>
                  <div className='habilidade-code'>
                    <FaCode />
                    <p>{habilidade.nome}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Habilidades