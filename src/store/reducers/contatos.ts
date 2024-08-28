import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Fulano deTal',
      tel: '(XX) YY 99999999',
      email: 'fulano@gmail.com',
      id: 1,
    },
    {
      nome: 'Siclano deTal',
      tel: '(XX) YY 99999999',
      email: 'Siclano@gmail.com',
      id: 2,
    },
    {
      nome: 'Delano deTal',
      tel: '(XX) YY 99999999',
      email: 'Delano@gmail.com',
      id: 3,
    },
    {
      nome: 'Fulana deTal',
      tel: '(XX) YY 99999999',
      email: 'Fulana@gmail.com',
      id: 4
    },
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
