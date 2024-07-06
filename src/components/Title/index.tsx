interface TitleProps {
    text: string
}

export function Title({ text }: TitleProps) {
    return (
        <>
            <h2 className="text-3xl text-center">{text}</h2>
        </>
    )
}
