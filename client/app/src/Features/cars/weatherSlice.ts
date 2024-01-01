import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import mongoose from "mongoose";


type weatherState = {
    placeId: number | mongoose.Types.ObjectId
};

const initialState: weatherState = {
    placeId: 0,
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        selectPlace: (state, action: PayloadAction<number | mongoose.Types.ObjectId>) => {
            state.placeId = action.payload
        },
        addPlace: (state, action: PayloadAction<number | mongoose.Types.ObjectId >) => {
            state.placeId = action.payload
        }
    },
});


export const { selectPlace, addPlace } = weatherSlice.actions
export default weatherSlice.reducer