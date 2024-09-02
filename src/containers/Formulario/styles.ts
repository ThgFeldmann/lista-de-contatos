import { styled } from "styled-components";
import { Botao, Info, Nome } from "../../styles";
import variaveis from "../../styles/variaveis";

// export const CardAdd = styled(Card)`
//   max-width: 40%;
//   width: 100%;
// `

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;

  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${variaveis.branco};
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
