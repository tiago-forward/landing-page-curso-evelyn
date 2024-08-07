import { SkillSectionRoot, SkillSectionContentContainer, SkillSectionImage, SkillSectionText, SkillSectionTitle } from "../../../../components/Skill/SkillSection";
import { TitleSectionRoot, TitleSectionStrong } from "../../../../components/Title/TitleSection";

import ImageTeste from '../../../../assets/product-images-slider/slider-01.jpg'

export function Skills() {
  return (
    <>
      <TitleSectionRoot>
        Técnicas que você
        <TitleSectionStrong> aprenderá </TitleSectionStrong>
        neste curso!
      </TitleSectionRoot>
      <div className="max-w-6xl mx-auto p-4 mb-28">
        <ul className="flex flex-col gap-10">
          {/* {skills.map((skill) => (
            <li key={skill.id} className="z-10 relative w-full bg-sr-2 p-4 rounded-lg shadow-sm">
              <div className="relative w-28 h-28 mx-auto rounded-full mt-2 mb-7">
                <div className="absolute top-0 left-1 w-full h-full bg-pr-2 rounded-full
                  shadow-md" style={{ transform: "scale(1.1)" }}></div>
                <img src={"https://static.quizur.com/i/b/5b8ef9c6599697.708298285b8ef9c64e2ec0.56721071.jpg"} className="z-10 relative w-full h-full object-cover rounded-full" alt="" />
              </div>
              <h3 className="text-sm text-center font-medium">{skill.label}</h3>
            </li>
          ))} */}

          <SkillSectionRoot>
            <SkillSectionContentContainer>
              <SkillSectionTitle>PREPARAÇÃO DA PELE</SkillSectionTitle>
              <SkillSectionText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus pariatur velit vero.</SkillSectionText>
            </SkillSectionContentContainer>
            <SkillSectionImage src={ImageTeste} alt="PREPARAÇÃO DA PELE" />
          </SkillSectionRoot>

          <SkillSectionRoot reverse>
            <SkillSectionImage src={ImageTeste} alt="APLICAÇÃO DOS CÍLIOS" rotateReverse />
            <SkillSectionContentContainer>
              <SkillSectionTitle>APLICAÇÃO DOS CÍLIOS</SkillSectionTitle>
              <SkillSectionText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus pariatur velit vero.</SkillSectionText>
            </SkillSectionContentContainer>
          </SkillSectionRoot>

          <SkillSectionRoot>
            <SkillSectionContentContainer>
              <SkillSectionTitle>TÉCNICA DE ILUMINAÇÃO</SkillSectionTitle>
              <SkillSectionText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus pariatur velit vero.</SkillSectionText>
            </SkillSectionContentContainer>
            <SkillSectionImage src={ImageTeste} alt="TÉCNICA DE ILUMINAÇÃO" />
          </SkillSectionRoot>

          <SkillSectionRoot reverse>
            <SkillSectionImage src={ImageTeste} alt="MAKE FÁCIL" rotateReverse />
            <SkillSectionContentContainer>
              <SkillSectionTitle>MAKE FÁCIL</SkillSectionTitle>
              <SkillSectionText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus pariatur velit vero.</SkillSectionText>
            </SkillSectionContentContainer>
          </SkillSectionRoot>

        </ul>
      </div>
    </>
  )
}
