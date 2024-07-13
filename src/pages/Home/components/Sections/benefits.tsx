import { CallToActionAnchor } from "../../../../components/CallToActionAnchor";
import { Title } from "../../../../components/Title";
import { benefits } from "../../../../constants/benefits";

export function Benefits() {

    return (
        <>
            <Title text="Porque você precisa aprender essas técnicas?" />
            <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-8 p-4">
                <ul className="grid justify-center gap-14 font-robotoSlab mb-36 md:mb-40 lg:mb-44 lg:grid-cols-18x3">
                    {benefits.map((benefit) => (
                        <li key={benefit.id} className="flex flex-col items-center gap-8 font-medium">
                            <img className="size-20" src={benefit.icon} alt={benefit.alt} />
                            <h3 className="text-3xl text-center text-tertiary">{benefit.title}</h3>
                            <p className="text-justify text-xl font-normal">{benefit.description}</p>
                        </li>
                    ))}
                </ul>
                <div className="absolute bottom-[-10rem] flex flex-col gap-8 items-center bg-pr-2 rounded-xl p-6">
                    <p className="z-10 text-3xl text-center text-tertiary tracking-wider font-robotoSlab lg:text-4xl lg:my-10">Não perca tempo e aproveite agora essa oportunidade</p>
                    <CallToActionAnchor />
                </div>
            </div>
        </>
    )
}
