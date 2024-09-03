import React from 'react'
import './styles.css'

function SobreMim() {
  return (
    <div className="sobre-mim-container">
      <img src="src\assets\users\avatar-1.jpg" alt="Minha Foto" className="foto-perfil" />
      <div className="sobre-mim-texto">
        <h1>Sobre Mim</h1>
        <p>Olá! Eu sou Francisco Camello, um entusiasta da tecnologia e desenvolvedor web com uma paixão por transformar ideias em soluções digitais. Desde jovem, sempre fui fascinado por como a tecnologia pode moldar o mundo ao nosso redor, e isso me levou a seguir uma carreira na área de desenvolvimento de software.

          Com experiência em diversas tecnologias, como React.js, Node.js, e Python, tenho trabalhado em projetos que vão desde websites responsivos até aplicativos web complexos. Meu objetivo é sempre criar interfaces que não apenas funcionem bem, mas que também proporcionem uma experiência intuitiva e agradável para o usuário.

          Sou um aprendiz constante, sempre em busca de novas ferramentas e metodologias para melhorar</p>
      </div>
    </div>
  )
}

export default SobreMim