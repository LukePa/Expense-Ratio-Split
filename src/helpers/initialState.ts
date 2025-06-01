import type {IState} from "../interfaces/state";
import {getStateFromStorage} from "./storage.ts";


export function getInitialState(): IState {
    const state = getStateFromStorage();
    
    // TODO use query params to update the state
    
    return state;
}