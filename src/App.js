import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Registro from './components/Registro';
import Dashboard from './components/Dashboard';
import EditarUsuarios from './pages/ver_usuarios';
import Usuarios from './pages/usuarios';
import CrearBlog from './pages/crear_blogs';
import CrearForo from './pages/crear_foros';
import Editar1Usuarios from './pages/editar_usuarios';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>

        <main className="flex-shrink-0">
      
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/registro" element={<Registro/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/usuarios" element={<Usuarios/>} />
              <Route path="/verusuario" element={<EditarUsuarios/>} />
              <Route path="/crearblog" element={<CrearBlog/>} />
              <Route path="/crearforo" element={<CrearForo/>} />
              <Route path="/editarusuario" element={<Editar1Usuarios/>} />
            </Routes>
    
        </main>

        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;