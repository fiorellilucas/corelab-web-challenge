import Image from "next/image";

export default function NovaNota()  {
  return (
    <div className="bg-white border border-slate-300 rounded-3xl sm:w-1/2 max-w-screen-sm drop-shadow h-28 p-1 px-4">
      <div className="flex justify-between border-b-2">
        <input type="text" placeholder="Título" className="w-full" />
        <Image 
          src="/estrela-cinza.png"
          width={20}
          height={20}
          alt="Favoritar nota"
        />
      </div>
      <input type="text" placeholder="Criar nota..." className="h-10 w-full" />
    </div>
  )
}