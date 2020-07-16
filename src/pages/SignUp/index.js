/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Logo from '../../assets/logo.png';

import { Container } from './styles';

function SignUp() {
  return (
    <Container>
      <img src={Logo} alt="Logo Coobrastur" />
      <form type="submit">
        <label htmlFor="email">E-mail</label>
        <input name="email" type="email" />
        <label htmlFor="password">Senha</label>
        <input name="password" type="password" />
        <button type="submit">ACESSAR O SISTEMA</button>
      </form>
    </Container>
  );
}

export default SignUp;
