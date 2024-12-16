import { configureStore } from '@reduxjs/toolkit'
import  registerSlice  from '../Features/RegisterSlice'


export const store = configureStore({
    reducer: {
        Register: registerSlice,
    },
})