import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalcState {
    currentNum: string
}

const initialState: CalcState = {
    currentNum: ''
}

const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        add(state, action: PayloadAction<string>) {
            const newNum = state.currentNum.concat(action.payload).match(/^[0-9,]*[.]{0,1}[0-9,]*$/)
            if(newNum !== null) {
                state.currentNum = state.currentNum.concat(action.payload)
            }
        },
        type(state, action: PayloadAction<string>) {
            const isAllow = action.payload.match(/^[0-9,]*[.]{0,1}[0-9,]*$/)
            console.log(action.payload)
            if(isAllow !== null) {
                state.currentNum = action.payload
            }
        },
        remove(state) {
            state.currentNum = state.currentNum.slice(0, -1)
        },
        clear(state) {
            state.currentNum = ''
        }
    }
})

export const calcActions = calcSlice.actions
export const calcReducer = calcSlice.reducer