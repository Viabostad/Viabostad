const listings = [
  {
    id: 1,
    address: "Storgatan 12, Malmö",
    location: "Malmö",
    price: "3 495 000 kr",
    size: "78 kvm",
    rooms: "3 rum",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    address: "Parkvägen 8, Lund",
    location: "Lund",
    price: "5 995 000 kr",
    size: "145 kvm",
    rooms: "5 rum",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    address: "Havsgatan 21, Helsingborg",
    location: "Helsingborg",
    price: "2 895 000 kr",
    size: "56 kvm",
    rooms: "2 rum",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    address: "Birger Jarlsgatan 45, Stockholm",
    location: "Stockholm",
    price: "6 750 000 kr",
    size: "92 kvm",
    rooms: "4 rum",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    address: "Solvägen 3, Uppsala",
    location: "Uppsala",
    price: "4 995 000 kr",
    size: "132 kvm",
    rooms: "6 rum",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    address: "Linnégatan 9, Göteborg",
    location: "Göteborg",
    price: "1 895 000 kr",
    size: "34 kvm",
    rooms: "1 rum",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function BostaderPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-4xl font-bold md:text-5xl">Bostäder till salu</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Utforska bostäder från hela Sverige. Jämför objekt, hitta rätt hem
            och upptäck en modernare bostadsupplevelse.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <input
              type="text"
              placeholder="Ort eller område"
              className="rounded-2xl border border-gray-300 px-4 py-3 outline-none"
            />
            <select className="rounded-2xl border border-gray-300 px-4 py-3 outline-none">
              <option>Bostadstyp</option>
              <option>Lägenhet</option>
              <option>Villa</option>
              <option>Radhus</option>
            </select>
            <select className="rounded-2xl border border-gray-300 px-4 py-3 outline-none">
              <option>Prisnivå</option>
              <option>0 - 2 000 000 kr</option>
              <option>2 000 000 - 4 000 000 kr</option>
              <option>4 000 000+ kr</option>
            </select>
            <button className="rounded-2xl bg-black px-6 py-3 text-white hover:opacity-90">
              Sök bostäder
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Utvalda annonser</h2>
          <p className="text-sm text-gray-500">{listings.length} objekt</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => (
            <article
              key={listing.id}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={listing.image}
                alt={listing.address}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-500">{listing.location}</p>

                <h3 className="mt-2 text-2xl font-bold">{listing.price}</h3>

                <p className="mt-3 text-lg font-semibold">{listing.address}</p>

                <div className="mt-4 flex gap-4 text-sm text-gray-600">
                  <span>{listing.size}</span>
                  <span>{listing.rooms}</span>
                </div>

                <button className="mt-6 rounded-2xl bg-black px-5 py-3 text-white hover:opacity-90">
                  Se bostad
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}