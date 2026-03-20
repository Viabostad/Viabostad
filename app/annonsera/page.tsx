export default function AnnonseraPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-4xl font-bold md:text-5xl">
            Lägg upp din bostad
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Fyll i uppgifterna nedan för att skapa din annons. Det är gratis att
            komma igång.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <form className="grid gap-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Adress
              </label>
              <input
                type="text"
                placeholder="Ex. Storgatan 12"
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Ort
              </label>
              <input
                type="text"
                placeholder="Ex. Malmö"
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Pris
              </label>
              <input
                type="text"
                placeholder="Ex. 3 495 000 kr"
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Boarea
              </label>
              <input
                type="text"
                placeholder="Ex. 78 kvm"
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Antal rum
              </label>
              <input
                type="text"
                placeholder="Ex. 3 rum"
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Bostadstyp
            </label>
            <select className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none">
              <option>Välj bostadstyp</option>
              <option>Lägenhet</option>
              <option>Villa</option>
              <option>Radhus</option>
              <option>Fritidshus</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Beskrivning
            </label>
            <textarea
              rows={6}
              placeholder="Beskriv bostaden..."
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Ladda upp bilder
            </label>
            <input
              type="file"
              multiple
              className="w-full rounded-2xl border border-gray-300 px-4 py-3"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="rounded-2xl bg-black px-6 py-3 text-white hover:opacity-90"
            >
              Skicka annons
            </button>

            <button
              type="button"
              className="rounded-2xl border border-gray-300 px-6 py-3 hover:bg-gray-50"
            >
              Spara utkast
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}