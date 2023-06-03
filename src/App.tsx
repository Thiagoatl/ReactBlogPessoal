import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import FloatingButton from './components/floatingButton/FloatingButton';
import Perfil from './pages/perfil/Perfil';

function App() {
  const handleClick = () => {
    alert('Botão flutuante clicado!');
  };
  return (
    <>
    <Provider store={store}>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path="/home" element={<Home />} />

            <Route path='/login' element={<Login />} />

            <Route path='/cadastro' element={<CadastroUsuario />} />

            <Route path='/temas' element={<ListaTema />} />

            <Route path='/postagens' element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />

            <Route path='/usuario' element={<Perfil/>} />
          </Routes>

        </div>
        <FloatingButton onClick={handleClick} />
        <Footer />
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
