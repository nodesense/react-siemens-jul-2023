import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
    errorMessage: ''
  },
  reducers: {
    loading: (state, action) => {
        state.loading = action.payload //  payload is either true or false
    },

    setError: (state, action) => {
        state.errorMessage = action.payload // payload exception or error message of service
    },

    setProduct: (state, action) => {
        state.products = action.payload // payload is products array of objects
    }
}
})

export const { loading, setError, setProduct } = productSlice.actions
export default productSlice.reducer