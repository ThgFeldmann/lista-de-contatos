import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { Botao, Campo } from '../../styles/index'
import { RootReducer } from '../../store'
import { alterarNome } from '../../store/reducers/filtro'
import BotaoAdicionar from '../../components/BtnAdicionar'

type Props = {
  mostrarFiltros: boolean
}

const SideBar = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { nome } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      {mostrarFiltros ? (
        <>
          <h2>Pesquisa de contatos</h2>
          <S.Filtros>
            <Campo
              placeholder='Nome do contato'
              type="text"
              value={nome}
              onChange={
                evento => dispatch(
                  alterarNome(evento.target.value)
                )
              }
            />
          </S.Filtros>
          <S.Filtrados>
            Procurando contatos por: {nome !== undefined && nome.length > 0 ? `"${nome}"` : ''}
          </S.Filtrados>
          <BotaoAdicionar />
        </>
        ) : (
          <S.BotaoVoltar onClick={() => navigate('/')}>Voltar para a lista de contatos</S.BotaoVoltar>
        )}
    </S.Aside>
  )
}

export default SideBar
