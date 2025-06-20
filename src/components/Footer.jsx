
import logo from "../assets/images/logo_krl.png"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 font-[montserrat]" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Logo */}
            <div>
            <img src={logo} alt="Logo" className="w-28 mb-4" />
            <p className="text-sm text-gray-600">Kelas Renang Lestari</p>
            </div>

            {/* Alamat & Pembimbing */}
            <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2">Alamat</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
                Jl. Raya Lesti, RT.19/RW.04, Pijetan, Blayu<br />
                Kecamatan Wajak<br />
                Kabupaten Malang, Indonesia
            </p>

            <h2 className="text-md font-semibold text-gray-800 mt-4 mb-1">Pembimbing</h2>
            <p className="text-sm text-gray-600">Ibu Nur Alviatus Salim, S.Pd.</p>
            </div>

            {/* Kontak */}
            <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2">Hubungi Kami</h2>
            <p className="text-sm text-gray-600">📞 0831-7129-4737</p>
            </div>
        </div>

        {/* Bottom note */}
        <div className="text-center text-xs text-gray-400 mt-10">
            &copy; 2025 Website Kursus Renang Lestari. All rights reserved.
        </div>
    </footer>

  )
}

export default Footer