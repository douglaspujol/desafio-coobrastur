/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import IconUser from '../../assets/icon_user.png';

import { Container, Main, NewClient } from './styles';

function Register() {
  return (
    <Container>
      <section>
        <Main>
          <header>
            <img src={IconUser} alt="Icone Painel de controle" />
            <h2>Painel de clientes</h2>
          </header>
          <div>
            <strong>Novo cliente</strong>
            <p>Inform os campos a seguir para cadastrar um novo cliente:</p>
          </div>
        </Main>
        <NewClient>
          <form>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" />
            <label htmlFor="work">Profissão</label>
            <input type="text" name="work" />
          </form>
          <div>
            <button type="button">Cadastrar</button>
            <button type="button">Voltar</button>
          </div>
        </NewClient>
      </section>
    </Container>
  );
}

export default Register;
