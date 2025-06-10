import type {ISubscription} from "../interfaces/state";
import NonEssentialSubscription from "./NonEssentialSubscription.tsx";
import Accordion from "./Accodion.tsx";
import IconButton from "./IconButton.tsx";
import {faAdd} from "@fortawesome/free-solid-svg-icons";


interface Props {
    subscriptions: Array<ISubscription>
    addSubscription: (subscription: ISubscription) => void
    removeSubscription: (subscriptionIndex: number) => void
    updateSubscription: (subscriptionIndex: number, newValue: number | undefined) => void
    disabled: boolean
}

export default function NonEssentialSubscriptions({subscriptions, addSubscription, removeSubscription, updateSubscription, disabled}: Props) {
    
    let addButtonClass = "self-center mt-5"
    if (disabled) {
        addButtonClass += " hidden";
    }
    
    function addNewSubscription() {
        addSubscription({title: "TEST", cost: 30})
    }
    
    return (
        <Accordion title="Non Essential Subscriptions">
            <div className="flex flex-col items-stretch flex-1">
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
                
                <IconButton 
                    icon={faAdd} 
                    onClick={addNewSubscription} 
                    className={addButtonClass} 
                    label="New"
                />
            </div>
        </Accordion>
    )    
}