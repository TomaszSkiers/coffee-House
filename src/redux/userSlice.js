import { createSlice } from '@reduxjs/toolkit'

 const initialState = {
    name: localStorage.getItem('name') || sessionStorage.getItem('name') || 'login',
    accessToken: localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken') || null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload }
    },

    logoutUser: () => {
      return initialState
    },
  },
})

export const { setUser, logoutUser } = userSlice.actions

export const selectUserName = (state) => state.user.name

export default userSlice.reducer
