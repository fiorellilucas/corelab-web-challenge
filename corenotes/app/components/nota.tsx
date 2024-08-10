import Image from "next/image";
import PaletaCores from "./paletaCores";

export interface NotaProps {
  id: number
  titulo: string
  conteudo: string
  favorito: boolean
  cor: string
  criadaEm: string
}

export default function Nota(props: NotaProps) {
  function FavoritarNota() {
    fetch("http://localhost:3000/favoritar?notaId=" + props.id,
      {
        method: "PATCH",
        body: JSON.stringify({
          "favorito": props.favorito == true ? 0 : 1
        }),
        headers: { "Content-Type": "application/json" }
      }
    )
    location.reload()
  }
  
  return (
    <div className={"bg-[#" + props.cor + "] flex flex-col border border-slate-300 rounded-3xl sm:w-1/2 max-w-screen-sm drop-shadow h-72 p-1 px-4 my-14"}>
      <div className="flex justify-between border-b border-black items-center">
        <h1 className="flex h-auto w-full"><strong>{props.titulo}</strong></h1>
        <Image
          src={props.favorito == true ? "/estrela-amarela.png" : "/estrela-branca.png"}
          width={20}
          height={20}
          alt="Favoritar nota"
          onClick={() => { FavoritarNota() }}
        />
      </div>
      <div className="flex flex-col grow justify-between">
        <p className="py-1">{props.conteudo}</p>
        <PaletaCores notaId={props.id} />
        <div className="flex justify-between">
          <button onClick={() => { }}><Image src="/icone-editar.png" width={20} height={20} alt="Editar" /></button>

          <button onClick={() => {
            const paleta: any = document.getElementById("paleta" + props.id)
            if (paleta.classList[0] == "hidden") {
              paleta.classList.replace("hidden", "flex")
            } else {
              paleta.classList.replace("flex", "hidden")
            }
          }}>
            <Image src="/icone-cor.png" width={20} height={20} alt="Alterar cor" />
          </button>

          <button onClick={() => {
            if (confirm("Deletar nota?")) {
              fetch("http://localhost:3000/apagar?notaId=" + props.id, {
                method: "DELETE"
              })
            }
          }}><Image src="/icone-deletar.png" width={20} height={20} alt="Deletar nota" /></button>
        </div>
      </div>
    </div>
  )
}
