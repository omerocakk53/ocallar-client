import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   user: null,
//   tokens: null,
//   isAuthenticated: false,
// }

const loadFromLocalStorage = () => {
  const user = localStorage.getItem('user')
  const tokens = localStorage.getItem('tokens')
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  return {
    user: user ? JSON.parse(user) : null,
    tokens: tokens ? JSON.parse(tokens) : null,
    isAuthenticated,
  }
}

const initialStateFromStorage = loadFromLocalStorage()

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateFromStorage,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user
      state.tokens = action.payload.tokens
      state.isAuthenticated = true

      localStorage.setItem('user', JSON.stringify(state.user))
      localStorage.setItem('tokens', JSON.stringify(state.tokens))
      localStorage.setItem('isAuthenticated', 'true')
    },
    logout: (state) => {
      state.user = null
      state.tokens = null
      state.isAuthenticated = false

      localStorage.removeItem('user')
      localStorage.removeItem('tokens')
      localStorage.removeItem('isAuthenticated')
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions

export const selectUser = (state) => state.auth.user
export const selectTokens = (state) => state.auth.tokens
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated

export default authSlice.reducer
