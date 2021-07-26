import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../src/pages/Home';
import { Cadastro } from '../src/pages/Cadastro';
import { Fornecedor } from '../src/pages/Fornecedor';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/fornecedor/:id' component={Fornecedor} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
