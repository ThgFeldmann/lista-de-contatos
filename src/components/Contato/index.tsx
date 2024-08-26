import * as S from "./styles"


const Contato = () => (
  <S.Card>
    <S.Nome>Nome do contato</S.Nome>
    <S.Info>Telefone do contato</S.Info>
    <S.Info>Email do contato</S.Info>
    <S.ActionBar>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.ActionBar>
  </S.Card>
)

export default Contato
