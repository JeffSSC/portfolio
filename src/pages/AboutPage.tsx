// src/pages/AboutPage.tsx

import React from 'react';

function AboutPage() {
  // Estilos simples só para esta página, sem background
  const aboutPageStyle: React.CSSProperties = {
    padding: '40px',
    textAlign: 'center',
  };

  return (
    <div style={aboutPageStyle}>
      <h1>Fotografias</h1>
      <p>Esta página não tem a imagem de fundo.</p>
      <p>O conteúdo aqui é exibido normalmente.</p>
    </div>
  );
}

export default AboutPage;