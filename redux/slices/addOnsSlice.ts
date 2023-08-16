import { createSlice } from '@reduxjs/toolkit'

type AddOns = {
  title: string,
  subTitle: string,
  price: number
  checked: true
}

type InitialState = {
    data: AddOns[]
}

const initialState: InitialState = {
  data: []
}

export const addOnsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    setAddONS: (state, action) => {
      state.data = action.payload
    }
  }
})

export default addOnsSlice.reducer
