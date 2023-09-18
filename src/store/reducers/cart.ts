import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Cardapio[]
  visible: boolean
}

const initialState: CartState = {
  items: [],
  visible: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const cardapio = state.items.find((item) => item.id === action.payload.id)

      if (!cardapio) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.visible = true
    },
    close: (state) => {
      state.visible = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
