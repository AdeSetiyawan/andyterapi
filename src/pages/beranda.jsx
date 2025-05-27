import { Helmet } from "react-helmet";
import Profile  from '../assets/foto/andy.png';
import Logoutama from '../../public/img/Logoutama.png'
import Logosaja from '../assets/img/logosaja.png'
import BackHero from '../assets/img/backHero.jpeg'
import Pattern from '../assets/img/pattern.jpg'
import * as motion from "motion/react-client";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Beranda (){

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

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.7,
                    ease: [0, 0.71, 0.1, 1.01],
                }}
                className=" m-auto flex mt-4  bg-cover bg-center relative  " style={{ backgroundImage: `url(${Pattern})` }} >

              
                <div className="w-5/8 ps-30  h-110 flex flex-col justify-center items-start text-5xl font-extrabold rubik text-blue-900 text-shadow-lg">
                 
                    <div className="z-100 text-start">Rumah Sehat Andy Terapis</div>
                    <div className=" z-100"></div>
                    <div className="text-xl poppins bg-orange-800 text-gray-200 mt-1 mb-1 px-3 rounded-full ">
                        SYARAF DAN TULANG
                    </div>
                    <div className="text-base poppins mb-5 font-extralight text-gray-900">
                         "Berikhtiar untuk menjemput kesembuhan"
                    </div>
                    <motion.p align="center"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="text-lg text-indigo-600 tracking-wider"
                        >
                      
                            <a  href="https://wa.me/6282138135581" target="_blank" rel="noopener noreferrer">
                                <div className="bg-green-700 mt-7 p-2 text-base poppins text-gray-100 z-100">
                                    <WhatsAppIcon/> Daftar Sekarang
                                </div>
                            </a>
                        </motion.p>

                        
                     
                </div>
                <div className="w-3/8 relative ">
                    <div className="left-3 rounded-full w-80 h-80 absolute top-25 bg-gray-300"></div>
                    <img src={Profile} alt="Andy Terapi" className="w-100 h-105 z-105 absolute bottom-0 -left-5" />

                </div>
             
            </motion.div>
        </main>
    )
}