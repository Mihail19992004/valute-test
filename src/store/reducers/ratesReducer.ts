
export interface StateProp {
    rates: any
    loading: boolean
    error: null | string
}
const initIalState: StateProp = {
    rates: [],
    error: null,
    loading: false
}
interface RatesProp {
    name: string
    value: number
}
export enum ActionEnum {
    FETCH_RATES= "FETCH_USERS",
    FETCH_RATES_SUCCESS = "FETCH_RATES_SUCCESS",
    FETCH_RATES_ERROR ="FETCH_RATES_ERROR"
}
interface ActionRatesFetch {
    type: ActionEnum.FETCH_RATES
}
interface ActionRatesSuccessFetch {
    type: ActionEnum.FETCH_RATES_SUCCESS
    payload: RatesProp[]
}
interface ActionRatesErrorFetch {
    type: ActionEnum.FETCH_RATES_ERROR
    payload: string
}
export type ActionTypes = ActionRatesErrorFetch | ActionRatesFetch | ActionRatesSuccessFetch
        export const ratesReducer = (state=initIalState, action: ActionTypes):StateProp=> {
                switch (action.type) {
                    case ActionEnum.FETCH_RATES:
                        return {rates: [], error: null, loading: true}
                    case ActionEnum.FETCH_RATES_SUCCESS:
                        return {rates: action.payload, loading: false, error: null}
                    case ActionEnum.FETCH_RATES_ERROR:
                        return {rates: [], loading: false, error: action.payload}
                    default:
                        return state
                }
        }