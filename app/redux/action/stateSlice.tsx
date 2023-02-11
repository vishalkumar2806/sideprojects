import { createSlice } from '@reduxjs/toolkit'
interface stateSlice {
  generate : boolean,
  link : string,
  loading: boolean
}
interface payloadModel{
  link : string
}
const initialState : stateSlice = {
  generate : false,
  link: '',
  loading: true,
}

export const stateSlice = createSlice({
  name: 'currentState',
  initialState,
  reducers : { 
    loading : (state) => { 
      state.loading = !state.loading
    },
    generate : (state) => { 
      state.generate = !state.generate
    },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, } = counterSlice.actions
export const {loading, generate} = stateSlice.actions
export default stateSlice.reducer