import type {IState} from "../interfaces/state";
import {isProduction} from "./environments.ts";
import {getStateFromLocalStorage, saveStateToLocalStorage} from "./localStorage.ts";
import {getStateFromApi, saveStateToApi} from "./api.ts";


export async function getStateFromStorage(): Promise<IState> {
    if (isProduction()) {
        return getStateFromApi();
    } else {
        return getStateFromLocalStorage();
    }
}

export async function saveStateToStorage(state: IState) {
    if(isProduction()) {
        saveStateToApi(state);
    } else {
        saveStateToLocalStorage(state);
    }
}