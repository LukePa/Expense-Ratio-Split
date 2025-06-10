import type {ISubscription} from "../interfaces/state";
import NonEssentialSubscription from "./NonEssentialSubscription.tsx";
import Accordion from "./Accodion.tsx";


interface Props {
    subscriptions: Array<ISubscription>
    addSubscription: (subscription: ISubscription) => void
    removeSubscription: (subscriptionIndex: number) => void
    updateSubscription: (subscriptionIndex: number, newValue: number | undefined) => void
    disabled: boolean
}

export default function NonEssentialSubscriptions({subscriptions, addSubscription, removeSubscription, updateSubscription, disabled}: Props) {
    
    let addButtonClass = "rounded-sm cursor-pointer bg-green-800 text-white px-2 py-2 self-start"
    if (disabled) {
        addButtonClass += " hidden";
    }
    
    function addNewSubscription() {
        addSubscription({title: "TEST", cost: 30})
    }
    
    return (
        <Accordion title="Non Essential Subscriptions">
            <div className="flex flex-col items-stretch flex-1">
                <button className={addButtonClass} onClick={addNewSubscription}>+</button>
                <div className="flex flex-col gap-5 items-stretch flex-1">
                    {subscriptions.map((subscription, index) => {
                        return (
                            <NonEssentialSubscription
                                subscription={subscription}
                                onDelete={() => removeSubscription(index)}
                                disabled={disabled}
                                updateValue={(val) => updateSubscription(index, val)}
                            />
                                
                        )
                    })}
                </div>
            </div>
        </Accordion>
    )    
}