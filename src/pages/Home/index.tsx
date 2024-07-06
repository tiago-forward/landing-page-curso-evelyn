import { Introduction } from "./components/Sections/introduction";
import { Skills } from "./components/Sections/skills";

export function Home() {
  return (
    <main className="">
      <section className="bg-pr-1 min-h-screen">
        <Introduction />
      </section>
      <section className="bg-pr-2 min-h-screen py-10">
        <Skills />
      </section>
      <section className="bg-white min-h-screen py-10">

      </section>
    </main>
  )
}
