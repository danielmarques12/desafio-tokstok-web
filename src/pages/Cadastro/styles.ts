import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: center;
    color: #000;
    margin-bottom: 25px;
    font-size: 23px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 500px;

    input {
      padding: 20px;
      border: 2.5px solid #eee;
      font-size: 18px;
    }

    button {
      margin-top: 15px;
      margin-bottom: 15px;
      height: 55px;
      font-size: large;
      background-color: #009845;
      color: #fff;

      &:hover {
        background-color: #008039;
      }
    }
  }
`;
