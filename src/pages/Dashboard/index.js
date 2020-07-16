import React from 'react';
import { Link } from 'react-router-dom';
import IconUser from '../../assets/icon_user.png';
import { Container, Main, Navigation, Clients } from './styles';

function Dashboard() {
  return (
    <Container>
      <Main>
        <Clients>
          <header>
            <img src={IconUser} alt="Icone Painel de controle" />
            <h2>Painel de clientes</h2>
          </header>
          <ul>
            <li>
              <div>
                <img
                  src="https://conteudo.imguol.com.br/c/entretenimento/38/2017/12/21/cena-de-avatar-2009-1513852401735_v2_450x600.jpg"
                  alt="Foto de avatar"
                />
                <span>Douglas Pujol</span>
              </div>
              <span>douglas.pujol@outlook.com</span>
              <Link to="/register"> Editar </Link>
            </li>
            <li>
              <div>
                <img
                  src="https://conteudo.imguol.com.br/c/entretenimento/38/2017/12/21/cena-de-avatar-2009-1513852401735_v2_450x600.jpg"
                  alt="Foto de avatar"
                />
                <span>Douglas Pujol</span>
              </div>
              <span>douglas.pujol@outlook.com</span>
              <Link to="/register"> Editar </Link>
            </li>
            <li>
              <div>
                <img
                  src="https://conteudo.imguol.com.br/c/entretenimento/38/2017/12/21/cena-de-avatar-2009-1513852401735_v2_450x600.jpg"
                  alt="Foto de avatar"
                />
                <span>Douglas Pujol</span>
              </div>
              <span>douglas.pujol@outlook.com</span>
              <Link to="/register"> Editar </Link>
            </li>
            <li>
              <div>
                <img
                  src="https://conteudo.imguol.com.br/c/entretenimento/38/2017/12/21/cena-de-avatar-2009-1513852401735_v2_450x600.jpg"
                  alt="Foto de avatar"
                />
                <span>Douglas Pujol</span>
              </div>
              <span>douglas.pujol@outlook.com</span>
              <Link to="/register"> Editar </Link>
            </li>
          </ul>
          <span>Total de clientes:</span>
        </Clients>
        <Navigation>
          <button type="button">Anterior</button>
          <button type="button">Próximo</button>
        </Navigation>
      </Main>
    </Container>
  );
}

export default Dashboard;
