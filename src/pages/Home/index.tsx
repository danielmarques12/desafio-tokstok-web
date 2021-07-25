import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Fornecedor } from './interfaces/fornecedor.interface';
import { Container } from './styles';

export function Home() {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);

  useEffect(() => {
    api
      .get('fornecedores/list')
      .then((response) => setFornecedores(response.data));
  }, []);

  return (
    <Container>
      <h1>Fornecedores</h1>

      <table>
        <tr>
          <th>Nome</th>
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
          <tr>
            <td>{fornecedor.nome}</td>
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
