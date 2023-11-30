import React from 'react';

import FormularioBlog from '../components/formularioblog/FormularioBlog.jsx'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function CrearBlog() {
  return (
    <div>

      <h1>Crear Blog</h1>
      <FormularioBlog />

    </div>
  );
}

export default CrearBlog;