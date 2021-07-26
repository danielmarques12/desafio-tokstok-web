import styled from 'styled-components';

export const Container = styled.div`
  width: 680px;
  background: #fff;
  height: fit-content;
  margin: 0 auto;
  border: 1px solid #eceaea;
  border-radius: 5px;
  color: #000;
  text-align: center;

  h2 {
    margin-top: 20px;
  }
`;

export const Main = styled.div`
  margin-bottom: 35px;
  margin-top: 15px;
  font-size: 16px;

  table {
    margin: 0 auto;
    width: 500px;
    tr {
      td {
        padding: 10px 20px;
        border: 1px solid #eee;

        &:first-child {
          font-weight: bold;
        }
      }
    }
  }
`;

export const Produtos = styled.div`
  padding: 30px 10px 12.5px 10px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
