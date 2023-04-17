import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  name: null,
  uid: null
}
export const authSlice = createSlice({
  name: 'Auth',
  initialState,

  reducers: {
    startLoadingLogin: state => {
      state.isLoading = true
    },
    signIn: (state, action) => {
      state.isLoading = true
      state.name = action.payload.name
      state.uid = action.payload.uid
    },
    logout: (state, action) => {}
  }
})
export const { signIn, logout, startLoadingLogin } = authSlice.actions
