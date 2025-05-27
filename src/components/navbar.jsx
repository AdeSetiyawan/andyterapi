import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import LogoUtama from '../../public/img/Logoutama.png'
import Logosaja from '../assets/img/logosaja.png'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
export default function Navbar(){
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
                className=" hidden md:flex justify-between items-center py-4 px-3">
                <div className="flex items-center rounded-xl text-indigo-800 tracking-wider font-bold rubik  "> 
                   <img src={Logosaja} alt="" className="w-15" />
                   <div className="flex flex-col  p-2 text-sm">
                        <div>
                            Rumah Sehat
                        </div>
                        <div>
                            Andy terapis
                        </div>
                   </div>
                </div>
                <div className=" flex items-center gap-5 text-lg px-2 font-bold poppins tracking-wider text-indigo-700">
                    <Link to="/" className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out flex justify-center items-center gap-1">
                        <HomeIcon/>
                        Beranda
                    </Link>
                    <Link to="/tentang-kami"  className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out flex justify-center items-center gap-1">
                        <InfoIcon/>
                        Tentang Kami
                    </Link>
                    <Link to="/terapis"  className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out flex justify-center items-center gap-1">
                        <ContactEmergencyIcon/>
                        Terapis
                    </Link>
                    <Link to="/berita-dan-promo"  className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out flex justify-center items-center gap-1">
                        Berita dan Promo
                    </Link>
                    <Link to="/kontak-kami"  className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out flex justify-center items-center gap-1">
                        Kontak Kami
                    </Link>
                </div>
            </motion.nav>
        </>
    )
}