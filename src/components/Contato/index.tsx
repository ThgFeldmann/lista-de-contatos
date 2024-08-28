import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import * as S from "./styles"
import { remover, editar } from "../../store/reducers/contatos"
import ContatoClass from "../../models/Contato"

type Props = ContatoClass

const Contato = ({nome: nomeOriginal, tel: telOriginal, email: emailOriginal, id}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)

  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (telOriginal.length > 0) {
      setTel(telOriginal)
    }
  }, [telOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEditando(false)
    setNome(nomeOriginal)
    setTel(telOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.Nome
        value={nome}
        onChange={evento => setNome(evento.target.value)}
        disabled={!editando}
      />
      <S.Info
        value={tel}
        onChange={evento => setTel(evento.target.value)}
        disabled={!editando}
      />
      <S.Info
        value={email}
        onChange={evento => setEmail(evento.target.value)}
        disabled={!editando}
      />
      <S.ActionBar>
        {editando ? (
          <>
            <S.BotaoSalvar onClick={() => {
              dispatch(
                editar({
                  nome,
                  tel,
                  email,
                  id
                })
              )
              setEditando(false)
            }}>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={() => cancelarEdicao()}>Cancelar
            </S.BotaoRemover>
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
