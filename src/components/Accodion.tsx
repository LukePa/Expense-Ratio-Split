import {type ReactNode, useState} from "react";


interface Props {
    title: string;
    children: ReactNode;
}


export default function Accordion({title, children}: Props) {
    const [open, setOpen] = useState(false);
    
    let accordianContentClass = "border-3 border-gray-200 rounded-md border-t-1  p-5 bg-gray-100";
    if (!open) {
        accordianContentClass += "max-h-0 hidden"
    }
    
    const toggleOpen = () => {
        setOpen(!open);
    }
    
    return (
        <div>
            <div className="bg-gray-200 flex justify-around rounded-md">
                <span>{title}</span>
                <button onClick={toggleOpen}>{open ? "Close" : "Open"}</button>
            </div>
            
            <div className={accordianContentClass}>
                {children}
            </div>
        </div>
    )
}