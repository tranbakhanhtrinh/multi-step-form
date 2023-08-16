import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Plan = {
  data:{
    plan: string,
    price: number
  }
}

const initialState:Plan = {
  data: {
    plan: '',
    price: 0
  }
}

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlan: (state: any, action: PayloadAction<Plan['data']>) => {
      state.data = action.payload
    }
  }
})

export default planSlice.reducer
