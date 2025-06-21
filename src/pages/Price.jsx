import { Link } from "react-router-dom"
import BaseLayout from "../components/BaseLayout"
import Container from "../components/Container"
import CardPaket from "../components/CardPaket"

const Price = () => {

    const masterBenefit = [
        "Sesi Latihan",
        "Pendampingan Pelatih",
        "Teknik Dasar (Pernapasan, Gaya Bebas)",
        "Akses Grup Bimbingan",
        "Simulasi Renang Jarak Jauh",
        "Teknik Lanjutan (Gaya Dada & Stamina)",
        "Evaluasi & Progress Tracking",
        "Sertifikat Penyelesaian",
    ]

    const layanan = [
        {
            nama: "Harian",
            deskripsi: "Satu kali pertemuan cocok untuk coba atau latihan ringan.",
            hargaAsli: 75000,
            diskon: 0,
            hargaTotal: 75000,
            benefit: [0, 1] // ambil dari masterBenefit[0] & [1]
        },
        {
            nama: "Paket 4x Pertemuan",
            deskripsi: "Dasar teknik untuk pemula dengan evaluasi progres.",
            hargaAsli: 300000,
            diskon: 100/300,
            hargaTotal: 200000,
            benefit: [0, 1, 2, 3, 4] // unlock sampai tracking
        },
        {
            nama: "Paket 8x Pertemuan",
            deskripsi: "Teknik lanjutan dan jadwal fleksibel.",
            hargaAsli: 600000,
            diskon: 200/600,
            hargaTotal: 400000,
            benefit: [0, 1, 2, 3, 4, 5, 6] // unlock sampai request pelatih
        },
        {
            nama: "Paket 12x Pertemuan",
            deskripsi: "Akses penuh ke semua fasilitas dan pelatih.",
            hargaAsli: 900000,
            diskon: 300/900,
            hargaTotal: 600000,
            benefit: [0, 1, 2, 3, 4, 5, 6, 7] // full access
        },
        {
            nama: "Paket Grup 4x Pertemuan",
            deskripsi: "Akses penuh ke semua fasilitas dan pelatih. *Maximal 5 Orang",
            hargaAsli: 1000000,
            diskon: 50/1000,
            hargaTotal: 950000,
            benefit: [0, 1, 2, 3, 4, 5, 6, 7] // full access
        }
    ]


    
  return (
    // versi 1 pake base layout
    // <BaseLayout>
        <div className="w-full py-20 bg-gray-200 min-h-screen" id="pricing">
            <div className="py-30 text-center font-[montserrat] text-gray-800">
                <h1 className="text-4xl max-md:px-5 font-bold mb-2"  data-aos="fade-down">Solusi Lengkap dan Terjangkau</h1>
                <p  data-aos="fade-in"  data-aos-delay="300" >Rabu dan Jumat — <b>13.00 - 14.00</b> | Minggu — <b>07.30 - 08.30</b></p>
                <p data-aos="fade-in"  data-aos-delay="500" className="mt-3 font-semibold">📍Kolam Renang WBLL (Wisata Blayu Lesti Lestari)</p>
            </div>
            <Container className="flex justify-center gap-6 flex-wrap">
            {layanan.map((paket, idx) => (
                <CardPaket
                    key={idx}
                    idx={idx}
                    paket={paket}
                    masterBenefit={masterBenefit} />
            ))}
            </Container>

        </div>    
    // </BaseLayout>
  )
}

export default Price