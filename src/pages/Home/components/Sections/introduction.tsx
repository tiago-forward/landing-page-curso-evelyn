import { CallToActionAnchor } from '../../../../components/CallToActionAnchor'

export function Introduction() {
    return (
        <div className="max-w-6xl mx-auto min-h-[79vh] p-4 pt-40">
            <div className="flex flex-col items-end">
                <h1 className="max-w-2xl mb-20 text-pr-1 text-4xl lg:text-5xl text-end font-bold font-gloock lg:tracking-wider">
                    Venha participar do meu novo curso, onde irei te ajudar a <span className="text-amber-900">faturar</span> e se tornar uma maquiadora <span className="text-amber-900">profissional</span>
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-center text-lg text-amber-900 tracking-wider font-robotoSlab">Entre em contato comigo ou continue rolando para saber mais</p>
                <CallToActionAnchor href='' />
            </div>
        </div>
    )
}
