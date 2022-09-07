import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiError} from "../../model/error.model";
import {CalcRequest, calculationService} from "../../service/calculation.service";

const doubleRegex = /^[0-9,]*[.]{0,1}[0-9,]*$/

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

export const CALCULATION_ACTION = 'calculation/result'

const calcResult = createAsyncThunk<String, CalcRequest, { rejectValue: ApiError }>(
    CALCULATION_ACTION,
    async (request: CalcRequest, thunkApi) => {
        try {
            const response = await calculationService.calculation(request)
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.data}
            return thunkApi.rejectWithValue(err)
        }
    }
)

const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        add(state, action: PayloadAction<string>) {
            console.log(state.isLoading)

                const isAllow = state.currentNum.concat(action.payload).match(doubleRegex)
                if (isAllow !== null && state.currentNum.length < 20) {
                    state.currentNum = state.currentNum.concat(action.payload)
                }

        },
        type(state, action: PayloadAction<string>) {
            const isAllow = action.payload.match(doubleRegex)
            if (isAllow !== null && state.currentNum.length < 20) {
                state.currentNum = action.payload
            }
        },
        remove(state) {
            state.currentNum = state.currentNum.slice(0, -1)
        },
        setOperation(state, action: PayloadAction<string>) {
            state.previousNum = state.currentNum
            state.operation = action.payload
            state.currentNum = ''
        },
        clear(state) {
            state.currentNum = ''
            state.previousNum = ''
            state.operation = ''
        }
    },
    extraReducers: builder => {
        builder.addCase(calcResult.pending, state => {
            state.isLoading = true
        })
        builder.addCase(calcResult.fulfilled, (state, {payload}) => {
            state.isLoading = true
            state.operation = ''
            state.previousNum = ''
            state.currentNum = String(payload)
        })
        builder.addCase(calcResult.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload
        })
    }
})

export const calcActions = calcSlice.actions
export const calcReducer = calcSlice.reducer
export {calcResult}