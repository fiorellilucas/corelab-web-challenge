import Image from "next/image"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Logo CoreNotes"
          className="ml-5"
        />
        <p className="hidden sm:block">CoreNotes</p>
      </div>
      <input placeholder="Procure uma nota" className="border border-slate-300 rounded-lg px-1 sm:w-1/2 max-w-screen-sm"></input>
      <button className="sm:px-16 px-6">X</button>
    </div>
  )
}