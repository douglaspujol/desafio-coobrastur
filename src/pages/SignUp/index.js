/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Form/Input/index';
import Logo from '../../assets/logo.png';
import api from '../../services/api';

import { Container } from './styles';

function SignUp() {
  const formRef = useRef(null);
  const history = useHistory();
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('O email é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { email, password } = data;

      const newClient = await api.post('login', {
        email,
        password,
      });

      history.push('/dashboard');
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <img src={Logo} alt="Logo Coobrastur" />
      <Form type="submit" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" />
        <label htmlFor="password">Senha</label>
        <Input name="password" type="password" />
        <button type="submit">ACESSAR O SISTEMA</button>
      </Form>
    </Container>
  );
}

export default SignUp;
