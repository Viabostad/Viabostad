import Link from "next/link";export default function Home() {
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
          <button className="rounded-2xl bg-black px-6 py-3 text-white transition hover:opacity-90">
            Annonsera bostad
          </button>
          <button className="rounded-2xl border border-gray-300 px-6 py-3 transition hover:bg-gray-50">
            För mäklare
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Så fungerar det</h2>
            <p className="mt-3 text-gray-600">
              Tre enkla steg för att sälja smartare.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">1. Skapa annons</h3>
              <p className="mt-3 text-gray-600">
                Lägg upp din bostad snabbt och enkelt med bilder och beskrivning.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">2. Ta emot erbjudanden</h3>
              <p className="mt-3 text-gray-600">
                Mäklare konkurrerar om att ge dig bästa arvode och upplägg.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">3. Välj rätt mäklare</h3>
              <p className="mt-3 text-gray-600">
                Jämför alternativen och välj det erbjudande som passar dig bäst.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Fördelar för säljare</h2>
            <p className="mt-3 text-gray-600">
              Byggt för att ge dig mer kontroll och bättre villkor.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold">Gratis att annonsera</h3>
              <p className="mt-3 text-gray-600">
                Privatpersoner kan skapa annonser utan att betala för att komma igång.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold">Flera mäklare</h3>
              <p className="mt-3 text-gray-600">
                Få flera erbjudanden istället för att vara låst till ett alternativ.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold">Full kontroll</h3>
              <p className="mt-3 text-gray-600">
                Du bestämmer själv om du vill gå vidare, jämföra eller avvakta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Redo att sälja din bostad smartare?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Lägg upp din bostad gratis och låt mäklarna konkurrera om dig.
          </p>
          <button className="mt-8 rounded-2xl bg-white px-6 py-3 font-medium text-black hover:bg-gray-100">
            Kom igång nu
          </button>
        </div>
      </section>
    </main>
  );
}