import { useState } from "react"
import * as S from "./styles"

type Props = {
  nome: string
  tel: string
  email: string
}


const Contato = ({nome, tel, email}: Props) => {
  const [editando, setEditando] = useState(false)

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Info>{tel}</S.Info>
      <S.Info>{email}</S.Info>
      <S.ActionBar>
        {editando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={() => setEditando(false)}>Cancelar</S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover>Remover</S.BotaoRemover>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contato
