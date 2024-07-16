import { TitleSectionRoot } from "../../../../components/Title/TitleSection";

import WhatsAppIcon from '../../../../assets/whatsapp.svg'

export function Schedule() {
  return (
    <>
      <TitleSectionRoot>
        Venha aprender minhas técnicas
      </TitleSectionRoot>

      <div className="max-w-6xl mx-auto p-4 flex flex-col items-center gap-4">
        <p className="text-xl text-center text-tertiary tracking-wide font-robotoSlab my-3 lg:px-20 lg:text-2xl lg:my-5">Clique no botão abaixo e me mande uma mensagem no WhatsApp que lhe encaminharei o orçamento, disponibilidade de dia e horário para a aula.</p>

        <a href="https://wa.me/558388729460" target="_blank" className="animate-backgroundColors call-to-action-anchor uppercase bg-sr-2 w-full flex items-center justify-center gap-2 px-3 border-2 border-primary shadow-lg shadow-primary rounded-lg font-semibold font-robotoSlab text-xl tracking-widest duration-300 transform hover:scale-105 hover:bg-white hover:opacity-70 lg:w-fit">
          Agende agora
          <img src={WhatsAppIcon} alt="Icon WhatsApp" />
        </a>

        <h3 className="text-2xl text-center font-medium font-robotoSlab my-4 px-4 lg:text-3xl">Minha localização!</h3>

        <div className="flex flex-col items-center gap-4 w-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.047600197877!2d-35.93496952394431!3d-7.235411071062548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aea0b99c80c75d%3A0xc8ef1a020db690de!2sR.%20Luzinalda%20Edite%20de%20Ara%C3%BAjo%20Leite%2C%20498%20-%20Serrot%C3%A3o%2C%20Campina%20Grande%20-%20PB%2C%2058434-323!5e0!3m2!1spt-BR!2sbr!4v1721138929937!5m2!1spt-BR!2sbr" loading="lazy" className="w-full h-[25rem] border-2 border-pr-2 rounded-md" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  )
}
