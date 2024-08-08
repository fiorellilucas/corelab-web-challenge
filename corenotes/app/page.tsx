import NovaNota from "./components/novaNota";

export default function Home() {
  return (
    <main className="p-5 mx-6">
      <NovaNota className="bg-white border border-slate-300 rounded-3xl sm:w-1/2 max-w-screen-sm drop-shadow h-28 p-2 px-4" />
    </main>
  );
}
