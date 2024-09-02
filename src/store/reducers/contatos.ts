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
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExiste) {
        alert('Já existe um contato com esse nome. ')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
