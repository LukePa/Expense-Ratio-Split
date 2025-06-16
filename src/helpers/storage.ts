import type {IState} from "../interfaces/state";
import {useLocalStorage} from "./environments.ts";
import {getStateFromLocalStorage, saveStateToLocalStorage} from "./localStorage.ts";
import {getStateFromApi, saveStateToApi} from "./api.ts";


export async function getStateFromStorage(): Promise<IState> {
    if (!useLocalStorage()) {
        return getStateFromApi();
    } else {
        return getStateFromLocalStorage();
    }
}

export async function saveStateToStorage(state: IState) {
    if(!useLocalStorage()) {
        saveStateToApi(state);
    } else {
        saveStateToLocalStorage(state);
    }
}