import SideBar from './containers/SideBar';
import ListaDeContatos from './containers/ListaDeContatos';
import Contato from './components/Contato'

import EstiloGlobal from './styles/index'
import { Container } from './styles/index';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <ListaDeContatos />
      </Container>
    </>
  );
}

export default App;
