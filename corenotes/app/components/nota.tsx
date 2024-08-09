import Image from "next/image";

export interface NotaProps {
  id: number
  titulo: string
  conteudo: string
  favorito: boolean
  cor: string
  criadaEm: string
}

export default function Nota(props: NotaProps) {
  return (
    <div className="bg-white border border-slate-300 rounded-3xl sm:w-1/2 max-w-screen-sm drop-shadow h-72 p-1 px-4 my-14">
      <div className="flex justify-between border-b-2 items-center">
        <h1 className="flex h-auto w-full">{props.titulo}</h1>
        <Image 
          src="/estrela-branca.png"
          width={20}
          height={20}
          alt="Favoritar nota"
        />
      </div>
      <p className="py-1 max-h-full">{props.conteudo}</p>
    </div>
  )
}
