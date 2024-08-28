import { Provider } from 'react-redux';

import SideBar from './containers/SideBar';
import ListaDeContatos from './containers/ListaDeContatos';
import store from './store'

import EstiloGlobal from './styles/index'
import { Container } from './styles/index';

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <ListaDeContatos />
      </Container>
    </Provider>
  );
}

export default App;
