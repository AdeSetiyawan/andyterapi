import { useEffect, useState } from "react";
import BackHero from '../assets/img/backHero.jpeg'
import NoData from '../assets/img/svg/no-data.svg'
import FadeInWhenVisible from "../components/fadeinwhenvisible";
export default function Terapis() {
    const [terapist, setTerapis] = useState(null);
       const terapis = Array.from({ length: 30 }, (_, i) => ({
            id: i + 1,
            nama: `Terapis ${i + 1}`,
            spesialis: `Spesialis ${i % 3 === 0 ? 'Totok Syaraf' : i % 3 === 1 ? 'Patah Tulang' : 'Stroke'}`,
            gambar: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1480&auto=format&fit=crop",
            sertifikat: "https://lzd-u.slatic.net/657ed1e4b8a84d39911087a0565ad9b7_473943d0d4ac4ed1a41f2186e4ba35ea.jpg"
        }));
    
        useEffect(()=>{
            setTerapis(terapis);
        },[]);
    
    

        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 6; // tampil 6 per halaman

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = terapist?.slice(indexOfFirstItem, indexOfLastItem);

        const totalPages = Math.ceil(terapist?.length / itemsPerPage);

        const paginate = (pageNumber) => setCurrentPage(pageNumber);



    return (
        <main>
              <div
                    className="w-full flex flex-col p-2 py-5 justify-evenly items-center relative tracking-wider bg-orange-700  bg-cover bg-center" style={{ backgroundImage: `url(${BackHero})` }}
                    >
                     <div className="bg-orange-700/80 h-full w-full absolute z-0"> </div>
                     <h1 className="z-100 text-xl md:text-3xl rubik font-extrabold text-gray-100 tracking-wider">
                        TERAPIS BERSERTIFIKAT 
                     </h1>
                     <div className="w-full">
                        <div className="w-full p-4 flex flex-col md:flex-row flex-wrap items-center justify-between gap-3 h-auto md:h-auto lg:h-auto ">
                            {
                                terapist?.length > 0 ?
                                currentItems.map((terapis, index) =>{
                                    return(
                                        
                                            <FadeInWhenVisible delay={(0.3+(index/10))}>
                                                <div className="rounded-xl shadow-xl shadow-gray-500/20 p-2 flex md:flex-col  justify-center items-center bg-gray-50 md:bg-orange-400/40 w-90 md:w-110  ">
                                                    <div className="w-40">
                                                        <img src={terapis.gambar} className="w-35 h-35 border-4 border-gray-100  rounded-full object-cover mx-auto " />
                                                    </div>
                                                    <div key={index} className="w-full md:w-100 text-indigo-900  flex  p-3 flex-col flex-wrap justify-center" >
                                                        <div className=" font-extrabold text-start md:text-center text-base md:text-xl tracking-wider">
                                                            {terapis.nama}
                                                        </div>
                                                        <div className="text-[9pt] tracking-wider text-gray-200 my-2">
                                                            <span>
                                                                Spesialis : 
                                                            </span>
                                                            {terapis.spesialis}
                                                        </div>
                                                        <div>
                                                            <img src={terapis.sertifikat} alt="spesial {terapis} " className="w-55 h-35 md:w-100  md:h-75 object-cover transform hover:scale-110     active:scale-100 transition-transform duration-30" />
                                                        </div>
                                                    </div>
                                                </div>      
                                            </FadeInWhenVisible>
                                    )
                                })
                                :
                                <div className=" flex flex-col justify-center items-center gap-4  rounded-2xl ">
                                    <img type="svg" src={NoData}  className=" w-20" />
                                    <div className=" text-base tracking-wider">
                                        Tidak ada data
                                    </div>
                                </div>
        
                                            }
                                            
                        </div>

                        <div className="flex justify-center mt-4 gap-2 z-100">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => paginate(i + 1)}
                                    className={` cursor-pointer z-100 px-3 py-1 rounded-md border ${currentPage === i + 1 ? 'bg-orange-600 text-white' : 'bg-white text-orange-700'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                     </div>
            </div>
        </main>
    )
}