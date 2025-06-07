// import from motion 
import * as motion from "motion/react-client";
//import image from image source
import BackHero from '../assets/img/backHero.jpeg'
import FadeInWhenVisible from "./fadeinwhenvisible";
import { Fade } from "@mui/material";
import { useEffect, useState } from "react";




export default function Testimoni() {
    const [komentar,setTestimoni] = useState();
  const data = [
    {
        nama_pelanggan: 'Sarti',
        testimoni: 'Sangat luar biasa, terapi ini sangat membantu mengurangi sakit kepala saya.',
        created_at: '2025-04-14 08:04:00',
        updated_at: '2025-04-14 08:04:00',
    },
    {
        nama_pelanggan: 'Budi Santoso',
        testimoni: 'Awalnya ragu, tapi setelah terapi badan terasa ringan sekali!',
        created_at: '2025-04-15 09:20:00',
        updated_at: '2025-04-15 09:20:00',
    },
    {
        nama_pelanggan: 'Lestari Dewi',
        testimoni: 'Pinggang saya yang sering nyeri sekarang jauh lebih enak.',
        created_at: '2025-04-16 10:10:00',
        updated_at: '2025-04-16 10:10:00',
    },
    {
        nama_pelanggan: 'Agus Pratama',
        testimoni: 'Pelayanannya ramah dan hasil terapi sangat terasa di tubuh.',
        created_at: '2025-04-17 11:45:00',
        updated_at: '2025-04-17 11:45:00',
    },
    {
        nama_pelanggan: 'Rina Mulyani',
        testimoni: 'Tidur saya jadi lebih nyenyak setelah terapi totok syaraf.',
        created_at: '2025-04-18 14:30:00',
        updated_at: '2025-04-18 14:30:00',
    },
    {
        nama_pelanggan: 'Dedi Firmansyah',
        testimoni: 'Sakit di leher saya hilang setelah dua kali sesi terapi.',
        created_at: '2025-04-19 08:00:00',
        updated_at: '2025-04-19 08:00:00',
    },
    {
        nama_pelanggan: 'Sinta Yuliana',
        testimoni: 'Saya jadi lebih rileks dan tidak mudah stres.',
        created_at: '2025-04-20 09:40:00',
        updated_at: '2025-04-20 09:40:00',
    },
    {
        nama_pelanggan: 'Taufik Hidayat',
        testimoni: 'Terapi yang luar biasa, sangat direkomendasikan!',
        created_at: '2025-04-21 10:15:00',
        updated_at: '2025-04-21 10:15:00',
    },
    {
        nama_pelanggan: 'Melani Kartika',
        testimoni: 'Totok syaraf ini membantu mengurangi nyeri lutut saya.',
        created_at: '2025-04-22 13:25:00',
        updated_at: '2025-04-22 13:25:00',
    },
    {
        nama_pelanggan: 'Arif Nugroho',
        testimoni: 'Setelah terapi, tubuh saya terasa segar dan lebih bertenaga.',
        created_at: '2025-04-23 15:50:00',
        updated_at: '2025-04-23 15:50:00',
    },
    {
        nama_pelanggan: 'Yuni Astuti',
        testimoni: 'Sakit bahu yang saya alami berbulan-bulan sembuh dalam beberapa sesi.',
        created_at: '2025-04-24 16:35:00',
        updated_at: '2025-04-24 16:35:00',
    },
    {
        nama_pelanggan: 'Joko Pramono',
        testimoni: 'Terapi ini sangat cocok untuk pekerja kantoran seperti saya.',
        created_at: '2025-04-25 17:45:00',
        updated_at: '2025-04-25 17:45:00',
    },
    {
        nama_pelanggan: 'Sri Wahyuni',
        testimoni: 'Totok syaraf membantu menghilangkan pegal-pegal di punggung.',
        created_at: '2025-04-26 08:25:00',
        updated_at: '2025-04-26 08:25:00',
    },
    {
        nama_pelanggan: 'Hendra Saputra',
        testimoni: 'Saya bisa beraktivitas kembali tanpa rasa nyeri yang mengganggu.',
        created_at: '2025-04-27 09:10:00',
        updated_at: '2025-04-27 09:10:00',
    },
    {
        nama_pelanggan: 'Citra Ramadhani',
        testimoni: 'Alhamdulillah badan jadi enteng dan lebih sehat.',
        created_at: '2025-04-28 10:00:00',
        updated_at: '2025-04-28 10:00:00',
    },
    ];

    const [loading,setLoading] =useState(true);
    const dataTampil =data.slice(1,6);

    useEffect(()=>{
        setTimeout(()=>{
            setTestimoni(dataTampil);
            setLoading(false);
        },1000)
    },[]);

   
    
    if(loading) return <div className="flex justify-center p-4"> <div className="w-10 h-10 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div></div>;
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 1,
            delay: 0.7,
            ease: [0, 0.71, 0.1, 1.01],
            }}
            className="p-4 w-full flex flex-col justify-center items-center relative tracking-wider bg-orange-700  bg-cover bg-center" style={{ backgroundImage: `url(${BackHero})` }}
        >
        
            <div className="bg-orange-700/80 h-full w-full absolute z-0">        
            </div>

            <FadeInWhenVisible delay={0.5}>
                <div className="z-100 font-extrabold tracking-wider text-center text-3xl text-shadow-lg text-gray-100 ">
                    TESTIMONI PASIEN
                </div>
            </FadeInWhenVisible>
            <div className="w-full flex flex-wrap justify-center  p-4 z-100">
                {
                    komentar.length > 0 ? (
                        komentar.map((item, idx) => (
                            <FadeInWhenVisible key={idx} delay={0.5}>
                                <div className="bg-white w-full md:w-50 h-auto md:h-50 lg:h-60 justify-center items-center rounded-xl shadow p-2 text-center m-2 flex flex-col">
                                    <p className="text-gray-700 italic text-sm">"{item.testimoni}"</p>
                                    {/* maksimal 65 karakter  */}
                                    <div className="mt-2 text-sm text-right text-gray-500">
                                    - {item.nama_pelanggan}
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        ))
                        ) : (
                        <div className="col-span-full text-center text-gray-500 py-8">
                            Belum ada testimoni.
                        </div>
                        )
                }

            </div>
            <FadeInWhenVisible delay={0.5}>
                <button className="z-100  bg-indigo-900 shadow-lg/60 shadow-gray-600 text-gray-100 hover:cursor-pointer hover:bg-indigo-700 active:bg-indigo-600 rounded-full px-4 py-2 text-base tracking-wider">Lihat Semua</button>
            </FadeInWhenVisible>    



            </motion.div>
    )
}