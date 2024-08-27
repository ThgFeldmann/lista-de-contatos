import Contato from "../../components/Contato"

import { Container, ListaContatos } from "./styles"

const contatos = [
  {
    nome: 'Fulano deTal',
    tel: '(55) 99 99999999',
    email: 'fulano@gmail.com'
  },
  {
    nome: 'Siclano deTal',
    tel: '(55) 99 99999999',
    email: 'Siclano@gmail.com'
  },
  {
    nome: 'Delano deTal',
    tel: '(55) 99 99999999',
    email: 'Delano@gmail.com'
  },
  {
    nome: 'Fulana deTal',
    tel: '(55) 99 99999999',
    email: 'Fulana@gmail.com'
  },
  {
    nome: 'Siclana deTal',
    tel: '(55) 99 99999999',
    email: 'Siclana@gmail.com'
  },
  {
    nome: 'Delana deTal',
    tel: '(55) 99 99999999',
    email: 'Delana@gmail.com'
  }
]

const ListaDeContatos = () => (
  <Container>
    <ListaContatos>
      {contatos.map(c => (
          <li key={c.nome}>
            <Contato nome={c.nome} tel={c.tel} email={c.email} />
          </li>
        ))}
    </ListaContatos>
  </Container>
)


export default ListaDeContatos
