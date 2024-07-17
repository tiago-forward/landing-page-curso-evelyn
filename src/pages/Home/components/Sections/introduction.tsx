import { CallToActionAnchor } from '../../../../components/CallToActionAnchor'

import ImageTeste from '../../../../assets/pngegg.png'

export function Introduction() {
    return (
        <div className="max-w-6xl mx-auto min-h-[85vh] p-4 pt-20 lg:pt-40">
            <div className='flex flex-col items-center justify-center gap-4 lg:flex-row relative'>
                <div className='rounded-custom bg-blue-700 w-[14rem] h-[14rem] overflow-hidden lg:w-[28rem] lg:h-[28rem]'>
                    <div className='h-full w-full object-cover'>
                        <img
                            src={ImageTeste}
                            alt="Evelyn MakeUp"
                            loading='lazy'
                            decoding='async'
                            fetchPriority='high'
                        />
                    </div>
                    <div className='absolute rounded-custom-header h-56 w-72 top-[-230px]  left-[-110px] lg:top-[-280px]'></div>
                </div>
                <h1 className="max-w-2xl mb-20 text-pr-1 text-4xl text-center font-bold font-gloock lg:text-end lg:text-5xl lg:tracking-wider">
                    Curso de Maquiagem Profissional Presencial <strong className="text-tertiary">Campina Grande - PB</strong>
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="z-10 text-3xl text-center text-tertiary tracking-wider font-robotoSlab lg:text-4xl lg:my-10">Aprenda as técnicas avançadas de uma maquiadora profissional de sucesso</p>
                <CallToActionAnchor href='#pricing' />
            </div>
        </div>
    )
}
