import { Introduction } from "./components/Sections/introduction";
import { Skills } from "./components/Sections/skills";
import { Faqs } from "./components/Sections/faqs";

import { AccordionItems } from "../../constants/AccordionItems";

import Wave01 from '../../assets/wave-01.svg'
import Wave02 from '../../assets/wave-02.svg'

import { Benefits } from "./components/Sections/benefits";

export function Home() {
  return (
    <main className="">
      <section className="backgroundIntroduction min-h-[79vh] bg-pr-1 bg-cover bg-no-repeat bg-left md:bg-center">
        <Introduction />
        <div className="relative w-full">
          <img className="absolute bottom-0 left-0" src={Wave01} alt="Wave" />
        </div>
      </section>
      <section id="tecnicas" className="bg-pr-2 min-h-screen py-20 relative">
        <Skills />
        <img className="absolute bottom-0" src={Wave02} alt="Wave" />
      </section>
      <section id="beneficios" className="bg-pr-1 py-20 relative">
        <Benefits />
      </section>
      <section id="duvidas" className="bg-pr-1 py-20">
        <Faqs items={AccordionItems} />
      </section>
    </main>
  )
}
