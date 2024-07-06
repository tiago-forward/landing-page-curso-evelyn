import { AnchorHTMLAttributes } from 'react'

import WhatsAppIcon from '../../assets/whatsapp.svg'

interface AnchorCartProps extends AnchorHTMLAttributes<HTMLAnchorElement> { }

export function CallToActionAnchor(props: AnchorCartProps) {
  return (
    <a {...props} className='z-10 bg-sr-2 relative flex items-center gap-2 p-3 border border-sr-2 rounded-lg font-semibold font-robotoSlab text-sm  tracking-widest overflow-hidden duration-150 transform hover:cursor-pointer hover:scale-105 hover:bg-pr-2 hover:text-white'>
      <span className='uppercase'>Garantir minha vaga</span>
      <img src={WhatsAppIcon} width={40} alt="" />
    </a>
  )
}
