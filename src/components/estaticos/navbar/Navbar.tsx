import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/token/Action';
import { UserState } from '../../../store/token/Reducer';

const AppNavbar: React.FC = () => {
    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        // alert("Usuário deslogado")
        toast.info('Usuario deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined
        })
        navigate('/login')
    }
    var navbarComponent;
    if (token !== '') {
        navbarComponent =

<Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Link to="/home" className="navbar-brand">
        <img src={'https://i.imgur.com/MV4Fn1W.png'} alt="Logo" width="70" height="45" /> {/* Imagem da logo */}
      </Link>
      <Navbar.Brand as={Link} to="/home">Altblog</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">


        <NavDropdown title="Postagens" id="collasible-nav-dropdown" style={{ color: 'white' }}>
            <NavDropdown.Item as={Link} to="/formularioPostagem">Cadastrar Postagem</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/postagens">Listar Postagens</NavDropdown.Item>
          </NavDropdown>


          <NavDropdown title="Temas" id="collasible-nav-dropdown" style={{ color: 'white' }}>
          <NavDropdown.Item as={Link} to="/formulariotema">Cadastrar Tema</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/temas">Listar Temas</NavDropdown.Item>
          </NavDropdown>


          <NavDropdown title="Social" id="collasible-nav-dropdown" style={{ color: 'white' }}>
            <img src={'https://i.imgur.com/nwH6eFZ.png'} alt="Logo" width="70" height="45" /> {/* Imagem da logo */}
            <NavDropdown.Item as={Link} to="/action1">Perfil</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/action2">Configurações</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/Usuario">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* <Nav>
            <NavDropdown alignRight title={<img src={'https://i.imgur.com/nwH6eFZ.png'} roundedCircle width="30" height="30" />} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/perfil">Perfil</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/configuracoes">Configurações</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
            </Nav> */}
      </Navbar.Collapse>
    </Navbar>
    }
    return (
        <>
            {navbarComponent}
        </>
    );
};

export default AppNavbar;