import styled from "styled-components";

export const ListaContatos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
`

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Filtrados = styled.p`
  width: 100%;
  font-size: 18px;
  margin-top: 4px;
  padding: 16px 0;
  color: #eee;
`
