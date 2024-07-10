import { ChevronDown } from "lucide-react";

import { InternalAccordionItemProps } from "../../pages/Home/components/Sections/accordion";

export function AccordionItem({ title, content, isActive, onClickButton }: InternalAccordionItemProps) {
    return (
        <div className="bg-white rounded-lg shadow-md cursor-pointer hover:bg-pr-1">
            <button
                className="w-full p-3 bg-transparent flex items-center justify-between"
                onClick={onClickButton}
            >
                <span className="max-w-full font-semibold text-sm whitespace-nowrap overflow-hidden overflow-ellipsis md:text-lg">{title}</span>
                <ChevronDown className={`text-pr-2 transition-transform ${isActive ? 'rotate-180' : ''}`} />
            </button>
            {isActive && (
                <div className={`text-sm p-3 h-full border-t border-sr-3`
                }>
                    <p className="text-sm md:text-base">{content}</p>
                </div>
            )}
        </div>
    )
}
