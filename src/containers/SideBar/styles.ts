import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Botao, Titulo } from "../../styles";

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

export const BotaoVoltar = styled(Botao)`
  background-color: ${variaveis.vermelho};
  font-size: 14px;
`
