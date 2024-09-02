import ListaDeContatos from "../../containers/ListaDeContatos"
import SideBar from "../../containers/SideBar"


const Home = () => (
  <>
    <SideBar mostrarFiltros />
    <ListaDeContatos />
  </>
)

export default Home
