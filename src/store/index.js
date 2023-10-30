import { configureStore } from '@reduxjs/toolkit'
import CeluSlice from '../features/CeluSlice'

export const store = configureStore({
    reducer: {
        celSlice: CeluSlice,
    },
})