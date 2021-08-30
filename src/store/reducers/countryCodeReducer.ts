
export interface StateProp {
    countryCode: any
    loading: boolean
    error: null | string
}
const initIalState: StateProp = {
    countryCode: [],
    error: null,
    loading: false
}
interface CodeProps {
    name: string
    value: number
}
export enum ActionEnum {
    FETCH_CODE= "FETCH_CODE",
    FETCH_CODE_SUCCESS = "FETCH_CODE_SUCCESS",
    FETCH_CODE_ERROR ="FETCH_CODE_ERROR"
}
interface ActionCodeFetch {
    type: ActionEnum.FETCH_CODE
}
interface ActionCodeSuccessFetch {
    type: ActionEnum.FETCH_CODE_SUCCESS
    payload: CodeProps[]
}
interface ActionCodeErrorFetch {
    type: ActionEnum.FETCH_CODE_ERROR
    payload: string
}
export type ActionTypes = ActionCodeFetch | ActionCodeSuccessFetch | ActionCodeErrorFetch
export const countryCodeReducer = (state=initIalState, action: ActionTypes):StateProp=> {
    switch (action.type) {
        case ActionEnum.FETCH_CODE:
            return {countryCode: [], error: null, loading: true}
        case ActionEnum.FETCH_CODE_SUCCESS:
            return {countryCode: action.payload, loading: false, error: null}
        case ActionEnum.FETCH_CODE_ERROR:
            return {countryCode: [], loading: false, error: action.payload}
        default:
            return state
    }
}