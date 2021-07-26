import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Fornecedor } from '../../interfaces/fornecedor.interface';
import { api } from '../../services/api';
import { Container } from './styles';

export function Home() {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);

  useEffect(() => {
    api
      .get('fornecedores/list')
      .then((response) => setFornecedores(response.data));
  }, []);

  const handleRedirect = (id: number) => {
    window.location.href = `../fornecedor/${id}`;
  };

  return (
    <Container>
      <h1>Fornecedores</h1>

      <table cellSpacing='0'>
        <tr>
          <th>Nome</th>
          <th>Ver fornecedor</th>
          <th>Razão social</th>
          <th>CNPJ</th>
          <th>Segmento</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>CEP</th>
          <th>Rua</th>
          <th>Número</th>
          <th>Complemento</th>
        </tr>

        {fornecedores.map((fornecedor) => (
          <tr key={fornecedor.id}>
            <td>{fornecedor.nome}</td>
            <td>
              <Button
                style={{
                  textTransform: 'none',
                  color: '#009845',
                  fontWeight: 'bold'
                }}
                onClick={() => handleRedirect(fornecedor.id)}
              >
                Ver Detalhes
              </Button>
            </td>
            <td>{fornecedor.razao_social}</td>
            <td>{fornecedor.cnpj}</td>
            <td>{fornecedor.segmento}</td>
            <td>{fornecedor.telefone}</td>
            <td>{fornecedor.email}</td>
            <td>{fornecedor.endereco.cep}</td>
            <td>{fornecedor.endereco.rua}</td>
            <td>{fornecedor.endereco.numero}</td>
            <td>{fornecedor.endereco.complemento}</td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
