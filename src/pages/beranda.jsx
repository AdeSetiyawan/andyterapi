import { Helmet } from "react-helmet";
import Profile  from '../assets/foto/andy.png';
import Logoutama from '../../public/img/Logoutama.png'
import Logosaja from '../assets/img/logosaja.png'
import BackHero from '../assets/img/backHero.jpeg'
import Terapis1 from '../assets/foto/terapis1.png'
import Pattern from '../assets/img/pattern.jpg'
import Loc from '../assets/img/location.svg'
import * as motion from "motion/react-client";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import { useInView } from "motion/react"
import { useRef } from "react";
import FadeInWhenVisible from "../components/fadeinwhenvisible";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Fade } from "@mui/material";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
export default function Beranda (){
    const ref = useRef(null)
    const isInView = useInView(ref)

    return(
        <main className=" ">

            <Helmet>
                <title>Andi Terapi Syaraf dan Tulang - Terapi Aman, Alami & Profesional</title>
                <meta name="description" content="Andi Terapi Syaraf dan Tulang melayani terapi aman dan alami untuk syaraf kejepit, nyeri punggung, keseleo, dan berbagai masalah tulang." />
                <meta name="keywords" content="terapi syaraf, terapi tulang, terapi alami, pengobatan syaraf kejepit, tukang urut, andi terapi" />
                <meta property="og:title" content="Andi Terapi Syaraf dan Tulang - Terapi Aman & Profesional" />
                <meta property="og:description" content="Layanan terapi syaraf dan tulang terbaik untuk nyeri dan gangguan gerak." />
                <meta property="og:image" content="https://example.com/images/og-image.jpg" />
                <meta property="og:url" content="https://anditerapis.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Andi Terapi Syaraf dan Tulang" />
                <meta name="twitter:description" content="Terapi alami, profesional, dan terpercaya untuk syaraf dan tulang Anda." />
                
            </Helmet>
            <FadeInWhenVisible>
                <div
                    className=" m-auto flex   bg-cover bg-center relative  " style={{ backgroundImage: `url(${Pattern})` }} >
                    <div className="w-5/8 ps-30  h-110 flex flex-col justify-center items-start text-5xl font-extrabold rubik text-blue-900 text-shadow-lg gap-2">

                        <FadeInWhenVisible delay={0.1}>
                            <div className="z-100 text-start">Rumah Sehat Andy Terapis</div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={0.3}>
                            <div className="text-xl poppins bg-orange-800 text-gray-200 mt-1 mb-1 px-3 rounded-full ">
                                SYARAF, TULANG DAN STROKE
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={0.5}>
                            <div className="text-base poppins mb-5 font-extralight text-gray-900">
                                "Berikhtiar untuk menjemput kesembuhan"
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={0.7}>
                            <motion.div 
                                animate={{
                                    y: [0, -10, 0],
                                    scale: [1, 0.9, 1],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }} 
                            >
                                <Link  to="https://wa.me/6282138135581" target="_blank" rel="noopener noreferrer" className="bg-green-700 mt-7 p-2 text-base poppins text-gray-100 z-100 animate-bounce">
                                    <WhatsAppIcon/> Daftar Sekarang
                                </Link>
                            </motion.div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={0.9}>
                            <div className="mt-8 flex flex-col">
                                <div className="text-base font-extralight">
                                    Sosial Media:
                                </div>
                                <div className="mt-2 flex gap-4" >
                                    <FadeInWhenVisible delay={1.1}>    
                                        <a href="https://www.instagram.com/andyterapisyarafdantulang2017" 
                                            className=" rounded-full hover:bg-indigo-950 hover:text-gray-100 flex flex-col justify-center items-center border active:bg-indigo-700 p-3 w-15 h-15">
                                            <InstagramIcon color="primary" fontSize="small" />
                                            <div className="text-[8pt] font-extralight">
                                                Instagram
                                            </div>
                                        </a>
                                    </FadeInWhenVisible>
                                    <FadeInWhenVisible delay={1.3}>  
                                        <a href=""
                                            className=" rounded-full hover:bg-indigo-950 hover:text-gray-100 flex flex-col justify-center items-center border active:bg-indigo-700 p-3 w-15 h-15"
                                        >
                                            <YouTubeIcon color="primary" fontSize="small" />
                                            <div className="text-[8pt] font-extralight">
                                                Youtube
                                            </div>
                                        </a>
                                    </FadeInWhenVisible>
                                    <FadeInWhenVisible delay={1.5}>  
                                        <a href=""
                                            className=" rounded-full hover:bg-indigo-950 hover:text-gray-100 flex flex-col justify-center items-center border active:bg-indigo-700 p-3 w-15 h-15"
                                        >
                                            <MusicNoteIcon color="primary" fontSize="small" />
                                             <div className="text-[8pt] font-extralight">
                                                Tiktok
                                            </div>
                                        </a>
                                    </FadeInWhenVisible>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                            
                        
                    </div>
                    <div className="w-3/8 relative ">
                        <div className="left-3 rounded-full w-80 h-80 absolute top-25 bg-gray-300"></div>
                        <img src={Profile} alt="Andy Terapi" className="w-100 h-105 z-105 absolute bottom-0 -left-5" />

                    </div>
                
                </div>
            </FadeInWhenVisible>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 1,
                delay: 0.7,
                ease: [0, 0.71, 0.1, 1.01],
                }}
                className="p-2 w-full flex justify-evenly items-center relative tracking-wider bg-orange-700  bg-cover bg-center" style={{ backgroundImage: `url(${BackHero})` }}
            >

                <div className="bg-orange-700/80 h-full w-full absolute z-0">
                     
                </div>
                <FadeInWhenVisible delay={0.2}>
                <div className="w-full text-center p-8">
                    <img src={Loc} className="w-120 mx-auto drop-shadow-xl/50" />
                </div>
              </FadeInWhenVisible> 
              <FadeInWhenVisible delay={0.3}>
              <div className="w-full text-center p-8 flex flex-col justify-center z-100">
                <div className=" font-extrabold mb-2 border-b-2 pb-3 rubik flex gap-2 justify-center text-gray-100"> 
                    <LocationOnIcon/> CABANG WONOGIRI
                </div>
                <div className=" font-extralight text-gray-50">
                  Dusun Tanduran RT 007/ RW 003, Kelurahan Jatisari, Kecamatan Jatisrono, Kabupaten Wonogiri
                </div>
                <div className="mt-2">
                    <Link to="https://maps.app.goo.gl/zgokpHFy5315E6bZ6" className="bg-gray-50 px-2 py-1 rounded-full text-[8pt] flex gap-1 w-30 justify-center items-center mx-auto hover:bg-gray-200 active:bg-gray-100">
                        <MapOutlinedIcon fontSize="small"/>
                        LIHAT PETA
                    </Link>
                </div>
              </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
              <div className="w-full text-center p-8 flex flex-col justify-center z-100">
                <div className=" font-extrabold mb-2 border-b-2 pb-3 rubik flex justify-center text-gray-100"> 
                    <LocationOnIcon/> CABANG KARANGANYAR
                </div>
                <div className=" font-extralight text-gray-50">
                    Dusun Bondukuh RT 023/ RW 007, Kelurahan Jatiyoso, Kecamatan Jatipuro, Kabupaten Karanganyar
                </div>
                 <div className="mt-2">
                    <Link to="https://maps.app.goo.gl/N8y1yqYDWBytfnNMA" className="bg-gray-50 px-2 py-1 rounded-full text-[8pt] flex gap-1 w-30 justify-center items-center mx-auto hover:bg-gray-200 active:bg-gray-100">
                        <MapOutlinedIcon fontSize="small"/>
                        LIHAT PETA
                    </Link>
                </div>
              </div>
                </FadeInWhenVisible>
               
            </motion.div>
            
              <FadeInWhenVisible delay={0.3}>
                <div className="w-full h-screen p-4 bg-gray-100">
                    <h2>Komponen kedua</h2>
                    <p>Animasi dengan delay 0.3 detik</p>
                </div>
            </FadeInWhenVisible>

        </main>
    )
}