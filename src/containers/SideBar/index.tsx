import { Campo } from '../../components/Filtro/styles'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <h2>Pesquisa de contatos</h2>
    <S.Filtros>
      <Campo placeholder='Nome do contato' type="text" name="" id="" />
      <Campo placeholder='Telefone do contato' type="tel" name="" id="" />
      <Campo placeholder='Email do contato' type="email" name="" id="" />
    </S.Filtros>
    <S.Filtrados>
      Contatos encontrados: 2
    </S.Filtrados>
  </S.Aside>
)

export default SideBar
