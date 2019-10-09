import { applyMiddleware, createStore, compose } from "redux";
import { reducers } from "./reducers";

export const configStore = () => {
    const storeEnhancer = process.env.NODE_ENV
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

    const middlewares = applyMiddleware();

    const store = createStore(reducers, storeEnhancer(middlewares));

    return store;
};
