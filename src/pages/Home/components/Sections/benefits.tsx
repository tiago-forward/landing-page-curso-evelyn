import { CallToActionAnchor } from "../../../../components/CallToActionAnchor";
import { TitleSectionRoot, TitleSectionStrong } from "../../../../components/Title/TitleSection";
import { benefits } from "../../../../constants/benefits";

export function Benefits() {

    return (
        <>
            <TitleSectionRoot>
                Porque você precisa aprender essas
                <TitleSectionStrong> técnicas </TitleSectionStrong>
                ?
            </TitleSectionRoot>
            <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-8 p-4">
                <ul className="grid justify-center gap-14 font-robotoSlab mb-36 md:mb-40 lg:mb-44 lg:grid-cols-18x3">
                    {benefits.map((benefit) => (
                        <li key={benefit.id} className="flex flex-col items-center gap-8 py-4 px-6 rounded-3xl bg-pr-2">
                            <div className="border bg-sr-2 p-4 rounded-full">
                                <img
                                    className="size-24 p-2"
                                    src={benefit.icon}
                                    alt={benefit.alt}
                                    loading='lazy'
                                    decoding='async'
                                />
                            </div>
                            <h3 className="text-2xl text-center text-black font-medium">{benefit.title}</h3>
                            <p className="text-justify text-xl">{benefit.description}</p>
                        </li>
                    ))}
                </ul>
                <div className="absolute bottom-[-10rem] flex flex-col gap-8 items-center bg-pr-2 rounded-xl p-6 w-full">
                    <p className="z-10 text-3xl text-center text-tertiary tracking-wider font-robotoSlab lg:text-4xl lg:my-10">Não perca tempo e aproveite agora essa oportunidade</p>
                    <CallToActionAnchor href="#pricing" />
                </div>
            </div>
        </>
    )
}
