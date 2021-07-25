import styled from 'styled-components';

export const Container = styled.div`
  display: table;
  text-align: center;
  margin: 0 auto;
  color: #000;

  h1 {
    font-size: 20px;
    margin-bottom: 25px;
  }

  table {
    margin: 0 auto;
  }

  th {
    background-color: #808692;
    color: #fff;
  }

  tr {
    &:nth-child(even) {
      background: #fff;
    }

    &:nth-child(odd) {
      background: #e6e7e9;
    }
  }

  th,
  td {
    border-collapse: collapse;
    padding: 5px 20px;
  }
`;
