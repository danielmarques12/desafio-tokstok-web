import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../src/pages/Home';
import { Cadastro } from '../src/pages/Cadastro';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cadastro' component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
