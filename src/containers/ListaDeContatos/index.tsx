import { useSelector } from "react-redux"

import Contato from "../../components/Contato"
import { Container, Filtrados, ListaContatos } from "./styles"
import { RootReducer } from "../../store"

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { nome } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(item => item.nome.toLowerCase().search(nome.toLowerCase()) >= 0)
  }

  const contatos = filtraContatos()

  return (
    <Container>
    <Filtrados>
      Contatos encontrados: {contatos.length}
    </Filtrados>
      <ListaContatos>
        {contatos.map(c => (
            <li key={c.nome}>
              <Contato nome={c.nome} tel={c.tel} email={c.email} id={c.id} />
            </li>
          ))}
      </ListaContatos>
    </Container>
  )
}


export default ListaDeContatos
