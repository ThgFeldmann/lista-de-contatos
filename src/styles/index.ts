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

export default EstiloGlobal
