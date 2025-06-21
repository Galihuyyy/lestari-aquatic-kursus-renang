import { Link } from "react-router-dom";

const CardPaket = ({ paket, idx, masterBenefit }) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay={idx * 400}
      key={idx}
      className="card py-12 px-6 text-gray-800 w-72 h-fit border-[1px] border-gray-400 rounded-xl bg-white"
    >
      <div className="min-h-72">
        <h1 className="font-bold text-xl mb-3">{paket.nama}</h1>
        <p className="mb-6 text-sm pe-6">{paket.deskripsi}</p>

        <div className="diskon flex items-center gap-2 mb-3">
          {paket.diskon > 0 && (
            <>
              <h1 className="line-through">Rp {paket.hargaAsli.toLocaleString()}</h1>
              <h1 className="py-1 px-2 rounded-full bg-indigo-300 text-sm font-semibold">
                DISKON {Math.round(paket.diskon * 100).toFixed(0)}%
              </h1>
            </>
          )}
        </div>

        <div className="harga-total mb-6">
          <h1>
            Rp{" "}
            <span className="text-4xl font-semibold">
              {paket.hargaTotal.toLocaleString()}
            </span>
            {paket.nama === "Harian" && " /pertemuan"}
          </h1>
          <p className="text-red-600 mt-2 text-[10px] font-semibold">
            * : Tidak Termasuk Tiket Masuk (Rp 10.000).
          </p>
        </div>

        <Link
          to={`https://api.whatsapp.com/send?phone=6283171294737&text=Hi%20Kak!%20Saya%20tertarik%20kursus%20renang%20dengan%20layanan%20${paket.nama}%20nih%2C%20bagaimana%20ya%20prosedurnya%3F`}
          target="_blank"
        >
          <h1 className="text-center py-2 rounded-md border-2 border-indigo-600 text-indigo-600 text-sm font-semibold hover:bg-indigo-200 duration-300">
            Pilih Layanan
          </h1>
        </Link>

        <p className="text-yellow-600 mt-2 text-xs font-semibold">
          <i className="fa-solid fa-exclamation font-bold"></i> : Wajib memakai
          baju renang, kacamata renang dan papan pelampung.
        </p>
      </div>

      <hr className="mt-8 mb-4 text-neutral-400" />

      <div className="benefits space-y-2">
        {masterBenefit.map((benefitText, index) => (
          <div key={index} className="flex items-center gap-2">
            {paket.benefit.includes(index) ? (
              <>
                <i className="fa-solid fa-check text-green-600 text-sm"></i>
                <p>{benefitText}</p>
              </>
            ) : (
              <>
                <i className="fa-solid fa-minus text-gray-600 text-sm"></i>
                <p className="text-gray-400">{benefitText}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPaket;
