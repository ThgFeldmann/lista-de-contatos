import { styled } from "styled-components";
import { Botao, Card, Info, Nome } from "../../styles";
import variaveis from "../../styles/variaveis";

export const CardAdd = styled(Card)`
  max-width: 40%;
  width: 100%;
`

export const InfoAdd = styled(Info)`
  margin: 4px 0;
`

export const NomeAdd = styled(Nome)`
  text-decoration: none;
  margin-bottom: 4px;
`

export const BotaoAdd = styled(Botao)`
  background-color: ${variaveis.verde};
`
