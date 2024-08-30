import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Botao } from "../../styles";

export const ActionBar = styled.div`
  width: 100%;
  padding: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
