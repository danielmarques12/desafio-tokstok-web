import { Produto } from '../../../../interfaces/produto.interface';
import { Container } from './styles';

interface Props {
  produto: Produto;
}

export function ProdutoCard(props: Props) {
  const { produto } = props;

  return (
    <Container>
      <img src={produto.image_url} alt={produto.nome} />
      <p> {produto.nome} </p>
      <p> R$ {produto.preco} </p>
    </Container>
  );
}
