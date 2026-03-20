export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Viabostad
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Din bostad, dina villkor
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          En modern bostadsplattform där privatpersoner kan annonsera enkelt
          och mäklare konkurrerar om att ge dig bästa erbjudandet.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-2xl bg-black px-6 py-3 text-white">
            Annonsera bostad
          </button>
          <button className="rounded-2xl border border-gray-300 px-6 py-3">
            För mäklare
          </button>
        </div>
      </section>
    </main>
  );
}