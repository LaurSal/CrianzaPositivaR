import React from 'react';

import FormularioForo from '../components/formularioblog/FormularioBlog.jsx'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function CrearForo() {
  return (
    <div>

      <h1>Crear Foro</h1>
      <FormularioForo />

    </div>
  );
}

export default CrearForo;