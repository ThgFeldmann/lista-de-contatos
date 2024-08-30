import { SetStateAction, useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import * as S from "./styles"
import { remover, editar } from "../../store/reducers/contatos"
import ContatoClass from "../../models/Contato"
import { Card, Nome, Info, Botao } from "../../styles"

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
    <Card>
      {!editando ? (
        <>
          <Nome
            style={{ border: "none" }}
            value={nome}
            onChange={(evento: { target: { value: SetStateAction<string>} } ) => setNome(evento.target.value)}
            disabled
          />
          <Info
            style={{ border: "none" }}
            value={tel}
            onChange={evento => setTel(evento.target.value)}
            disabled
          />
          <Info
            style={{ border: "none" }}
            value={email}
            onChange={evento => setEmail(evento.target.value)}
            disabled
          />
        </>
      ) : (
        <>
          <Nome
            value={nome}
            onChange={(evento: { target: { value: SetStateAction<string> } }) => setNome(evento.target.value)}
          />
          <Info
            value={tel}
            onChange={evento => setTel(evento.target.value)}
          />
          <Info
            value={email}
            onChange={evento => setEmail(evento.target.value)}
          />
        </>
      )}
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
            <Botao onClick={() => setEditando(true)}>Editar</Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoRemover>
          </>
        )}
      </S.ActionBar>
    </Card>
  )
}

export default Contato
