import { ActionTypes, Action } from "../actions";

export function initReducer(state = {}, action: Action) {
    switch (action.type) {
        case ActionTypes.init:
            return {};
        default:
            return state;
    }
}
