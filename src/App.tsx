import Routes from './routes';
import GlobalStyle from './styles/global';
import './styles/font.css';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
