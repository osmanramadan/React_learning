import {DETAILS} from '../types/moviesType'

const initalValue = { details: []}

export const detailsReducer = (state = initalValue, action) => {
    switch (action.type) {
        case DETAILS:
            return {details: action.data }
        default:
            return state;
    }
}
