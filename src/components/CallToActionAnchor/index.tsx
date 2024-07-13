import { AnchorHTMLAttributes } from 'react'

import WhatsAppIcon from '../../assets/whatsapp.svg'

interface AnchorCartProps extends AnchorHTMLAttributes<HTMLAnchorElement> { }

export function CallToActionAnchor(props: AnchorCartProps) {
  return (
    <a {...props} className='z-10 bg-sr-2 w-full relative flex items-center justify-center gap-2 p-3 border-2 border-sr-2 shadow-lg rounded-lg font-semibold font-robotoSlab text-xl tracking-widest overflow-hidden duration-300 transform hover:cursor-pointer hover:scale-105 hover:bg-white hover:opacity-70 lg:w-fit'>
      <span className='uppercase'>Garantir minha vaga</span>
      <img src={WhatsAppIcon} width={40} alt="" />
    </a>
  )
}
