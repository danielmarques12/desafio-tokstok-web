import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a href='/'>
              <img
                src='https://tokstoksponsorio.vtexassets.com/assets/vtex/assets-builder/tokstoksponsorio.store-theme/0.68.0/icons/store-logo-icon___ee0b8ba758e3c21e076108ec6b13ab11.svg'
                alt='Tokstok Logo'
              />
            </a>
          </li>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/cadastro'>Cadastrar fornecedor</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
