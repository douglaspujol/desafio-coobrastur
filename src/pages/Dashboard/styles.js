import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

export const Clients = styled.div`
  width: 1075px;
  font-size: 22px;
  color: #08436f;
  font-weight: normal;
  header {
    display: flex;
    align-items: baseline;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9e9e9;
    img {
      margin-right: 15px;
      height: 22px;
    }
  }

  ul {
    margin-top: 46px;
    li {
      &:last-child {
        margin-bottom: 20px;
      }
      margin: 25px 0;
      border: 1px solid #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 82px;
      padding: 18px 45px 18px 25px;
      div {
        display: flex;
        align-items: center;
        justify-content: start;
        width: 282px;
        img {
          height: 55px;
          width: 55px;
          margin-right: 30px;
          border-radius: 50px;
        }
        span {
          font-size: 17px;
        }
      }

      > span {
        font-size: 17px;
        color: #000;
      }

      a {
        border: 1px solid #08436f;
        height: 45px;
        width: 134px;
        font-size: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        color: #08436f;
        &:hover {
          background: #08436f;
          color: #fff;
        }
      }
    }
  }
  span {
    font-size: 17px;
    color: #534c4c;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  justify-content: center;
`;
export const Navigation = styled.div`
  margin-top: 43px;
  button {
    width: 104px;
    border: 1px solid #08436f;
    border-radius: 5px;
    height: 35px;
    background: #fff;
    font-size: 12px;
    margin-right: 21px;
    color: #08436f;
    &:hover {
      background: #08436f;
      color: #fff;
    }
  }
`;
