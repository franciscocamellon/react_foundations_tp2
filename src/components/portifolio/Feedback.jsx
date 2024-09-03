import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'

function Feedback() {

  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Feedback enviado com sucesso!');
    setFeedback('');
  };

  return (
    <div className="feedback-container">
      <h2>Deixe seu Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Escreva seu feedback aqui..."
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Feedback