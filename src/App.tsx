
import './App.css'
import {useEffect, useState} from "react";
import {getInitialState} from "./helpers/initialState.ts";
import {saveStateToStorage} from "./helpers/storage.ts";
import TitledNumberInput from "./components/TitledNumberInput.tsx";


function App() {
    const [enableEdit, setEnableEdit] = useState(false);
    const [state, setState] = useState(getInitialState())
    
    useEffect(() => {
        saveStateToStorage(state)
    }, [state])
    
    const setLukesWage = (value: number) => {
        setState({...state, lukeWage: value})
    }
    
    let buttonClass = "rounded-sm cursor-pointer text-white px-5 py-2"
    buttonClass += ` ${enableEdit ? "bg-red-800" : "bg-green-800"}`
    
    return (
        <div>
            <button onClick={() => setEnableEdit(!enableEdit)} className={buttonClass}>
                {enableEdit ? "Lock" : "Enable"} Editting
            </button>
            
            <div>
                <TitledNumberInput 
                    title="Lukes Monthly Wage" 
                    value={state.lukeWage} 
                    setValue={setLukesWage} 
                    disabled={!enableEdit} 
                />
            </div>
        </div>
    )
}

export default App
