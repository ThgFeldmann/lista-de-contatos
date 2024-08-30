import { MainContainer, Titulo } from "../../styles"
import { BotaoAdd, CardAdd, InfoAdd, NomeAdd } from "./styles"

const Form = () => (
  <MainContainer>
    <Titulo>Novo contato</Titulo>
    <CardAdd>
      <NomeAdd type="text" placeholder="Nome do contato" />
      <InfoAdd type="text" placeholder="Telefone do contato" />
      <InfoAdd type="text" placeholder="Email do contato" />
      <BotaoAdd type="submit">Cadastrar</BotaoAdd>
    </CardAdd>
  </MainContainer>
)

export default Form
