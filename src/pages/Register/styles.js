import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
export const Main = styled.main`
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
  div {
    margin-top: 31px;
    strong {
      font-size: 18px;
      color: #4d4e59;
    }
    p {
      font-size: 16px;
      color: #666666;
    }
  }
`;
export const NewClient = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  margin-top: 19px;
  form {
    display: flex;
    flex-direction: column;
    label {
      margin: 41px 0 0 5px;
    }
    input {
      height: 44px;
      width: 370px;
      padding: 10px;
      background: #ffffff;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
    }
    span {
      color: red;
      font-size: 14px;
    }
  }

  div {
    margin-top: 59px;
    display: flex;
    align-items: center;
    button {
      width: 134px;
      height: 45px;
      color: #fff;
      background: #08436f;
      border: 1px solid #08436f;
      border-radius: 5px;
      margin-right: 27px;
    }
    a {
      color: inherit;
      span {
        width: 134px;
        display: flex;
        height: 45px;
        background: #fff;
        color: #08436f;
        border: 1px solid #08436f;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
