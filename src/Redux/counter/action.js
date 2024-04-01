import { INCRE, DECRE, RESET } from "./actionitems"

export function increment(val) {
    return {
        type: INCRE,
        payload: val
    }
}

export function decrement(val) {
    return {
        type: DECRE,
        payload: val
    }
}


export function reset() {
    return {
        type: RESET
    }
}