import React from 'react'
import './styles.css'

function Projetos() {
  const projetos = [
    {
      titulo: 'Portfolio Pessoal',
      descricao: 'Um website de portfólio pessoal feito com React.js e estilizado com CSS.',
      link: 'https://github.com/seuusuario/portfolio-pessoal',
      imagem: 'src/assets/projects/layout-1.png'
    },
    {
      titulo: 'Aplicativo de Tarefas',
      descricao: 'Aplicativo web para gerenciar tarefas diárias, desenvolvido com Node.js e MongoDB.',
      link: 'https://github.com/seuusuario/aplicativo-tarefas',
      imagem: 'src/assets/projects/layout-2.png'
    },
    {
      titulo: 'Blog de Tecnologia',
      descricao: 'Um blog desenvolvido com Next.js e integrado ao CMS Contentful.',
      link: 'https://github.com/seuusuario/blog-tecnologia',
      imagem: 'src/assets/projects/layout-3.png'
    },
    {
      titulo: 'E-commerce de Moda',
      descricao: 'Uma plataforma de e-commerce desenvolvida com Next.js e integrando APIs de pagamento.',
      link: 'https://github.com/seuusuario/ecommerce-moda',
      imagem: 'src/assets/projects/layout-4.png'
    },
    {
      titulo: 'App de Finanças Pessoais',
      descricao: 'Aplicativo mobile para gerenciamento de finanças pessoais, desenvolvido em React Native.',
      link: 'https://github.com/seuusuario/app-financas-pessoais',
      imagem: 'src/assets/projects/layout-5.png'
    },
    {
      titulo: 'Dashboard de Análise de Dados',
      descricao: 'Dashboard interativo para visualização de dados, criado com Python e Plotly.',
      link: 'https://github.com/seuusuario/dashboard-analise-dados',
      imagem: 'src/assets/projects/layout-6.png'
    },
    {
      titulo: 'Site de Restaurante',
      descricao: 'Website responsivo para um restaurante local, desenvolvido com HTML, CSS e JavaScript.',
      link: 'https://github.com/seuusuario/site-restaurante',
      imagem: 'src/assets/projects/layout-7.png'
    },
    {
      titulo: 'Chat em Tempo Real',
      descricao: 'Aplicação de chat em tempo real utilizando Socket.io e Node.js.',
      link: 'src/assets/projects/layout-8.png',
      imagem: 'src/assets/projects/layout-8.png'
    },
    {
      titulo: 'Sistema de Gerenciamento Escolar',
      descricao: 'Sistema web para gerenciamento de escolas, desenvolvido com Laravel e Vue.js.',
      link: 'https://github.com/seuusuario/gerenciamento-escolar',
      imagem: 'src/assets/projects/layout-9.png'
    }

  ];
  return (
    <div className="projetos-container">
      <h2>Projetos</h2>
      <div className="projetos-grid">
        {projetos.map((projeto, index) => (
          <div key={index} className="projeto-card">
            <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} className="projeto-imagem" />
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="projeto-link">Ver Projeto</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projetos