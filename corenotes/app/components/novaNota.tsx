import { HTMLAttributes } from "react";
import Image from "next/image";

export default function NovaNota({ className }: HTMLAttributes<HTMLElement>)  {
  return (
    <div className={className}>
      <div className="flex justify-between border-b-2">
        <input type="text" placeholder="Título" />
        <Image 
          src="/estrela-branca.png"
          width={25}
          height={25}
          alt="Favoritar nota"
        />
      </div>
      <input type="text" placeholder="Criar nota..." className="h-10 w-full" />
    </div>
  )
}