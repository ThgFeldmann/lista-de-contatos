import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type FiltroState = {
  nome: string
  tel: string
  email: string
}

const initialState: FiltroState = {
  nome: '',
  tel: '',
  email: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarNome: (state, action: PayloadAction<string>) => {
      state.nome = action.payload
    }
  }
})

export const { alterarNome } = filtroSlice.actions

export default filtroSlice.reducer
