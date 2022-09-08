import {createAsyncThunk} from "@reduxjs/toolkit";
import {CalcRequest, calculationService} from "../../../service/calculation.service";
import {ApiError} from "../../../model/error.model";

export const CALCULATION_ACTION = 'calculation/result'

export const getResultAsync = createAsyncThunk<string, CalcRequest, { rejectValue: ApiError }>(
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