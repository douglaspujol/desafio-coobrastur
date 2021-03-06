import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogoPrata from '../../assets/logo_coob_web_prata.png';
import Add from '../../assets/add.png';
import Logout from '../../assets/logout.png';

import { Container } from './styles';

function Header() {
  const onDisplay = useSelector(state => state.client.visible);

  return (
    <Container setDisplay={onDisplay}>
      <div>
        <Link to="/dashboard">
          <img src={LogoPrata} alt="Logo Coobrastur" />
        </Link>
        <div>
          <Link to="/register">
            <img src={Add} alt="Registrar novo cliente" />
            NOVO CLIENTE
          </Link>
          <Link to="/">
            <img src={Logout} alt="Sair da aplicação" />
            Sair
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Header;
