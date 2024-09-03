import React from 'react'
import './styles.css'

function Certificacoes() {

  const certificacoes = [
    {
      titulo: 'Certified JavaScript Developer',
      instituicao: 'XYZ Academy',
      data: 'Janeiro de 2023',
      link: 'https://www.credly.com/badges/xyz'
    },
    {
      titulo: 'React.js Specialist',
      instituicao: 'ABC Institute',
      data: 'Março de 2022',
      link: 'https://www.credly.com/badges/abc'
    }
  ];

  return (
    <div className="certificacoes-container">
      <h2>Certificações</h2>
      <ul className="certificacoes-lista">
        <div className="row">
          {certificacoes.map((cert, index) => (
            <li key={index} className="certificacao-item">
              <h3>{cert.titulo}</h3>
              <p>{cert.instituicao}</p>
              <p>{cert.data}</p>
              {cert.link && (
                <a href={cert.link} className="certificacao-link">
                  Ver Certificado
                </a>
              )}
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Certificacoes