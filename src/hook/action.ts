import {calcActions} from "../store/slice/calc.slice";
import {bindActionCreators} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'

const actions = {
    ...calcActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}