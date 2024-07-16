import { useState } from "react"

import { AccordionItem } from "../AccordionItem"
import { TitleSectionRoot } from "../../../../components/Title/TitleSection"

export type AccordionItemProps = {
    id: number
    title: string
    content: string
}

export interface InternalAccordionItemProps extends AccordionItemProps {
    isActive: boolean
    onClickButton: () => void
}

interface AccordionProps {
    items: AccordionItemProps[]
}

export function Faqs({ items = [] }: AccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const handleClickButton = (index: number) => {
        setActiveIndex((state) => (state === index ? null : index))
    }

    return (
        <>
            <TitleSectionRoot>
                Dúvidas frequentes
            </TitleSectionRoot>
            <div className="max-w-6xl mx-auto border flex flex-col gap-2 p-4">
                {items.map((item, index) => (
                    <AccordionItem
                        key={item.id}
                        {...item}
                        isActive={index === activeIndex}
                        onClickButton={() => handleClickButton(index)}
                    />
                ))}
            </div>
        </>
    )
}
