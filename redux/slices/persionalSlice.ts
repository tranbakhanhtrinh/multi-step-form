import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type PersonalInfo = {
  data: {
    username: string
    email: string
    phone: string
  },
  isNext: boolean
}

const initialState: PersonalInfo = {
  data: {
    username: '',
    email: '',
    phone: ''
  },
  isNext: false
}

export const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
    setInfo: (state: any, action: PayloadAction) => {
      state.data = action.payload
    }
    // setNextPersonInfo: (state: any, action: PayloadAction<PersonalInfo['isNext']>) => {
    //   state.isNext = action.payload
    // }
  }
})

export default personalInfoSlice.reducer
