interface TitleProps {
    text: string
    strong1?: string
    strong2?: string
}

export function Title({ text, strong1, strong2 }: TitleProps) {
    return (
        <h2 className="text-4xl text-center font-semibold font-robotoSlab my-8 px-4 lg:text-5xl">
            <strong className="text-tertiary">
                {strong1}
            </strong>
            {text}
            <strong className="text-tertiary">
                {strong2}
            </strong>
        </h2>
    )
}
