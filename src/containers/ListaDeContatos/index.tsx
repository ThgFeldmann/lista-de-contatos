import { useSelector } from "react-redux"

import Contato from "../../components/Contato"
import { Container, ListaContatos } from "./styles"
import { RootReducer } from "../../store"

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <ListaContatos>
        {itens.map(c => (
            <li key={c.nome}>
              <Contato nome={c.nome} tel={c.tel} email={c.email} id={c.id} />
            </li>
          ))}
      </ListaContatos>
    </Container>
  )
}


export default ListaDeContatos
