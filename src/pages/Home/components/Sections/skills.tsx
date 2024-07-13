import { Title } from "../../../../components/Title";

import { skillsCard } from "../../../../constants/skillsCard";

export function Skills() {
  return (
    <>
      <Title text={" que você aprenderá neste curso! "} strong1="Técnicas" />
      <div className="max-w-6xl mx-auto p-4 mb-28">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {skillsCard.map((skill) => (
            <li key={skill.id} className="z-10 relative w-full bg-sr-2 p-4 rounded-lg shadow-sm">
              <div className="relative w-28 h-28 mx-auto rounded-full mt-2 mb-7">
                <div className="absolute top-0 left-1 w-full h-full bg-pr-2 rounded-full
                  shadow-md" style={{ transform: "scale(1.1)" }}></div>
                <img src={"https://static.quizur.com/i/b/5b8ef9c6599697.708298285b8ef9c64e2ec0.56721071.jpg"} className="z-10 relative w-full h-full object-cover rounded-full" alt="" />
              </div>
              <h3 className="text-sm text-center font-medium">{skill.label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
