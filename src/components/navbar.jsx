import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
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
                <div className="flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-yellow-200 tracking-wider font-bold  "> 
                    Andi Terapis
                </div>
                <div className=" flex items-center gap-4 text-lg px-2 font-bold poppins tracking-wider text-indigo-700">
                    <Link to="/" className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out">Beranda</Link>
                    <Link to="/tentang-kami"  className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out">Tentang Kami</Link>
                    <Link to="/terapis"  className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out">Terapis</Link>
                    <Link to="/berita-dan-promo"  className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out">Berita dan Promo</Link>
                    <Link to="/kontak-kami"  className="hover:border-b-4 hover:text-orange-800 duration-100 ease-out">Kontak Kami</Link>
                </div>
            </motion.nav>
        </>
    )
}