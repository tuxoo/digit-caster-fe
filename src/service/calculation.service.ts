import {AxiosPromise} from 'axios';
import {host} from "../http/axios";

export interface CalcRequest {
    previousNum: number
    currentNum: number
    operation: string
}

class CalculationService {
    public calculation(calcState: CalcRequest): AxiosPromise<String> {
        return host.post<String>('/api/v1/calculation', calcState)
    }
}

export const calculationService = new CalculationService()