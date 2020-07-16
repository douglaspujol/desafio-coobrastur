import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeDashboard } from '../../store/modules/Client/actions';

import IconUser from '../../assets/icon_user.png';
import { Container, Main, Navigation, Clients } from './styles';
import api from '../../services/api';

function Dashboard() {
  const dispatch = useDispatch();
  const [clientes, setClientes] = useState([]);
  const [totalC, setTotalC] = useState('');
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    async function getClientes() {
      const response = await api.get(`/users?page=${page}`);

      const { data, total, per_page } = response.data;

      setClientes([...data]);
      setTotalC(total);
      setPageCount(per_page);
    }
    getClientes();
    dispatch(changeDashboard(true));
  }, [page]);

  function handleNextPage() {
    if (totalC > pageCount * page) {
      setPage(page + 1);
    }
  }

  function handleTotalPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  return (
    <Container>
      <Main>
        <Clients>
          <header>
            <img src={IconUser} alt="Icone Painel de controle" />
            <h2>Painel de clientes</h2>
          </header>
          <ul>
            {clientes.map(cliente => (
              <li key={cliente.id}>
                <div>
                  <img src={cliente.avatar} alt={cliente.first_name} />
                  <span>{`${cliente.first_name} ${cliente.last_name}`}</span>
                </div>
                <span>{cliente.email}</span>
                <Link to="/register"> Editar </Link>
              </li>
            ))}
          </ul>
          <span>Total de clientes: {totalC}</span>
        </Clients>
        <Navigation>
          <button type="button" onClick={handleTotalPage}>
            Anterior
          </button>
          <button type="button" onClick={handleNextPage}>
            Próximo
          </button>
        </Navigation>
      </Main>
    </Container>
  );
}

export default Dashboard;
