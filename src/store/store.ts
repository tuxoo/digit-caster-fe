import {configureStore} from "@reduxjs/toolkit";
import {calcReducer} from "./slice/calculator/slice";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        calc: calcReducer
    }
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>