import type {ISubscription} from "../interfaces/state";
import TitledMoneyAmountInput from "./TitledMoneyAmountInput.tsx";


interface Props {
    subscription: ISubscription
    updateValue: (newValue: number | undefined) => void
    onDelete: () => void
    disabled: boolean
}

export default function NonEssentialSubscription({subscription, updateValue, onDelete, disabled}: Props) {
    
    let containerClassName = "flex items-stretch flex-1"
    let deleteButtonClassName = "";
    
    if (!disabled) {
        containerClassName += " gap-5";
    } else {
        deleteButtonClassName += " hidden";
    }
    
    return (
        <div className={containerClassName}>
            <button className={deleteButtonClassName} onClick={onDelete}>x</button>
            <TitledMoneyAmountInput 
                title={subscription.title} 
                value={subscription.cost} 
                setValue={updateValue} 
                disabled={disabled} 
            />
        </div>
    )
}