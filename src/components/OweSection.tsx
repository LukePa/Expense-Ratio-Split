import type {IState} from "../interfaces/state";
import calculateOwedAmounts from "../helpers/calculation.ts";


interface Props {state: IState}



export default function OweSection({state}: Props) {
    const owedAmounts = calculateOwedAmounts(state);
    
    
    return (
        <>
            <p>Luke: {owedAmounts?.luke}</p>
            <p>Dali: {owedAmounts?.dali}</p>
        </>
    )
}