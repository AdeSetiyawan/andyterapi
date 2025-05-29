

// import from motion 
import * as motion from "motion/react-client";

//import icon from mUI
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

//import image from image source
import BackHero from '../assets/img/backHero.jpeg'
import Loc from '../assets/img/location.svg'

// import from react 
import { Link } from "react-router-dom";

//import component
import FadeInWhenVisible from "./fadeinwhenvisible";


export default function LokasiComponent() {
    return (
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
    )
}