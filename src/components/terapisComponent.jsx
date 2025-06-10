
import * as motion from "motion/react-client";
import FadeInWhenVisible from "./fadeinwhenvisible";
import NoData from '../assets/img/svg/no-data.svg'
import Info from '../assets/img/svg/info.svg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function TerapisComponent() {
    const [terapist, setTerapis] = useState(null);
    const terapis =[
        {
            "id": 1,
            "nama": "Jarno",
            "spesialis": "Totok Syaraf",
            "gambar": "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sertifikat":"https://lzd-u.slatic.net/657ed1e4b8a84d39911087a0565ad9b7_473943d0d4ac4ed1a41f2186e4ba35ea.jpg"
        },
        {
            "id": 2,
            "nama": "Dariyatmo",
            "spesialis": "Syaraf Stroke",
            "gambar": "https://images.unsplash.com/photo-1661747675166-5cf96bd5d0dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sertifikat":"https://lzd-u.slatic.net/657ed1e4b8a84d39911087a0565ad9b7_473943d0d4ac4ed1a41f2186e4ba35ea.jpg"
        },
        
        {
            "id": 2,
            "nama": "Sarni",
            "spesialis": "Patah Tulang",
            "gambar": "https://plus.unsplash.com/premium_photo-1731492051322-c4536cbc1606?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sertifikat":"https://lzd-u.slatic.net/657ed1e4b8a84d39911087a0565ad9b7_473943d0d4ac4ed1a41f2186e4ba35ea.jpg"
        },
        {
            "id": 2,
            "nama": "Sarni",
            "spesialis": "Patah Tulang",
            "gambar": "https://plus.unsplash.com/premium_photo-1731492051322-c4536cbc1606?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sertifikat":"https://lzd-u.slatic.net/657ed1e4b8a84d39911087a0565ad9b7_473943d0d4ac4ed1a41f2186e4ba35ea.jpg"
        },
        
        
    ]

    useEffect(()=>{
        setTerapis(terapis);
    },[]);


    return (
        <>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 1,
                delay: 0.7,
                ease: [0, 0.71, 0.1, 1.01],
                }}
                className="w-full h-full md:h-screen lg:h-screen bg-gray-100 md:bg-white  md:mb-2 flex flex-col md:flex-row lg:flex-row mt-0 md:mt-3">
                <FadeInWhenVisible delay={0.3}>
                    <div className="flex flex-col justify-center w-full md:w-100 lg:w-100  bg-orange-400 md:bg-blue-800 rounded-b-2xl md:rounded-br-2xl md:rounded-bl-none shadow-xl/20 shadow-gray-400 md:rounded-r-3xl h-auto md:h-screen lg:h-screen">
                        <div className="p-3 mt-2">
                            <img src={Info} className="w-50 mx-auto md:drop-shadow-yellow-50/30 md:drop-shadow-2xl" alt="informasi terapis" />
                        </div>
                        <div className="text-2xl rubik py-4 font-extrabold text-center tracking-wider text-shadow-lg/10 text-indigo-900 md:text-gray-100 ">
                            TERAPIS BERSERTIFIKAT
                        </div>
                        <div className="text-[9pt] font-extralight p-4 md:text-indigo-100 tracking-wide ">
                            <p align="justify">
                                Kami menghadirkan terapis berpengalaman yang tidak hanya memiliki keterampilan praktik tinggi, tetapi juga telah tersertifikasi secara resmi melalui pelatihan khusus di bidangnya. Setiap sesi terapi yang Anda jalani ditangani oleh profesional.

                                Dengan keahlian yang terbukti, terapis kami mampu membantu meredakan keluhan seperti pegal, migrain, gangguan saraf ringan, hingga ketegangan otot akibat stres. Sertifikasi yang dimiliki bukan hanya bukti kemampuan, tetapi juga jaminan keamanan dan efektivitas dalam setiap terapi yang diberikan.
                            </p>
                        </div>
                    </div>
                </FadeInWhenVisible>
                <div className="w-full  p-4 flex flex-col md:flex-row flex-wrap items-center justify-evenly gap-3 h-auto md:h-auto lg:h-auto ">
                    {
                        terapist?.length > 0 ?
                        terapist.map((terapis, index) =>{
                            return(
                                
                                    <FadeInWhenVisible delay={(0.3+(index/10))}>
                                        <div className="w-90 rounded-xl shadow-xl shadow-gray-500/20 p-2 flex flex-row md:flex-row justify-center items-center bg-indigo-300 md:bg-orange-400 ">
                                            <div className="w-full">
                                                <img src={terapis.gambar} className="w-35 h-35 border-4 border-gray-100  rounded-full object-cover mx-auto " />
                                            </div>
                                            <div key={index} className="w-full md:w-50 text-indigo-900  flex  p-3 flex-col flex-wrap justify-center" >
                                                <div className=" font-extrabold text-center md:text-start tracking-wider">
                                                    {terapis.nama}
                                                </div>
                                                <div className="text-[9pt] tracking-wider text-gray-100">
                                                    <span>
                                                        Spesialis : 
                                                    </span>
                                                    {terapis.spesialis}
                                                </div>
                                                <div>
                                                    <img src={terapis.sertifikat} alt="spesial {terapis} " className="w-35 h-25  object-cover transform hover:scale-200 active:scale-200 transition-transform duration-30" />
                                                </div>
                                            </div>
                                        </div>      
                                    </FadeInWhenVisible>
                            )
                        })
                        :
                        <div className=" flex flex-col justify-center items-center gap-4  rounded-2xl ">
                            <img type="svg" src={NoData}  className=" w-20" />
                            <div className=" text-base tracking-wider">
                                Tidak ada data
                            </div>
                        </div>

                    }
                    
                </div>
            </motion.div>
                <FadeInWhenVisible>
                    <div className="w-full h-20 flex items-center justify-center bg-gray-100 md:bg-white text-base font-light tracking-wider">
                        <Link to="terapis" className="bg-orange-600 hover:bg-orange-500 active:bg-orange-400 px-4 py-2 rounded-full text-gray-100">Lihat Selengkapnya</Link>
                    </div>
                </FadeInWhenVisible>
        </>
    )
}