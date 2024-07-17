import { socialMediaLinks } from "../../constants/socialMediaLinks"

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center transition-colors duration-500 bg-zinc-950 text-white gap-4 border-t border-zinc-950 py-10">
      <div className="w-full max-w-6xl px-4 m-auto flex flex-col items-center gap-4">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-2 w-full">
          <span className="text-primary font-bold uppercase shadow-custom hover:text-white">Evelyn MakeUp</span>
          <nav className="flex">
            <ul className="flex items-center justify-center gap-2">
              {socialMediaLinks.map((link) => (
                <li key={link.id} className="duration-300 rounded-full border border-pr-1 bg-pr-1 p-1 text-tertiary hover:opacity-70 hover:border-pr-2">
                  <a href={link.url} target="_blank" aria-label={link.label} title={link.label}>
                    {link.icon && <link.icon size={20} />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-center">Todos os Direitos Reservados Copyright © {new Date().getFullYear()}</p>
          <div>
            <p className="text-xs text-center">Desenvolvido por
              <a href="https://www.linkedin.com/in/tiago-lacerda-devfrontend/" target="_blank" className="text-blue-400 hover:underline" aria-label="Tiago Forward"> Tiago Forward</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
