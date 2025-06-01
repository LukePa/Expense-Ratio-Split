
interface Props {
    title: string;
    value: number;
    setValue: (value: number) => void;
    disabled: boolean;
}

export default function TitledNumberInput({title, value, setValue, disabled}: Props) {
    return (
        <div>
            <span>{title}</span>
            <span>
                £
            </span>
                <input 
                    name={title}
                    value={value} 
                    disabled={disabled} 
                    onChange={e => setValue(Number(e.target.value))} 
                    type="number"
                />
        </div>
    )
}