import { Link, useLocation } from "react-router-dom"
import Navlink from "./Navlink"
import { useState, useRef, useEffect } from "react"
import logo from "../assets/images/logo_krl.png"
import ScrollLink from "./ScrollLink"

const Navbar = () => {
  const [active, setActive] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const [tag, setTag] = useState("home")

  const toggleMenu = () => {
    setActive(prev => !prev)
  }
  
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      toggleRef.current &&
      !toggleRef.current.contains(event.target)
    ) {
      setActive(false)
    }
  }

  window.addEventListener("scroll", () => {
    const widthScreen = window.innerWidth
    const scrollY = window.scrollY

    // col 1
    if (widthScreen >= 0 && widthScreen <= 676) {
      if (scrollY >= 0 && scrollY <540) {
        setTag("home")
      }
      if (scrollY >= 540 && scrollY < 3240) {
        setTag("dokumentasi")
      }
      if (scrollY >= 3240) {
        console.log("price");
        setTag("pricing")
      }
    }

    // col 2
    if (widthScreen > 676 && widthScreen <= 1122) {
      if (scrollY >= 0 && scrollY <540) {
        setTag("home")
      }
      if (scrollY >= 540 && scrollY < 3420) {
        setTag("dokumentasi")
      }
      if (scrollY >= 2240) {
        setTag("pricing")
      }
    }

    // col 3
    if (widthScreen > 1122 && widthScreen <= 1501) {
      if (scrollY >= 0 && scrollY <540) {
        setTag("home")
      }
      if (scrollY >= 540 && scrollY < 3420) {
        setTag("dokumentasi")
      }
      if (scrollY >= 1940) {
        setTag("pricing")
      }
    }

    // col 4
    if (widthScreen > 1501) {
      if (scrollY >= 0 && scrollY <540) {
        setTag("home")
      }
      if (scrollY >= 540 && scrollY < 1750) {
        setTag("dokumentasi")
      }
      if (scrollY >= 1750) {
        setTag("pricing")
        console.log("on");
      }
    }


  })
  
  useEffect(() => {
    if (active) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [active])

  const location = useLocation()
  const currentPathName = location.pathname

  return (
    <div className="w-full py-4 flex items-center justify-between px-12 bg-gray-100 fixed top-0 left-0 z-50 font-[poppins]"  data-aos="fade-down" data-aos-duration="600">
      <div className="logo">
        <img src={logo} alt="logo" width={40} className="cursor-pointer" onClick={() => {window.location.href = "/"}} />
      </div>

      <div
        ref={menuRef}
        className={`flex items-center lg:justify-center gap-6 text-md max-lg:duration-300 max-lg:ease-out
        max-lg:absolute max-lg:top-18 max-lg:flex-col max-lg:bg-white max-lg:p-4 max-lg:rounded-xl 
        max-lg:border-[1px] max-lg:border-neutral-400 max-lg:shadow-md 
        ${active ? "max-lg:right-4" : "max-lg:-right-full"}`}
      >
        <ScrollLink to="home" tag={tag}>Home</ScrollLink>
        {currentPathName == "/" && (
          <>
            <ScrollLink to="dokumentasi" tag={tag}>Dokumentasi</ScrollLink>
            <ScrollLink to="pricing" tag={tag}>Pricing</ScrollLink>
          </>
        )}
        <Navlink to="/produk">Produk</Navlink>
        <Link
          to={"https://wa.me/6283171294737"}
          target="_blank"
          className="flex items-center lg:hidden text-gray-50 bg-green-500 px-3 rounded-full gap-2 py-1"
        >
          <i className="fa-solid fa-comment"></i>
          <h1 className="font-semibold text-sm">Hubungi Kami</h1>
        </Link>
      </div>

      <Link
        to={"https://wa.me/6283171294737"}
        target="_blank"
        className="flex items-center max-lg:hidden text-gray-50 bg-green-500 px-3 rounded-full gap-2 py-1 hover:bg-green-700 duration-200"
      >
        <i className="fa-solid fa-comment"></i>
        <h1 className="font-semibold text-sm">Hubungi Kami</h1>
      </Link>

      <div className="lg:hidden" onClick={toggleMenu} ref={toggleRef}>
        <i className="fa-solid fa-bars text-xl"></i>
      </div>
    </div>
  )
}

export default Navbar
