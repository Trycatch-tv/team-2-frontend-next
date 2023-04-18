import { signIn } from '../authSlice'

export const authLogin = ({ email, password }) => {
  return dispatch => {
    // llamada a la api para validar usuario

    // dispatch para guardar datos de usuario en redux
    dispatch(signIn({ name: email, uid: Date.now() }))
  }
}
export const authRegister = ({ email, password, name }) => {
  return dispatch => {
    // llamada a la api para validar usuario

    // dispatch para guardar datos de usuario en redux
    dispatch(signIn({ name, uid: Date.now() }))
  }
}
