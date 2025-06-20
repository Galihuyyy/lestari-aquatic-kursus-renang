import BaseLayout from "../components/BaseLayout"
import omahSepatuV2 from "../assets/images/logo_omah_sepatu_v1.2.png"

import sepatu from "../assets/images/product/sepatu.png"
import sepatu_pull_karet from "../assets/images/product/sepatu_pull_karet.png"
import sepatu_pull_putih from "../assets/images/product/sepatu_pull_putih.png"
import sepatu_futsal from "../assets/images/product/sepatu_futsal.png"
import kaos_kaki_avo_panjang from "../assets/images/product/kaos_kaki_avo_panjang.png"
import kaos_kaki_avo_pendek from "../assets/images/product/kaos_kaki_avo_pendek.png"
import kaos_kaki_standar from "../assets/images/product/kaos_kaki_standar.png"
import kaos_kaki_back_to_school from "../assets/images/product/kaos_kaki_back_to_school.png"
import all_provider from "../assets/images/product/all_provider.png"
import game from "../assets/images/product/game.png"
import listrik from "../assets/images/product/listrik.png"
import sosmed from "../assets/images/product/sosmed.png"
import jasa from "../assets/images/product/jasa.png"
import { Fragment } from "react"

const produk = [
    {
        kategori : "Sepatu",
        produk : [
            {
                foto : sepatu_pull_karet,
                name : `Sepatu Bola Pull Karet`,
                harga_terendah : "110.000",
                harga_tertinggi : "155.000"
            },
            {
                foto : sepatu,
                name : "Sepatu Bola Pull Plastik Hitam",
                harga_terendah : "100.000",
                harga_tertinggi : "125.000"
            },
            {
                foto : sepatu_futsal,
                name : "Sepatu Futsal",
                harga_terendah : "110.000",
                harga_tertinggi : "160.000"
            },
            {
                foto : sepatu_pull_putih,
                name : "Sepatu Bola Pull Plastik Putih",
                harga_terendah : "160.000",
                harga_tertinggi : "0"
            },
        ]
    },
    {
        kategori : "Aksesoris",
        produk : [
            {
                foto : kaos_kaki_avo_panjang,
                name : "Kaos Kaki Panjang AVO",
                harga_terendah : "25.000",
                harga_tertinggi : "35.000"
            },
            {
                foto : kaos_kaki_avo_pendek,
                name : "Kaos Kaki AVO Dewasa Pendek",
                harga_terendah : "20.000",
                harga_tertinggi : "0"
            },
            {
                foto : kaos_kaki_avo_pendek,
                name : "Kaos Kaki AVO Dewasa Anti Selip",
                harga_terendah : "45.000",
                harga_tertinggi : "0"
            },
            {
                foto : kaos_kaki_standar,
                name : "Kaos Kaki Sepak Bola Standar",
                harga_terendah : "15.000",
                harga_tertinggi : "0"
            },
            {
                foto : kaos_kaki_back_to_school,
                name : "Kaos Kaki Back To School SD, SMP, SMA",
                harga_terendah : "5.000",
                harga_tertinggi : "8.000"
            },
        ]
    },
    {
        kategori : "Elektronik",
        produk : [
            {
                foto : all_provider,
                name : "Pulsa All Operator",
                harga_terendah : "7.000",
                harga_tertinggi : "102.000"
            },
            {
                foto : all_provider,
                name : "Paket Data All Operator",
                harga_terendah : "7.000",
                harga_tertinggi : "200.000"
            },
            {
                foto : game,
                name : "Top Up All Game",
                harga_terendah : "5.000",
                harga_tertinggi : "999.000"
            },
            {
                foto : listrik,
                name : "Token Listrik",
                harga_terendah : "5.000",
                harga_tertinggi : "100.000"
            },
            {
                foto : listrik,
                name : "Listrik Pascabayar",
                harga_terendah : "tidak dapat ditentukan",
                harga_tertinggi : "0"
            },
            {
                foto : sosmed,
                name : "Kebutuhan Sosmed (Like, Commentar, Followers, Views)",
                harga_terendah : "5.000",
                harga_tertinggi : "999.000"
            },
            {
                foto : jasa,
                name : "Jasa Pembuatan Website",
                harga_terendah : "50.000",
                harga_tertinggi : "999.000"
            },
        ] ,
    }
]

const Produk = () => {
  return (
    <BaseLayout>
        <main className="w-full pt-20 font-[montserrat] text-gray-800 bg-gray-100">
            <div className="flex h-70 flex-col bg-gray-400 md:flex-row items-center justify-center text-center md:text-start gap-6 md:gap-0">
                <div className="md:border-e-4 border-gray-600 md:pe-6 md:me-6">
                    <h1 className="font-bold text-4xl">Product by</h1>
                    <h1 className="font-bold text-2xl">Our <span className="text-orange-600">Partner</span> </h1>
                </div>
                <img src={omahSepatuV2} alt="logo" width={100} />
            </div>

            <div className="produk grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 px-4 md:px-12 lg:px-22 gap-3">
            {produk.map((p, i) => (
                <Fragment key={i}>
                <h1 className="col-span-2 md:col-span-3 lg:col-span-4 font-semibold text-gray-400 text-center text-xl my-12">
                    — {p.kategori} —
                </h1>
                {p.produk.map((pr, index) => (
                    <div
                    key={index}
                    className="card rounded-md p-4 w-full border-[1px] bg-white border-gray-200 shadow"
                    >
                    <img src={pr.foto} alt="sepatu" className="mb-6" />
                    <div className="detail">
                        <h1 className="text-md font-semibold">{pr.name}</h1>
                        <h1 className="mt-2">
                        <span className="text-[10px] lg:text-xs font-bold">
                            <span className="text-indigo-500">{pr.harga_terendah}</span> 
                            {pr.harga_tertinggi > 0  &&
                                <>
                                    ~{" "}
                                    <span className="text-indigo-700">{pr.harga_tertinggi}</span>
                                </>
                            }
                        </span>
                        </h1>
                        <button onClick={() => {window.location.href = "https://api.whatsapp.com/send?phone=6281944984611&text=Hi%20kak!%20saya%20ingin%20membeli%20produk%20produk.%20Bagaimana%20ya%20prosedur%20pembayaran%20dan%20pengambilan%20barangnya%3F"}} className="cursor-pointer w-full text-sm mt-5 py-2 bg-indigo-600 hover:bg-indigo-800 duration-200 text-white font-semibold rounded-md">
                            Beli
                        </button>
                    </div>
                    </div>
                ))}
                </Fragment>
            ))}
            </div>

        </main>
    </BaseLayout>
  )
}

export default Produk