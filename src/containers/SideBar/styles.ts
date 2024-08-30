import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Titulo } from "../../styles";

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.cinzaEscuro};
  color: #eee;
  height: 100vh;
`

export const Filtros = styled.div`
  display: block;
`

export const Filtrados = styled(Titulo)`
  margin-top: 8px;
  padding: 6px 0;
`
