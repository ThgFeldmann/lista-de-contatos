import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { Campo } from '../../styles/index'
import { RootReducer } from '../../store'
import { alterarNome } from '../../store/reducers/filtro'

const SideBar = () => {
  const dispatch = useDispatch()
  const { nome } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <h2>Pesquisa de contatos</h2>
      <S.Filtros>
        <Campo placeholder='Nome do contato' type="text" value={nome} onChange={evento => dispatch(alterarNome(evento.target.value))} />
        {/* <Campo placeholder='Telefone do contato' type="tel" />
        <Campo placeholder='Email do contato' type="email" /> */}
      </S.Filtros>
      <S.Filtrados>
        Procurando contatos por: {nome !== undefined && nome.length >= 0 ? `"${nome}"` : ''}
      </S.Filtrados>
    </S.Aside>
  )
}

export default SideBar
