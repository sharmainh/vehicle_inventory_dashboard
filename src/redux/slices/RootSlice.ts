import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        color: "Color",
        year: "Year",
        price: "Price",
        top_speed: "Top Speed",
        _range: "Range",
        fast_charge: "Fast Charge",
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseTop_Speed: (state, action) => { state.top_speed = action.payload},
        chooseRange: (state, action) => { state._range = action.payload},
        chooseFast_Charge: (state, action) => { state.fast_charge = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {  chooseMake, chooseModel, chooseColor, chooseYear, choosePrice, chooseTop_Speed, chooseRange, chooseFast_Charge } = rootSlice.actions