import Container from "../components/Container"

import dokumentasi_1 from "../assets/images/dokumentasi/dokumentasi_1.jpg"
import dokumentasi_2 from "../assets/images/dokumentasi/dokumentasi_2.jpg"
import dokumentasi_3 from "../assets/images/dokumentasi/dokumentasi_3.jpg"
import dokumentasi_4 from "../assets/images/dokumentasi/dokumentasi_4.jpg"
import dokumentasi_5 from "../assets/images/dokumentasi/dokumentasi_5.jpg"
import dokumentasi_6 from "../assets/images/dokumentasi/dokumentasi_6.jpg"
import dokumentasi_7 from "../assets/images/dokumentasi/dokumentasi_7.jpg"
import CardDokumentasi from "../components/CardDokumentasi"

const Dokumentasi = () => {

    const dokumentasi = [
        {
            foto: dokumentasi_1,
            judul: "Sesi Bimbingan Awal",
            deskripsi: "Kegiatan bimbingan awal bersama pelatih untuk membekali peserta dengan arahan, teknik dasar, dan semangat sebelum latihan dimulai."
        },
        {
            foto: dokumentasi_2,
            judul: "Pemanasan Sebelum Latihan",
            deskripsi: "Peserta melakukan pemanasan fisik untuk menghindari cedera dan mempersiapkan tubuh sebelum memasuki sesi utama latihan renang."
        },
        {
            foto: dokumentasi_3,
            judul: "Pencarian Rekor Waktu",
            deskripsi: "Momen saat peserta berusaha memecahkan rekor waktu tercepat dalam lintasan, penuh semangat dan fokus maksimal."
        },
        {
            foto: dokumentasi_4,
            judul: "Foto Bareng Trio Peserta",
            deskripsi: "Potret kebersamaan tiga peserta saat selesai berenang—menunjukkan kekompakan, keceriaan, dan semangat tim."
        },
        {
            foto: dokumentasi_5,
            judul: "Momen Bersama Pelatih – Siswa Putri",
            deskripsi: "Foto kenangan antara pelatih dan salah satu siswa perempuan, menandakan hubungan pelatih dan murid yang hangat dan suportif."
        },
        {
            foto: dokumentasi_6,
            judul: "Momen Bersama Pelatih – Siswa Putra",
            deskripsi: "Dokumentasi kedekatan antara pelatih dan siswa laki-laki, menggambarkan penghargaan atas kerja keras dan pencapaian siswa."
        },
        {
            foto: dokumentasi_7,
            judul: "Partisipasi di Ajang O2SN",
            deskripsi: "Potret peserta dalam ajang Olimpiade Olahraga Siswa Nasional (O2SN), membawa semangat kompetisi dan kebanggaan sekolah."
        }
    ];

    
  return (
    <div className="w-full py-12" id="dokumentasi">
            <h1 className="text-2xl font-semibold font-[montserrat] text-center mb-12">Kegiatan Kita</h1>
        <Container className="flex justify-center flex-wrap gap-3">
            {dokumentasi.map((d,i) => (
                <CardDokumentasi
                    key={i}
                    d={d}
                    i={i}/>

            ))}

        </Container>
    </div>
  )
}

export default Dokumentasi