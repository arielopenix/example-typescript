import {counterTypes} from './types/countTypes'

export const increment = () => {
    return {
        type: counterTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: counterTypes.DECREMENT
    }
}