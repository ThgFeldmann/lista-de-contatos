import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Card = styled.div`
  padding: 16px;
  border: 2px solid rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${variaveis.branco};
`

export const Nome = styled.input`
  padding: 0 4px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
  border: none;
  background-color: ${variaveis.branco};
  color: #000;
`

export const Info = styled.input`
  padding: 4px 8px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  background-color: ${variaveis.branco};
  color: #000;
`

export const Editando = styled.p`
  font-style: italic;
  font-weight: bold;
  font-size: 16px
`

export const ActionBar = styled.div`
  width: 100%;
  padding: 8px;
  margin-top: 6px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background-color: ${variaveis.cinzaEscuro};
`

export const BotaoSalvar = styled.button`
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background-color: ${variaveis.verde};
`

export const BotaoRemover = styled.button`
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background-color: ${variaveis.vermelho};
`
