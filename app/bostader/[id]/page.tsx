import Link from "next/link";

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
];

export default function BostaderPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* HEADER */}
      <section className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold">Bostäder till salu</h1>
          <p className="mt-4 text-gray-600">
            Hitta ditt nästa hem enkelt och snabbt.
          </p>
        </div>
      </section>

      {/* LISTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => (
            <article
              key={listing.id}
              className="rounded-3xl border shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={listing.image}
                alt={listing.address}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-500">{listing.location}</p>

                <h2 className="text-2xl font-bold mt-2">
                  {listing.price}
                </h2>

                <p className="mt-2 font-semibold">
                  {listing.address}
                </p>

                <div className="mt-3 text-sm text-gray-600 flex gap-4">
                  <span>{listing.size}</span>
                  <span>{listing.rooms}</span>
                </div>

                <Link
                  href={`/bostader/${listing.id}`}
                  className="inline-block mt-6 bg-black text-white px-5 py-3 rounded-xl"
                >
                  Se bostad
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}