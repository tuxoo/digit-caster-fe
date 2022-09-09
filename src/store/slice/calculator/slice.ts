import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiError} from "../../../model/error.model";
import {toast} from "react-toastify";
import {getResultAsync} from "./async-thunk";

const dotCheckRegex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/
const zeroCheckRegex = /((\b|\+|-)(0|([1-9][0-9]*))(\.[0-9]+)?)\b/

export interface CalcState {
    previousNum: string
    currentNum: string
    operation: string
    isLoading: boolean
    error?: ApiError
}

const initialState: CalcState = {
    previousNum: '',
    currentNum: '',
    operation: '',
    isLoading: false,
    error: undefined
}

const slice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        add(state, action: PayloadAction<string>) {
            const newNum = state.operation === '=' ? action.payload : state.currentNum + action.payload

            state.operation = state.operation === '=' ? '' : state.operation

            const isAllow = newNum.match(dotCheckRegex) && newNum.match(zeroCheckRegex)

            if (isAllow !== null && newNum.length <= 20) {
                state.currentNum = newNum
            }
        },
        type(state, action: PayloadAction<string>) {
            if (action.payload === '') {
                state.currentNum = ''
            } else {
                const isAllow = action.payload.match(dotCheckRegex) && action.payload.match(zeroCheckRegex)
                if (isAllow !== null && state.currentNum.length < 20) {
                    state.currentNum = action.payload
                }
            }
        },
        remove(state) {
            const len = state.currentNum.length
            if (len <= 1) {
                state.currentNum = ''
            } else {
                state.currentNum = `${state.currentNum}`.substring(0, len - 1)
            }
        },
        setOperation(state, action: PayloadAction<string>) {
            if (state.currentNum !== '' && (state.operation === '' || state.operation === '=')) {
                state.previousNum = state.currentNum
                state.operation = action.payload
                state.currentNum = ''
            }
            // else if (state.currentNum === '') {
            //     state.operation = action.payload
            // }
            state.operation = action.payload
        },
        clear(state) {
            state.currentNum = ''
            state.previousNum = ''
            state.operation = ''
        }
    },
    extraReducers: builder => {
        builder.addCase(getResultAsync.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getResultAsync.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.operation = '='
            state.previousNum = ''
            state.currentNum = payload
        })
        builder.addCase(getResultAsync.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload
            toast.error("Something went wrong")
        })
    }
})

export const calcActions = slice.actions
export const calcReducer = slice.reducer