
const initialState = {
    all: {}
}

export const MainReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {all: action.payload}
        default:
            return state
    }
}