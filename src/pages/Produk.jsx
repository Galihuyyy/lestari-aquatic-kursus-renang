import BaseLayout from "../components/BaseLayout"
import omahSepatuV2 from "../assets/images/logo_omah_sepatu_v1.2.png"

import kacamata_renang from "../assets/images/product/kacamata_renang.jpg"
import papan_renang from "../assets/images/product/papan_renang.jpg"
import papan_renang_foam from "../assets/images/product/papan_renang_foam.jpg"
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
import CardProduk from "../components/CardProduk"
import Footer from "../components/Footer"

const produk = [
    {
        kategori : "Peralatan Renang",
        produk : [
            {
                foto : kacamata_renang,
                name : `Kacamata Renang`,
                harga_terendah : "65.000",
                harga_tertinggi : "0"
            },
            {
                foto : papan_renang,
                name : "Papan Renang",
                harga_terendah : "65.000",
                harga_tertinggi : "0"
            },
            {
                foto : papan_renang_foam,
                name : "Papan Renang Foam",
                harga_terendah : "65.000",
                harga_tertinggi : "0"
            },
        ]
    },
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
                <div className="md:border-e-4 border-gray-600 md:pe-6 md:me-6" data-aos="fade-in"  data-aos-delay="600">
                    <h1 className="font-bold text-4xl">Product by</h1>
                    <h1 className="font-bold text-2xl">Our <span className="text-orange-600">Partner</span> </h1>
                </div>
                <img src={omahSepatuV2} alt="logo" width={100} data-aos="fade-in"  data-aos-delay="600" />
            </div>

            <div className="produk grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 px-4 md:px-12 lg:px-22 gap-3">
            {produk.map((p, i) => (
                <Fragment key={i}>
                <h1 className="col-span-2 md:col-span-3 lg:col-span-4 font-semibold text-gray-400 text-center text-xl my-12" data-aos="fade-right"  data-aos-delay="600">
                    — {p.kategori} —
                </h1>
                {p.produk.map((pr, index) => (
                    <CardProduk
                        key={index}
                        pr={pr}
                        index={index}/>
                ))}
                </Fragment>
            ))}
            </div>

        </main>
        <Footer/>
    </BaseLayout>
  )
}

export default Produk