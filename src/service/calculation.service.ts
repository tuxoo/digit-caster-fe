import {AxiosPromise} from 'axios';
import {host} from "../http/axios";

export interface CalcRequest {
    previousNum: number
    currentNum: number
    operation: string
}

class CalculationService {
    public calculation(calcState: CalcRequest): AxiosPromise<string> {
        return host.post<string>('/api/v1/calculation', calcState)
    }
}

export const calculationService = new CalculationService()