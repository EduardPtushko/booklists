import { ActionTypes } from "./types";

export interface ActionInit {
    type: ActionTypes.init;
}

export function init(): ActionInit {
    return {
        type: ActionTypes.init,
    };
}
