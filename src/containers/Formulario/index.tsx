import { FormEvent, useState } from "react"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"

import { MainContainer, Titulo } from "../../styles"
import { BotaoAdd, InfoAdd, NomeAdd, Form } from "./styles"
import { cadastrar } from "../../store/reducers/contatos"

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        tel,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <NomeAdd value={nome} onChange={(evento) => setNome(evento.target.value)} type="text" placeholder="Nome do contato" />
        <InfoAdd value={tel} onChange={(evento) => setTel(evento.target.value)} type="tel" placeholder="Telefone do contato" />
        <InfoAdd value={email} onChange={(evento) => setEmail(evento.target.value)} type="email" placeholder="Email do contato" />
        <BotaoAdd type="submit">Cadastrar</BotaoAdd>
      </Form>
    </MainContainer>
  )
}

export default Formulario
