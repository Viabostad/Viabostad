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
    description:
      "Modern och ljus bostad i centrala Malmö med öppen planlösning, stora fönster och närhet till restauranger, shopping och kommunikation.",
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
    description:
      "Rymlig villa med stor trädgård, perfekt för familjen. Lugnt område med närhet till skolor och natur.",
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
    description:
      "Fin tvåa nära havet med ljus interiör och balkong. Perfekt som första bostad eller investering.",
  },
];

export default function ListingDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const listing = listings.find(
    (item) => item.id === Number(params.id)
  );

  if (!listing) {
    return (
      <main className="min-h-screen bg-white text-black p-10">
        <h1 className="text-3xl font-bold">Bostaden hittades inte</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* Bild */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <img
          src={listing.image}
          alt={listing.address}
          className="w-full h-[400px] object-cover rounded-2xl"
        />
      </div>

      {/* Info */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h1 className="text-4xl font-bold">{listing.address}</h1>

        <p className="text-2xl mt-2">{listing.price}</p>

        <div className="mt-4 flex gap-6 text-gray-600">
          <span>{listing.size}</span>
          <span>{listing.rooms}</span>
          <span>{listing.location}</span>
        </div>

        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          {listing.description}
        </p>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded-xl">
          Kontakta mäklare
        </button>
      </div>
    </main>
  );
}