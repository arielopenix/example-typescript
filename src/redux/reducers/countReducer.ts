import {counterTypes } from '../actions/types/countTypes'
export type CounterState = {
    id: number,
    num: number
}

const initialState: number = 0

export function countReducer(state: any = initialState, action: any){
    switch (action.type) {
        case counterTypes.INCREMENT:
            return state + 1
            
        case counterTypes.DECREMENT:
            return state - 1
        default: return state;
    }
}