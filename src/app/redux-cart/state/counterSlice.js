import { createSlice } from '@reduxjs/toolkit'
// with redux toolkit, we create reducer, action types and action creators together..
// npm i @reduxjs/toolkit
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    // increment is action, the state => is the case statement logic
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
     // tODO. implement "reset" slice, set the state to 0, no payload
    // export reset in actions
    // in the toolkitcounter component, add a button to reset count to 0
    reset : (state) => {
      state.value = 0
    }
   
  }
})
// Action creators are generated for each case reducer function + act like action types
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
// Reducer
export default counterSlice.reducer