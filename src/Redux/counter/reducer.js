import { INCRE,DECRE,RESET } from "./actionitems";

export function coreducer(state = { count: 0 }, { type, payload }) {
    switch (type) {
        case INCRE: {
            return {
                count: state.count + payload,
            };
        }

        case DECRE: {
            return {
                count: state.count - payload,
            };
        }
        case RESET: {
            return {
                count: 0
            };
        }
        default: {
            return state;
        }
    }
}