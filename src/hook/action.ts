import {useDispatch} from 'react-redux'
import {AppDispatch} from "../store/store";
import {bindActionCreators} from "@reduxjs/toolkit";
import {calcActions} from "../store/slice/calc.slice";

const actions = {
    ...calcActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}

export const useAppDispatch = () => useDispatch<AppDispatch>();