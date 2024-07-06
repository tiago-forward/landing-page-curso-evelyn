interface TitleProps {
    text: string
}

export function Title({ text }: TitleProps) {
    return (
        <>
            <h2 className="text-3xl text-center font-medium font-robotoSlab lg:text-4xl">{text}</h2>
        </>
    )
}
