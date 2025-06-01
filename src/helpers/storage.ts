import type {IState} from "../interfaces/state";


export function getStateFromStorage(): IState {
    // TODO make this get its state out of local storage
    
    return {
        lukeWage: 10000,
        daliWage: 10000,

        rent: 1000,
        utility: 100,
        wifi: 50,
        water: 50,
        food: 400,

        nonEssentialSubscriptions: [{title: "Netflix", cost: 6}]
    }
}

export function saveStateToStorage(state: IState) {
    // TODO make this actually do something
    console.log("saveStateToStorage", state);
    return;
}