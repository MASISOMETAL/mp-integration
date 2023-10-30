import { createSlice } from '@reduxjs/toolkit';
import { Cels } from "../data/CelularesMock"

const initialState = {
    cels: Cels,
    selectItem: null,
}

export const celuSlice = createSlice({
    name: "celuSlice",
    initialState,
    reducers: {
        selectCel: (state, action) => {
            state.selectItem = action.payload
        }
    }
})

export const { selectCel } = celuSlice.actions

export default celuSlice.reducer