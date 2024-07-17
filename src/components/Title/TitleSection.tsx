import { ComponentProps } from "react"

interface TitleSectionStrongProps extends ComponentProps<'strong'> { }

export function TitleSectionStrong(props: TitleSectionStrongProps) {
    return <strong {...props} className="text-tertiary" />
}

interface TitleSectionRootProps extends ComponentProps<'h2'> { }

export function TitleSectionRoot(props: TitleSectionRootProps) {
    return (
        <h2 {...props} className="text-4xl text-center font-semibold font-robotoSlab my-8 px-4 lg:text-5xl" />
    )
}