import {type ReactNode, useState} from "react";


interface Props {
    title: string;
    children: ReactNode;
}


export default function Accordion({title, children}: Props) {
    const [open, setOpen] = useState(false);
    
    let accordianContentClass = "rounded-md border-gray-200 bg-gray-100 transition-all ";
    if (!open) {
        accordianContentClass += "max-h-0"
    } else {
        accordianContentClass += "max-h-100 border-t-1 border-3"
    }
    
    const toggleOpen = () => {
        setOpen(!open);
    }
    
    return (
        <div className="overflow-hidden">
            <div className="bg-gray-200 flex justify-between rounded-md p-5">
                <span className="font-thin">{title}</span>
                <button onClick={toggleOpen}>{open ? "Close" : "Open"}</button>
            </div>
            
            <div className={accordianContentClass}>
                <div className="p-5">
                    {children}
                </div>
            </div>
        </div>
    )
}