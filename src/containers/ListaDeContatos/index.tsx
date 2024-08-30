import { useSelector } from "react-redux"

import Contato from "../../components/Contato"
import { ListaContatos } from "./styles"
import { RootReducer } from "../../store"
import { MainContainer, Titulo } from "../../styles"

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { nome } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(item => item.nome.toLowerCase().search(nome.toLowerCase()) >= 0)
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <Titulo>
        Contatos encontrados: {contatos.length}
      </Titulo>
      <ListaContatos>
        {contatos.map(c => (
            <li key={c.nome}>
              <Contato nome={c.nome} tel={c.tel} email={c.email} id={c.id} />
            </li>
          ))}
      </ListaContatos>
    </MainContainer>
  )
}


export default ListaDeContatos
