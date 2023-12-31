import React from 'react';
import { Route, Routes, Navigate, useMatches } from "react-router-dom";
import Editar from './Rutas/editarPublicacion/Editar'
import MascotasRegister from './Rutas/registerMascota'
import InteresadoRegister from './Rutas/registerInteresado'
import Login from './Rutas/login';
import Register from './Rutas/userRegister'
import Header from './Rutas/inicio';
import Panel from './Rutas/panel/panel';
import PanelInteresados from './Rutas/panel/ListInteresados';
import Inicio from './Components/Inicio';
import EditarPerfil from './Rutas/userEdit/EditarPerfil'
import Comentar from './Rutas/comentar/Comentar'
import Ver from './Rutas/verPerfil/Ver'

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function AuthRequired({ children }) {
  const auth = getCookie('token');

  if (!auth) {
    return <Navigate to={'/login'} />
  }

  return children;
}

function NoSeeAuth({ children }) {
  const auth = getCookie('token');

  if (auth) {
    return <Navigate to={'/'} />
  }

  return children;
}

const Root=() =>{
  const matches = useMatches();

  return (
    <>
      {(matches[0].pathname !== '/login' && matches[0].pathname !== '/register') && (
        <Inicio/>
      )}
     
      <Routes>
        <Route path="/" element={
          
           <Header/>
          
        } />

        <Route path="/login" element={
          <NoSeeAuth>
            <Login />
          </NoSeeAuth>
        }/>
        
        <Route path="/register" element={
          <NoSeeAuth>
            <Register />
          </NoSeeAuth>
        }/>

        <Route path="/registerMascota" element={
          <AuthRequired>
           <MascotasRegister/>
          </AuthRequired>
        } />

        <Route path="/edit/:id" element={
          <AuthRequired>
           <Editar/>
          </AuthRequired>
        } />
       
       <Route path="/editar" element={
          <AuthRequired>
           <EditarPerfil/>
          </AuthRequired>
        } />

        <Route path="/comentarios/:id" element={
          <AuthRequired>
           <Comentar/>
          </AuthRequired>
        } /> 

        <Route path="/ver" element={
          <AuthRequired>
           <Ver/>
          </AuthRequired>
        } /> 

        <Route path="/interesado/:id" element={
          <AuthRequired>
           <InteresadoRegister/>
          </AuthRequired>
        } /> 
        <Route path="/admin/panel" element={
          <AuthRequired>
           <Panel/>
          </AuthRequired>
        } /> 
           <Route path="/admin/interesados/:id" element={
          <AuthRequired>
           <PanelInteresados/>
          </AuthRequired>
        } /> 

        
      </Routes>
    </>
  );
};

export default Root;