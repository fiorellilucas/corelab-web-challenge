export interface PaletaProps {
  notaId: number
}

export default function PaletaCores( props: PaletaProps ) {
  function TrocarCor(corHex: string) {
    fetch("http://localhost:3000/trocar-cor?notaId=" + props.notaId,
      {
        method: "PATCH",
        body: JSON.stringify({ "novaCor": corHex }),
        headers: { "Content-Type": "application/json" }
      }
    )
    location.reload()
  }
  
  return (
    <div className="hidden flex-wrap justify-evenly border border-slate-300 rounded-3xl shadow-md bg-white" id={"paleta" + props.notaId}>
      <div className="bg-[#BAE2FF] size-10 border-slate-400 border rounded-full m-1" onClick={() => { TrocarCor("BAE2FF") }}></div>
      <div className="bg-[#B9FFDD] size-10 border-slate-400 border rounded-full m-1" onClick={() => { TrocarCor("B9FFDD") }}></div>
      <div className="bg-[#FFE8AC] size-10 border-slate-400 border rounded-full m-1" onClick={() => { TrocarCor("FFE8AC") }}></div>
      <div className="bg-[#FFCAB9] size-10 border-slate-400 border rounded-full m-1" onClick={() => { TrocarCor("FFCAB9") }}></div>
      <div className="bg-[#F99494] size-10 border-slate-400 border rounded-full m-1" onClick={() => { TrocarCor("F99494") }}></div>
      <div className="bg-[#ECA1FF] size-10 border-slate-400 border rounded-full m-1" onClick={() => { TrocarCor("ECA1FF") }}></div>
      <div className="bg-[#DAFF8B] size-10 border-slate-400 border rounded-full m-1" onClick={() => { TrocarCor("DAFF8B") }}></div>
      <div className="bg-[#979797] size-10 border-slate-400 border rounded-full m-1" onClick={() => { TrocarCor("979797") }}></div>
      <div className="bg-[#CDCDCD] size-10 border-slate-400 border rounded-full m-1" onClick={() => { TrocarCor("CDCDCD") }}></div>
      <div className="bg-[#A99A7C] size-10 border-slate-400 border rounded-full m-1" onClick={() => { TrocarCor("A99A7C") }}></div>    
    </div>
  )
}