import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: ${variaveis.cinzaClaro}
`

export const Campo = styled.input`
  margin-top: 8px;
  border; 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  width: 180px;
  padding: 4px;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.p`
  width: 100%;
  font-size: 18px;
  margin-top: 4px;
  padding: 16px 0;
  color: #eee;
`

export const Card = styled.div`
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${variaveis.branco};
`

export const Info = styled.input`
  padding: 4px 8px;
  font-weight: bold;
  font-size: 16px;
  background-color: ${variaveis.branco};
  color: #000;
  margin-bottom: 2px;
  border: 2px solid #000;
  width: 100%;
`

export const Nome = styled(Info)`
  padding: 4px 4px;
  font-size: 18px;
  text-decoration: underline;
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

export default EstiloGlobal
