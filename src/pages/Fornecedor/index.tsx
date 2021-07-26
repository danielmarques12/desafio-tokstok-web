import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Fornecedor as IFornecedor } from '../../interfaces/fornecedor.interface';
import { Produto } from '../../interfaces/produto.interface';
import { api } from '../../services/api';
import { ProdutoCard } from './components/ProdutoCard';

import { Container, Main, Produtos } from './styles';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export function Fornecedor({ match }: Props) {
  const id = match.params.id;

  const [fornecedor, setFornecedor] = useState<IFornecedor>({
    id: 0,
    nome: '',
    razao_social: '',
    cnpj: '',
    segmento: '',
    telefone: '',
    email: '',
    endereco: {
      cep: '',
      rua: '',
      numero: '',
      complemento: ''
    }
  });
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    api
      .get(`fornecedores/list/${id}`)
      .then((response) => setFornecedor(response.data));
  }, []);

  useEffect(() => {
    api
      .get(`produtos/list/${id}`)
      .then((response) => setProdutos(response.data));
  }, []);

  return (
    <Container>
      <h2>Informações do fornecedor</h2>

      <Main>
        <table cellSpacing='0'>
          <tr>
            <td>Nome</td>
            <td>{fornecedor.nome}</td>
          </tr>
          <tr>
            <td>Razão Social</td>
            <td>{fornecedor.razao_social}</td>
          </tr>
          <tr>
            <td>CNPJ</td>
            <td>{fornecedor.cnpj}</td>
          </tr>
          <tr>
            <td>Segmento</td>
            <td>{fornecedor.segmento}</td>
          </tr>
          <tr>
            <td>Telefone</td>
            <td>{fornecedor.telefone}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{fornecedor.email}</td>
          </tr>
        </table>
      </Main>

      {produtos.length ? (
        <>
          <h2>Produtos vendidos pelo fornecedor</h2>
          <Produtos>
            {produtos.map((produto) => (
              <ProdutoCard produto={produto}></ProdutoCard>
            ))}
          </Produtos>
        </>
      ) : null}
    </Container>
  );
}
