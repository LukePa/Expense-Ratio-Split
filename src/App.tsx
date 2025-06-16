
import './App.css'
import {getInitialState} from "./helpers/initialState.ts";
import LoadedPage from "./components/LoadedPage.tsx";
import {Suspense} from "react";
import LoadingPage from "./components/LoadingPage.tsx";


function App() {
    
    return (
        <div className="overflow-y-auto bg-blue-200 min-h-dvh">
            <Suspense fallback={<LoadingPage />}>
                <LoadedPage statePromise={getInitialState()} />
            </Suspense>
        </div>
    )
}

export default App
