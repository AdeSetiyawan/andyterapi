// import component
import FadeInWhenVisible from "./fadeinwhenvisible";

//image tambahan
import Profile  from '../assets/foto/andy.png';
import Pattern from '../assets/img/pattern.jpg'

// icon from mui 
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

// import from motion 
import * as motion from "motion/react-client";

//import fromn react
import { Link } from "react-router-dom";


export default function Hero() {
    return(
       <FadeInWhenVisible>
                <div
                    className="h-190 flex flex-col md:flex-row md:h-auto    bg-cover bg-center   " style={{ backgroundImage: `url(${Pattern})` }} >
                    <div className="w-screen  md:w-5/8 md:p-2 p-0 md:ps-30 h-screen md:h-110 flex flex-col justify-start md:justify-center items-center md:items-start text-5xl font-extrabold rubik text-blue-900 text-shadow-lg gap-2 mt-20 md:mt-0">

                        <FadeInWhenVisible delay={0.1}>
                            <h2 className="z-100 text-center md:text-start text-3xl  md:text-5xl w-screen p-2 md:p-0 ">Rumah Sehat Andy Terapis</h2>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={0.3}>
                            <h2 className="text-sm font-extralight md:font-extrabold poppins md:text-xl bg-orange-800 text-gray-200 mt-1 mb-1 px-3 rounded-full ml-2 md:ml-0 ">
                                SYARAF, TULANG DAN STROKE
                            </h2>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={0.5}>
                            <h2 className="text-base poppins mb-5 font-extralight text-gray-900 ml-2 md:ml-0">
                                "Berikhtiar untuk menjemput kesembuhan"
                            </h2>
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
                                className="flex justify-center w-screen md:w-auto"
                            >
                                <Link  to="https://wa.me/6282138135581" target="_blank" rel="noopener noreferrer" className="bg-green-700 mt-2 md:mt-7 p-2 text-base  poppins text-gray-100 z-100 animate-bounce">
                                    <WhatsAppIcon/> Daftar Sekarang
                                </Link>
                            </motion.div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={0.9}>
                            <div className="w-screen mt-2 md:mt-8 flex flex-col md:justify-start justify-center items-center md:items-start  h-auto md:h-auto ">
                                <div className="text-base font-extralight">
                                    Sosial Media:
                                </div>
                                <div className="mt-2 flex gap-4" >
                                    <FadeInWhenVisible delay={1.1}>    
                                        <a href="https://www.instagram.com/andyterapisyarafdantulang2017" 
                                            className=" rounded-full hover:bg-indigo-950 hover:text-gray-100 flex flex-col justify-center items-center border border-indigo-500 active:bg-indigo-700 p-3 w-15 h-15">
                                            <InstagramIcon  fontSize="small" />
                                            <div className="text-[8pt] font-extralight">
                                                Instagram
                                            </div>
                                        </a>
                                    </FadeInWhenVisible>
                                    <FadeInWhenVisible delay={1.3}>  
                                        <a href=""
                                            className=" rounded-full hover:bg-indigo-950 hover:text-gray-100 flex flex-col justify-center items-center border border-indigo-500 active:bg-indigo-700 p-3 w-15 h-15"
                                        >
                                            <YouTubeIcon fontSize="small" />
                                            <div className="text-[8pt] font-extralight">
                                                Youtube
                                            </div>
                                        </a>
                                    </FadeInWhenVisible>
                                    <FadeInWhenVisible delay={1.5}>  
                                        <a href=""
                                            className=" rounded-full hover:bg-indigo-950 hover:text-gray-100 flex flex-col justify-center items-center border border-indigo-500 active:bg-indigo-700 p-3 w-15 h-15"
                                        >
                                            <MusicNoteIcon  fontSize="small" />
                                             <div className="text-[8pt] font-extralight">
                                                Tiktok
                                            </div>
                                        </a>
                                    </FadeInWhenVisible>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                            
                        
                    </div>
                    <div className=" md:w-3/8  z-10 relative  ">
                        <div className="md:block hidden left-3 rounded-full w-80 h-80 absolute top-25 bg-gray-300"></div>
                        <img src={Profile} alt="Andy Terapi" className="h-80  md:w-100 md:h-105 z-105 absolute bottom-0 md:bottom-0 right-auto left-20 md:-left-5 " />

                    </div>
                
                </div>
            </FadeInWhenVisible>
    )
}