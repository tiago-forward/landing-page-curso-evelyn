import { TitleSectionRoot, TitleSectionStrong } from "../../../../components/Title/TitleSection";
import { ProductImagesSlider } from "../ProductImagesSlider";

export function MyWork() {
  return (
    <>
      <TitleSectionRoot>
        Aprenda a
        <TitleSectionStrong> produzir </TitleSectionStrong>
        maquiagens como essas e muito mais
      </TitleSectionRoot>
      <div className="max-w-6xl mx-auto p-4">
        <ProductImagesSlider />
        <p className="text-2xl text-center text-tertiary tracking-wider font-robotoSlab md:text-3xl lg:text-4xl lg:my-10">Minhas clientes ficam belissimas, adoram o meu trabalho e com minhas maquiagens se toram poderosas</p>
        <p className="text-xl text-center text-tertiary tracking-wider font-robotoSlab my-10 lg:px-20 md:text-2xl lg:text-3xl lg:my-10">Com minhas técnicas você conseguirá fidelizar vários clientes, entre em contato comigo que irei verificar dias e horários mais próximos disponíveis para você</p>
      </div>
    </>
  )
}
