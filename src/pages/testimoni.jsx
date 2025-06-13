import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import FadeInWhenVisible from "../components/fadeinwhenvisible";
import LokasiComponent from "../components/lokasiComponent";
import Quote from '../assets/img/svg/quote.svg'
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
        const dataTampil =data;
    
        useEffect(()=>{
            setTimeout(()=>{
                setTestimoni(dataTampil);
                setLoading(false);
            },1000)
        },[]);
    
       
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 12; // tampil 6 per halaman
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = dataTampil?.slice(indexOfFirstItem, indexOfLastItem);
        const totalPages = Math.ceil(dataTampil?.length / itemsPerPage);
        const paginate = (pageNumber) => setCurrentPage(pageNumber);


        if(loading) return <div className="flex justify-center p-4"> <div className="w-10 h-10 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div></div>;
        
    return (
        <main>
            <Helmet>
                 <title>Testimoni | Rumah Sehat Andy Terapi</title>
                <meta name="description" content="testimoni dari pelanggan yang sudah melaukan terapi di Andy Terapi baik di Wonogiri Maupun Karanganyar" />
                <meta name="keywords" content="rumah sehat, terapi, terapi stroke, terapi syaraf, terapi otot, andy terapi" />
                <meta property="og:title" content="Andi Terapi Syaraf dan Tulang - Terapi Aman & Profesional" />
                <meta property="og:description" content="Layanan terapi syaraf dan tulang terbaik untuk nyeri dan gangguan gerak." />
                <meta property="og:image" content="https://example.com/images/og-image.jpg" />
                <meta property="og:url" content="https://anditerapis.com" />
                <meta name="twitter:card" content="summary                                                          _large_image" />
                <meta name="twitter:title" content="Andi Terapi Syaraf dan Tulang" />
                <meta name="twitter:description" content="Terapi alami, profesional, dan terpercaya untuk syaraf dan tulang Anda." />
            </Helmet>
            <header className="text-center py-4">
                <FadeInWhenVisible>
                    <h1 className="text-3xl rubik text-orange-800 font-extrabold">
                        TESTIMONI ANDI TERAPI
                    </h1>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.1}>
                    <div className="border-5 w-50 rounded-full mx-auto mt-2 border-orange-800">

                    </div>
                </FadeInWhenVisible>
            </header>
            <article>
                 <div className="w-full flex flex-wrap justify-center  p-4 z-100">
                    {
                        komentar.length > 0 ? (
                            currentItems.map((item, idx) => (
                                <FadeInWhenVisible key={idx} delay={0.1+(idx/10)}>
                                    <div className="bg-orange-600/40 w-full md:w-50 h-auto md:h-50 lg:h-60 justify-center items-center rounded-xl shadow p-2 text-center m-2 flex flex-col">
                                        <img src={Quote} alt="" className="w-10 p-1" />
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
                  <div className="flex justify-center mt-4 gap-2 z-100 mb-10">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={`  z-100 px-3 py-1 rounded-md border ${currentPage === i + 1 ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-white text-orange-700 cursor-pointer'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                <LokasiComponent/>

            </article>
            
        </main>
    )

}