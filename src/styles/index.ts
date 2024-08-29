import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
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


export default EstiloGlobal
