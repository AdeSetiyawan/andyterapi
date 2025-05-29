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
    )
}