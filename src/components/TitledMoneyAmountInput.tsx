import StyledInput from "./StyledInput.tsx";

interface Props {
    title: string;
    value: number | undefined;
    setValue: (value: number | undefined) => void;
    disabled: boolean;
}

export default function TitledMoneyAmountInput({title, value, setValue, disabled}: Props) {
    
    const inputValue = value === undefined ? "" : value.toString();
    
    function setNewValue(val: string) {
        let newVal: number | undefined;

        if (val === "") {
            newVal = undefined;
        } else if (!Number.isNaN(Number(val))) {
            newVal = Number(val);
        } else {
            newVal = value;
        }
        setValue(newVal)
    }
    
    return (
        <div className="flex flex-col items-stretch flex-1">
            <span className="font-thin">{title}</span>
            <div className="flex flex-1 gap-2">
                <span>
                    £
                </span>
                <StyledInput 
                    value={inputValue} 
                    onChange={setNewValue} 
                    type="number" 
                    disabled={disabled} 
                />
            </div>
        </div>
    )
}