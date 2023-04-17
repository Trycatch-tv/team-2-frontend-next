import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
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
    signIn: (state, action) => {},
    logout: (state, action) => {}
  }
})
export const { signIn, logout, startLoadingLogin } = authSlice.actions
