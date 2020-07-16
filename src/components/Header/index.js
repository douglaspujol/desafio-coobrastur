import React from 'react';
import { Link } from 'react-router-dom';
import LogoPrata from '../../assets/logo_coob_web_prata.png';
import Add from '../../assets/add.png';
import Logout from '../../assets/logout.png';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <img src={LogoPrata} alt="Logo Coobrastur" />
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
