/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { changeRegister } from '../../store/modules/Client/actions';
import Input from '../../components/Form/Input/index';
import IconUser from '../../assets/icon_user.png';
import api from '../../services/api';

import { Container, Main, NewClient } from './styles';

function Register() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const history = useHistory();
  useEffect(() => {
    dispatch(changeRegister());
  });

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        job: Yup.string().required('A profissão é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, job } = data;

      const newClient = await api.post('users', {
        name,
        job,
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
      <section>
        <Main>
          <header>
            <img src={IconUser} alt="Icone Painel de controle" />
            <h2>Painel de clientes</h2>
          </header>
          <div>
            <strong>Novo cliente</strong>
            <p>Informe os campos a seguir para cadastrar um novo cliente:</p>
          </div>
        </Main>
        <NewClient>
          <Form id="form" onSubmit={handleSubmit} ref={formRef}>
            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" />
            <label htmlFor="job">Profissão</label>
            <Input type="text" name="job" />
          </Form>
          <div>
            <button type="submit" form="form">
              Cadastrar
            </button>
            <Link to="/dashboard">
              <span>Voltar</span>
            </Link>
          </div>
        </NewClient>
      </section>
    </Container>
  );
}

export default Register;
