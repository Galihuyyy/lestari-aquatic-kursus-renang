const CardDokumentasi = ({ d, i }) => {
  return (
    <div
      key={i}
      className="card w-76 rounded-xl shadow-lg overflow-hidden border-2 border-gray-300 bg-white"
      data-aos="fade-in"
      data-aos-delay={i * 200}
    >
      <div className="w-full aspect-[16/9]">
        <img
          src={d.foto}
          alt="Header Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="body p-4">
        <h1 className="text-xl font-semibold mb-2">{d.judul}</h1>
        <p className="text-sm text-gray-600">{d.deskripsi}</p>
      </div>
    </div>
  );
};

export default CardDokumentasi;
