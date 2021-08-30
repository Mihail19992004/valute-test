
export interface StateProp {
    fullName: any
    loading: boolean
    error: null | string
}
const initIalState: StateProp = {
    fullName: [],
    error: null,
    loading: false
}
interface NameProps {
    name: string
    value: number
}
export enum ActionEnum {
    FETCH_NAMES= "FETCH_NAMES",
    FETCH_NAMES_SUCCESS = "FETCH_NAMES_SUCCESS",
    FETCH_NAMES_ERROR ="FETCH_NAMES_ERROR"
}
interface ActionNamesFetch {
    type: ActionEnum.FETCH_NAMES
}
interface ActionNamesSuccessFetch {
    type: ActionEnum.FETCH_NAMES_SUCCESS
    payload: NameProps[]
}
interface ActionNamesErrorFetch {
    type: ActionEnum.FETCH_NAMES_ERROR
    payload: string
}
export type ActionTypes = ActionNamesFetch | ActionNamesErrorFetch | ActionNamesSuccessFetch
export const fullNameCitiesReducer = (state=initIalState, action: ActionTypes):StateProp=> {
    switch (action.type) {
        case ActionEnum.FETCH_NAMES:
            return {fullName: [], error: null, loading: true}
        case ActionEnum.FETCH_NAMES_SUCCESS:
            return {fullName: action.payload, loading: false, error: null}
        case ActionEnum.FETCH_NAMES_ERROR:
            return {fullName: [], loading: false, error: action.payload}
        default:
            return state
    }
}