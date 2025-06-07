
import * as motion from "motion/react-client";
import FadeInWhenVisible from "./fadeinwhenvisible";

export default function TerapisComponent() {
    const terapis =[
        // {
        //     "id": 1,
        //     "nama": "Jarno",
        //     "spesialis": "Totok Syaraf",
        //     "gambar": "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // },
        // {
        //     "id": 2,
        //     "nama": "Dariyatmo",
        //     "spesialis": "Syaraf Stroke",
        //     "gambar": "https://images.unsplash.com/photo-1661747675166-5cf96bd5d0dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // },
        
        // {
        //     "id": 2,
        //     "nama": "Sarni",
        //     "spesialis": "Patah Tulang",
        //     "gambar": "https://plus.unsplash.com/premium_photo-1731492051322-c4536cbc1606?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // },
        
    ]


    return (
        <>
        <FadeInWhenVisible>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 1,
                delay: 0.7,
                ease: [0, 0.71, 0.1, 1.01],
                }}
                className="w-full h-screen p-4 bg-gray-100">
                <div className="text-3xl font-extrabold text-center tracking-wider text-shadow-lg/10 text-orange-800">
                    TERAPIS BERSERTIFIKAT
                </div>
                <div>
                    {
                        terapis.length > 0 ?
                        terapis.map((terapis, index) =>{

                        })
                        :
                        "Tidak ada data"

                    }
                    
                </div>
            </motion.div>

        </FadeInWhenVisible>
        </>
    )
}