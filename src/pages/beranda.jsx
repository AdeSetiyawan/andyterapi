import { Helmet } from "react-helmet";
import Hero  from '../assets/img/hero1.svg';
import Logoutama from '../assets/img/Logoutama.png'

import * as motion from "motion/react-client";
    const waveText = "RUMAH SEHAT";
export default function Beranda (){

    return(
        <main className="bg-gray-200 p-2">
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
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className=" container m-auto flex mt-4">
                <div className="w-5/8  h-100 flex flex-col justify-center items-center text-6xl font-extrabold rubik text-orange-700 text-shadow-lg">
                    <img src={Logoutama} alt="" className=" w-50  drop-shadow-lg" />
                    <div>
                         {waveText.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: 0 }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                    ease: "easeInOut"
                                }}
                                >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                    <div className="mb-4">
                        ANDY TERAPI
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
                        Pengobatan Tradisional <br/> Metode Pijat dan Totok Syaraf
                        </motion.p>
                </div>
                <div className="w-3/8 flex justify-center">
                    <img src={Hero} alt="Andy Terapi" className="w-100 h-100" />
                </div>
            </motion.div>
        </main>
    )
}