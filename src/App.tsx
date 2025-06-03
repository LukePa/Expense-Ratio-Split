
import './App.css'
import {useEffect, useState} from "react";
import {getInitialState} from "./helpers/initialState.ts";
import {saveStateToStorage} from "./helpers/storage.ts";
import TitledMoneyAmountInput from "./components/TitledMoneyAmountInput.tsx";
import NonEssentialSubscriptions from "./components/NonEssentialSubscriptions.tsx";
import type {ISubscription} from "./interfaces/state";
import OweSection from "./components/OweSection.tsx";


function App() {
    const [enableEdit, setEnableEdit] = useState(false);
    const [state, setState] = useState(getInitialState)
    
    useEffect(() => {
        saveStateToStorage(state)
    }, [state])
    
    const setLukesWage = (value: number | undefined) => {
        setState({...state, lukeWage: value})
    }

    const setDalisWage = (value: number | undefined) => {
        setState({...state, daliWage: value})
    }
    
    const setRent = (value: number | undefined) => {
        setState({...state, rent: value})
    }

    const setUtility = (value: number | undefined) => {
        setState({...state, utility: value})
    }
    
    const setWater = (value: number | undefined) => {
        setState({...state, water: value})
    }

    const setWifi = (value: number | undefined) => {
        setState({...state, wifi: value})
    }
    
    const setFood = (value: number | undefined) => {
        setState({...state, food: value})
    }
    
    const addSubscription = (newSubscription: ISubscription) => {
        const alreadyHasSubscription = state.nonEssentialSubscriptions.some(sub => {
            return sub.title === newSubscription.title;
        })
        
        if (!alreadyHasSubscription) {
            setState({...state, nonEssentialSubscriptions: [...state.nonEssentialSubscriptions, newSubscription]})
        }
    }
    
    const updateSubscription = (index: number, newVal: number | undefined) => {
        const newSubscriptions = state.nonEssentialSubscriptions.map((sub, i) => {
            if (i === index) {
                return {...sub, cost: newVal};
            } else {
                return {...sub}
            }
        })
        
        setState({...state, nonEssentialSubscriptions: newSubscriptions})
    }
    
    const deleteSubscription = (index: number) => {
        const newSubscriptions = state.nonEssentialSubscriptions.filter((sub, i) => {
            return i !== index;
        })

        setState({...state, nonEssentialSubscriptions: newSubscriptions})
    }
    
    let buttonClass = "rounded-sm cursor-pointer text-white px-5 py-2"
    buttonClass += ` ${enableEdit ? "bg-red-800" : "bg-green-800"}`
    
    return (
        <div>
            <button onClick={() => setEnableEdit(!enableEdit)} className={buttonClass}>
                {enableEdit ? "Lock" : "Enable"} Editting
            </button>
            
            <OweSection state={state} />
            
            <div className="flex flex-col gap-5">
                <TitledMoneyAmountInput 
                    title="Luke's Monthly Wage" 
                    value={state.lukeWage} 
                    setValue={setLukesWage} 
                    disabled={!enableEdit} 
                />

                <TitledMoneyAmountInput
                    title="Dali's Monthly Wage"
                    value={state.daliWage}
                    setValue={setDalisWage}
                    disabled={!enableEdit}
                />

                <TitledMoneyAmountInput
                    title="Rent"
                    value={state.rent}
                    setValue={setRent}
                    disabled={!enableEdit}
                />

                <TitledMoneyAmountInput
                    title="Utilities"
                    value={state.utility}
                    setValue={setUtility}
                    disabled={!enableEdit}
                />

                <TitledMoneyAmountInput
                    title="Water"
                    value={state.water}
                    setValue={setWater}
                    disabled={!enableEdit}
                />

                <TitledMoneyAmountInput
                    title="Wifi"
                    value={state.wifi}
                    setValue={setWifi}
                    disabled={!enableEdit}
                />

                <TitledMoneyAmountInput
                    title="Food"
                    value={state.food}
                    setValue={setFood}
                    disabled={!enableEdit}
                />
            </div>
            
            
            <NonEssentialSubscriptions 
                subscriptions={state.nonEssentialSubscriptions} 
                addSubscription={addSubscription} 
                removeSubscription={deleteSubscription} 
                updateSubscription={updateSubscription} 
                disabled={!enableEdit} 
            />
        </div>
    )
}

export default App
