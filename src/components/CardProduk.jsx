const CardProduk = ({ pr, index }) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay={index * 200}
      key={index}
      className="card rounded-md p-4 w-full border-[1px] bg-white border-gray-200 shadow"
    >
      <img src={pr.foto} alt="sepatu" className="mb-6" />
      <div className="detail">
        <h1 className="text-md font-semibold">{pr.name}</h1>
        <h1 className="mt-2">
          <span className="text-[10px] lg:text-xs font-bold">
            <span className="text-indigo-500">{pr.harga_terendah}</span>
            {pr.harga_tertinggi > 0 && (
              <>
                ~{" "}
                <span className="text-indigo-700">{pr.harga_tertinggi}</span>
              </>
            )}
          </span>
        </h1>
        <button
          onClick={() => {
            window.location.href = `https://api.whatsapp.com/send?phone=6281944984611&text=Hi%20kak!%20saya%20ingin%20membeli%20produk%20${pr.name}.%20Bagaimana%20ya%20prosedur%20pembayaran%20dan%20pengambilan%20barangnya%3F`;
          }}
          className="cursor-pointer w-full text-sm mt-5 py-2 bg-indigo-600 hover:bg-indigo-800 duration-200 text-white font-semibold rounded-md"
        >
          Beli
        </button>
      </div>
    </div>
  );
};

export default CardProduk;
