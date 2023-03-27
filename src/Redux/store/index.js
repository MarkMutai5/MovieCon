import { configureStore } from '@reduxjs/toolkit'

import movieReducer from '../Slices/movies'

export const store = configureStore({
    reducer:{
        movies : movieReducer,
    }
})