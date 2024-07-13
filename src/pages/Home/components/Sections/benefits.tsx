import { CallToActionAnchor } from "../../../../components/CallToActionAnchor";
import { Title } from "../../../../components/Title";
import { benefits } from "../../../../constants/benefits";

export function Benefits() {

    return (
        <>
            <Title text="Porque você precisa aprender essas técnicas?" />
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 p-4">
                <ul className="grid justify-center gap-14 font-robotoSlab lg:grid-cols-18x3">
                    {benefits.map((benefit) => (
                        <li key={benefit.id} className="flex flex-col items-center gap-8 font-medium">
                            <img className="size-20" src={benefit.icon} alt={benefit.alt} />
                            <h3 className="text-3xl text-center text-tertiary">{benefit.title}</h3>
                            <p className="text-justify text-xl font-normal">{benefit.description}</p>
                        </li>
                    ))}
                </ul>
                <p className="z-10 text-3xl text-center text-tertiary tracking-wider font-robotoSlab lg:text-4xl lg:my-10">Não perca tempo e aproveite agora essa oportunidade</p>
                <CallToActionAnchor />
            </div>
        </>
    )
}
