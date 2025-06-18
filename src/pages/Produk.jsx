import BaseLayout from "../components/BaseLayout"
import omahSepatuV2 from "../assets/images/logo_omah_sepatu_v1.2.png"

import sepatu from "../assets/images/product/sepatu.png"
import { Fragment } from "react"

const produk = [
    {
        kategori : "Sepatu",
        produk : [
            {
                name : "Sepatu Sepak Bola",
                harga_terendah : "100.000",
                harga_tertinggi : "100.000"
            }
        ]
    },
    {
        kategori : "Aksesoris",
        produk : []
    },
]

const Produk = () => {
  return (
    <BaseLayout>
        <main className="w-full pt-28 font-[montserrat] text-gray-800">
            <div className="flex h-56 flex-col md:flex-row items-center justify-center text-center md:text-start gap-6 md:gap-0">
                <div className="md:border-e-4 border-gray-600 md:pe-6 md:me-6">
                    <h1 className="font-bold text-4xl">Product by</h1>
                    <h1 className="font-bold text-2xl">Our <span className="text-orange-600">Partner</span> </h1>
                </div>
                <img src={omahSepatuV2} alt="logo" width={100} />
            </div>

            <div className="produk grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 px-4 md:px-12 lg:px-22 gap-3">
            {produk.map((p, i) => (
                <Fragment key={i}>
                <h1 className="col-span-2 md:col-span-3 lg:col-span-4 font-semibold text-gray-400 text-center text-xl my-2">
                    — {p.kategori} —
                </h1>
                {p.produk.map((pr, index) => (
                    <div
                    key={index}
                    className="card rounded-md p-4 w-full border-[1px] border-gray-200 shadow"
                    >
                    <img src={sepatu} alt="sepatu" className="mb-6" />
                    <div className="detail">
                        <h1 className="text-md font-semibold">Sepatu Sepak Bola</h1>
                        <h1 className="mt-2">
                        <span className="text-[10px] lg:text-xs font-bold">
                            <span className="text-indigo-500">120.000</span> ~{" "}
                            <span className="text-indigo-700">130.000</span>
                        </span>
                        </h1>
                        <button className="w-full text-sm mt-5 py-2 bg-indigo-700 text-white font-semibold rounded-md">
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