import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import LogoUtama from '../../public/img/Logoutama.png'
import Logosaja from '../assets/img/logosaja.png'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar(){
    
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };

    const [isOpenMenu, setOpenMenu] = useState(false);



    return (
        <>
            <motion.nav
                  initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                className=" flex justify-between items-center py-4 px-3">
                <div className="flex items-center rounded-xl text-indigo-800 tracking-wider font-bold rubik  "> 
                   <img src={Logosaja} alt="" className="w-15" />
                   <div className="flex flex-col  p-2 text-sm">
                        <div className="block">
                            Rumah Sehat
                        </div>
                        <div className="block">
                            Andy terapis
                        </div>
                   </div>
                </div>
                <div className="flex md:hidden ">
                    <MenuIcon fontSize="large" color="danger" onClick="" className=""/>
                </div>
                <div className="hidden md:flex items-center gap-5 text-lg px-2 font-bold poppins tracking-wider text-indigo-700">
                    <Link to="/" className="hover:border-b-4 hover:text-orange-800  duration-100 ease-out flex justify-center items-center gap-1">
                        <HomeIcon/>
                        Beranda
                    </Link>
                    <Link to="/tentang-kami"   className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out flex justify-center items-center gap-1">
                        <InfoIcon/>
                        Tentang Kami
                    </Link>
                    <Link to="/terapis"   className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out flex justify-center items-center gap-1">
                        <ContactEmergencyIcon/>
                        Terapis
                    </Link>
                    <Link to="/berita-dan-promo"   className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out flex justify-center items-center gap-1">
                        <NewspaperIcon/>
                        Berita dan Promo
                    </Link>
                </div>
            </motion.nav>


            

        </>
    )
}