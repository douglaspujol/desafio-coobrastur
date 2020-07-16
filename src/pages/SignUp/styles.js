import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  img {
    width: 370px;
    margin-bottom: 62px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 370px;
    label {
      margin-top: 15px;
    }
    input {
      padding: 5px;
      width: 100%;
      height: 44px;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
    }
    button {
      width: 100%;
      color: #fff;
      padding: 15px 0;
      border: none;
      background: #08436f;
      border-radius: 10px;
      margin-top: 15px;
      &:hover {
        background: #042a47;
      }
    }
  }
`;
