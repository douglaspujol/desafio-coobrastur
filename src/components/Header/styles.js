import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #08436f;
  padding: 0 10px;

  div:first-child {
    height: 107px;
    display: flex;
    align-items: center;
    max-width: 1075px;
    width: 100%;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      a:first-child {
        background: #f8fcff;
        border-radius: 9px;
        width: 200px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: inherit;
        margin-right: 30px;
        color: #534c4c;
        img {
          margin-right: 10px;
        }

        &:hover {
          background: #fff;
        }
      }
      a {
        img {
          margin-right: 5px;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        color: #f8fcff;
      }
    }
  }
`;
