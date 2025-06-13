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
import FadeInWhenVisible from "./fadeinwhenvisible";

export default function Navbar(){
    
    const location = useLocation();

    const [isOpenMenu, setOpenMenu] = useState(false);


    const currentPath = location.pathname;


    const ShowHandle =()=>{
        setOpenMenu(!isOpenMenu);
    }

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
                className=" flex justify-between items-center py-4 px-3 ">
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
                    <MenuIcon fontSize="large" color="error" onClick={ShowHandle} className={`${isOpenMenu===true ? 'rotate-90':'rotate-0'} animate transition-transform duration-300`} />
                </div>
                <div className="hidden md:flex items-center gap-5 text-base px-2 font-bold poppins tracking-wider text-indigo-700">
                    <Link to="/" className={`${currentPath==="/" ? "text-orange-800 border-b-4":""} hover:border-b-4 hover:text-orange-800  duration-100 ease-out flex justify-center items-center gap-1`}>
                        <HomeIcon/>
                        Beranda
                    </Link>
                    <Link to="/tentang-kami"   className={`${currentPath==="/tentang-kami" ? "text-orange-800 border-b-4":""} hover:border-b-4 hover:text-orange-800  duration-100 ease-out flex justify-center items-center gap-1`}>
                        <InfoIcon/>
                        Tentang Kami
                    </Link>
                    <Link to="terapis"   className={`${currentPath==="/terapis" ? "text-orange-800 border-b-4":""} hover:border-b-4 hover:text-orange-800  duration-100 ease-out flex justify-center items-center gap-1`}>
                        <ContactEmergencyIcon/>
                        Terapis
                    </Link>
                    <Link to="/berita-dan-promo"   className={`${currentPath==="/berita-dan-promo" ? "text-orange-800 border-b-4":""} hover:border-b-4 hover:text-orange-800  duration-100 ease-out flex justify-center items-center gap-1`}>
                        <NewspaperIcon/>
                        Informasi
                    </Link>
                </div>

                {isOpenMenu === true ?
                    <div className=" absolute z-110 bg-orange-300 w-80 left-1/2 top-60  -translate-x-1/2  rounded-2xl shadow-xl">
                        <FadeInWhenVisible>
                            <div className="relative p-4">
                                <div onClick={ShowHandle} className="rounded-full bg-orange-700 w-7 h-7 text-sm flex justify-center items-center right-3 top-3 text-gray-100 absolute p-2">
                                    X
                                </div>
                                <div className="flex flex-col justify-start items-start gap-4 ">
                                    <FadeInWhenVisible delay={0.3}>
                                        <Link onClick={ShowHandle} to="/" className="hover:border-b-4 hover:text-orange-800  active:text-gray-100 duration-100 ease-out flex justify-center items-center gap-1">
                                            <HomeIcon/>
                                            Beranda
                                        </Link>
                                    </FadeInWhenVisible>
                                
                                    <FadeInWhenVisible delay={0.4}>
                                        <Link onClick={ShowHandle} to="/tentang-kami"   className="hover:border-b-4 hover:text-orange-800 active:text-gray-100 duration-100 ease-out flex justify-center items-center gap-1">
                                            <InfoIcon/>
                                            Tentang Kami
                                        </Link>
                                    </FadeInWhenVisible>
                                
                                    <FadeInWhenVisible delay={0.5}>
                                        <Link onClick={ShowHandle} to="/terapis"   className="hover:border-b-4 hover:text-orange-800 active:text-gray-100 duration-100 ease-out flex justify-center items-center gap-1">
                                            <ContactEmergencyIcon/>
                                            Terapis
                                        </Link>
                                    </FadeInWhenVisible>
                                
                                    <FadeInWhenVisible delay={0.6}>
                                        <Link onClick={ShowHandle} to="/berita-dan-promo"   className="hover:border-b-4 hover:text-orange-800 active:text-gray-100 duration-100 ease-out flex justify-center items-center gap-1">
                                            <NewspaperIcon/>
                                            Informasi
                                        </Link>
                                    </FadeInWhenVisible>
                                      
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                :<></>
            }
            </motion.nav>


            

        </>
    )
}