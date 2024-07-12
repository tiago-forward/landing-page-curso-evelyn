import { CallToActionAnchor } from '../../../../components/CallToActionAnchor'

import ImageTeste from '../../../../assets/pngegg.png'

export function Introduction() {
    return (
        <div className="max-w-6xl mx-auto min-h-[85vh] p-4 pt-20 lg:pt-40">
            <div className='flex flex-col items-center gap-4 lg:flex-row'>
                <div className='rounded-custom bg-blue-700 w-[14rem] h-[14rem] lg:w-[28rem] lg:h-[28rem] overflow-hidden'>
                    <div className='h-full w-full object-cover'><img src={ImageTeste} alt="" /></div>
                </div>
                <div className="flex flex-col items-end">
                    <h1 className="max-w-2xl mb-20 text-pr-1 text-4xl lg:text-5xl text-end font-bold font-gloock lg:tracking-wider">
                        Venha participar do meu novo curso, onde irei te ajudar a <span className="text-tertiary">faturar</span> e se tornar uma maquiadora <span className="text-tertiary">profissional</span>
                    </h1>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <p className="z-10 text-lg text-center text-tertiary tracking-wider font-robotoSlab lg:text-xl">Entre em contato comigo ou continue rolando para saber mais</p>
                <CallToActionAnchor href='' />
            </div>
        </div>
    )
}
