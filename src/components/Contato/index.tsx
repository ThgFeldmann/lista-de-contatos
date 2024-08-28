import { useState } from "react"
import { useDispatch } from "react-redux"

import * as S from "./styles"
import { remover } from "../../store/reducers/contatos"
import ContatoClass from "../../models/Contato"

type Props = ContatoClass

const Contato = ({nome, tel, email, id}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)

  return (
    <S.Card>
      {editando ? (
        <>
          <S.Editando>Editando: </S.Editando>
          <S.Nome value={nome} />
          <S.Info value={tel} />
          <S.Info value={email} />
        </>
      ) : (
        <>
          <S.Nome value={nome} disabled />
          <S.Info value={tel} disabled />
          <S.Info value={email} disabled />
        </>
      )}
      <S.ActionBar>
        {editando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={() => setEditando(false)}>Cancelar</S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoRemover>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contato
