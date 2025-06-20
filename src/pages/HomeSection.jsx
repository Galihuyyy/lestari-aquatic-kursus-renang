import Container from "../components/Container"
import backgroundKolam from "../assets/images/background_kolam.png"
import { Link } from "react-router-dom"
import BaseLayout from "../components/BaseLayout"
import Price from "./Price"
import logo from "../assets/images/logo_krl.png"
import Dokumentasi from "./Dokumentasi"
import Slogan from "./Slogan"
import Footer from "../components/Footer"

const HomeSection = () => {
  return (
    <>
    
    {/* versi 1 pake base layout */}
    <BaseLayout>
      <div className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage : `url(${backgroundKolam})` }} id="home">
        <div className="w-full h-screen bg-[rgba(0,0,0,.5)] absolute top-0 left-0 inset-0 z-0"></div>
        <Container>
          <div className="relative z-10 flex flex-col items-center justify-center text-white h-screen text-center max-lg:pt-26">
            {/* versi 2 pake logo */}
            <img src={logo} alt="lestari aquatic logo" width={124} data-aos="fade-in" data-aos-delay="600" />
            <h1 className="text-4xl md:text-6xl font-bold w-full md:w-2/3" data-aos="fade-in" data-aos-delay="800">
              Udah Siap Jadi <span className="text-blue-500">Jagoan</span> Air?
            </h1>
            <p className="my-4 w-full md:w-2/3 text-sm md:text-base" data-aos="fade-in" data-aos-delay="1000">
              Kami siap mendampingi kamu dari nol hingga jago, mulai dari teknik dasar renang seperti pernapasan, gaya bebas, hingga penguasaan teknik lanjutan—semuanya dengan metode latihan yang terstruktur, menyenangkan, dan terbukti efektif.
            </p>
            {/* versi 1 pake link to /pricing */}
            <a
              data-aos="fade-in" data-aos-delay="1000"
              href={"#pricing"}
              className="w-full md:w-1/3 py-3 rounded bg-blue-600 font-semibold text-md cursor-pointer duration-200 hover:bg-blue-800 text-center"
            >
              Daftar Sekarang!
            </a>

          </div>
        </Container>
      </div>

    </BaseLayout>
    <Dokumentasi/>
    <Slogan/>
    <Price/>
    <Footer/>
    </>
  )
}

export default HomeSection