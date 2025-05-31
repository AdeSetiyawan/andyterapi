// icon from mui 
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FadeInWhenVisible from './fadeinwhenvisible';

export default function Footer(){
    return (
        <div className="p-4 ">
            <div>
                <div className="w-full mt-2 md:mt-8  flex flex-col  justify-center items-center ">
                
                    <div className="mt-2 flex gap-4" >
                        <FadeInWhenVisible delay={1.1}>    
                            <a href="https://www.instagram.com/andyterapisyarafdantulang2017" 
                                className=" text-indigo-700 rounded-full hover:bg-indigo-950 hover:text-gray-100 flex flex-col justify-center items-center border border-indigo-500 active:bg-indigo-700 p-3 w-15 h-15">
                                <InstagramIcon fontSize="small" />
                                <div className="text-[7pt] font-extralight">
                                    Instagram
                                </div>
                            </a>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={1.3}>  
                            <a href=""
                                className=" text-indigo-700 rounded-full hover:bg-indigo-950 hover:text-gray-100 flex flex-col justify-center items-center border border-indigo-500 active:bg-indigo-700 p-3 w-15 h-15"
                            >
                                <YouTubeIcon fontSize="small" />
                                <div className="text-[7pt] font-extralight">
                                    Youtube
                                </div>
                            </a>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={1.5}>  
                            <a href=""
                                className=" text-indigo-700 rounded-full hover:bg-indigo-950 hover:text-gray-100 flex flex-col justify-center items-center border border-indigo-500 active:bg-indigo-700 p-3 w-15 h-15"
                            >
                                <MusicNoteIcon fontSize="small" />
                                    <div className="text-[7pt] font-extralight">
                                    Tiktok
                                </div>
                            </a>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </div>
            <div className='p-2 mt-4 flex flex-col justify-center text-center gap-1 '>
                <div className=' text-xl font-bold text-indigo-900'>
                    Rumah Sehat Andy Terapis
                </div>
                <div className='text-sm tracking-wider text-gray-500'>
                    Terapi Syaraf, Tulang, dan Stroke
                </div>
                <div className='italic font-extralight text-gray-500 tracking-wider text-[9pt]'>
                    "Berikhtiar untuk menjemput kesembuhan"
                </div>
                <div className='mt-4'>
                    <a href="" className='bg-green-500 shadow-md/60 shadow-gray-500 active:shadow-none px-4 py-2 text-gray-50 rounded-full hover:bg-green-400 active:bg-green-300'>
                        <WhatsAppIcon /> Hubungi Kami
                    </a>
                </div>
                
            </div>
            <div className='text-center text-[7pt] mt-6 md:text-sm tracking-wider font-light '>
                &copy; 2025 Andy Terapis - All rights reserved
            </div>
        </div>
    )
}