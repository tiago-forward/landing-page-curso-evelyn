import { ComponentProps } from "react"

interface SkillSectionTitleProps extends ComponentProps<'h3'> { }

export function SkillSectionTitle(props: SkillSectionTitleProps) {
    return <h3 {...props} className="text-lg text-center font-medium text-tertiary uppercase md:text-2xl" />
}

interface SkillSectionTextProps extends ComponentProps<'p'> { }

export function SkillSectionText(props: SkillSectionTextProps) {
    return <p {...props} className="text-lg text-center font-normal md:text-xl" />
}

interface SkillSectionContentContainerProps extends ComponentProps<'div'> { }

export function SkillSectionContentContainer(props: SkillSectionContentContainerProps) {
    return <div {...props} className="flex flex-col gap-4 mt-4 mb-4 md:max-w-[600px]" />
}

interface SkillSectionImageProps extends ComponentProps<'img'> {
    rotateReverse?: boolean
}

export function SkillSectionImage({ rotateReverse, ...props }: SkillSectionImageProps) {
    return (
        <div className="bg-sr-2 rounded-2xl shadow-xl">
            <img {...props} className={`size-72 rounded-xl shadow-xl ${rotateReverse ? `-rotate-6` : `rotate-6`}`} />
        </div>
    )
}

interface SkillSectionRootProps extends ComponentProps<'div'> {
    reverse?: boolean;
}

export function SkillSectionRoot({ reverse, ...props }: SkillSectionRootProps) {
    return (
        <div {...props} className={`flex flex-col items-center m-auto gap-4 rounded-lg md:flex-row md:gap-8 ${reverse ? 'flex-col-reverse md:flex-row' : ''}`} />
    )
}
