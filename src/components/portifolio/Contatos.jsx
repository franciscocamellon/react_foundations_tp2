import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import './styles.css'

function Contatos() {

  return (
    <div className="contatos-container">
      <h2>Contato</h2>
      <p>Email: <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com</a></p>
      <p>Telefone: <a href="tel:+5511999999999">+55 11 99999-9999</a></p>

      <div className="contatos-redes-sociais">
        <a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
          <div className='redes-sociais-icons'><FaLinkedin /> LinkedIn</div>
        </a>
        <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
          <div className='redes-sociais-icons'><FaGithub /> GitHub</div>
        </a>
        <a href="https://twitter.com/seuusuario" target="_blank" rel="noopener noreferrer">
          <div className='redes-sociais-icons'><FaTwitter /> Twitter</div>
        </a>
      </div>

      <form onSubmit='' className="formulario-contato">
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
        />
        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contatos