import { useState } from "react";
import HeaderSeo from "../components/headerSEO";
import FadeInWhenVisible from "../components/fadeinwhenvisible";
import Footer from "../components/footer";

export default function Gallery() {
    const [selectImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
const [imageLoadingStates, setImageLoadingStates] = useState({});
  const imagesPerPage = 9;
    const data = [
        "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080",

        "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1668491195456-9341d9cf3977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1475518112798-86ae358241eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1503777119540-ce54b422baff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1502083896352-259ab9e342d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1708791793972-cf97ef3c01c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDB8fHwxNzIxODIyMjkwfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1516470544373-df3edeb89d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjYXQlMjB3aGl0ZXxlbnwwfDB8fHwxNzIxODIyMjkwfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1517451330947-7809dead78d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
   
    ]

  // Hitung index gambar untuk halaman aktif
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = data.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(data.length / imagesPerPage);
       const handleImageLoad = (index) => {
        setImageLoadingStates((prev) => ({ ...prev, [index]: false }));
    };

    const handleImageError = (index) => {
        setImageLoadingStates((prev) => ({ ...prev, [index]: false }));
    };
    return (
        <div className="w-full " >
            <HeaderSeo/>
                <FadeInWhenVisible>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {currentImages.map((src, index) => {
                        const imageIndex = indexOfFirstImage + index;
                        const isLoading = imageLoadingStates[imageIndex] !== false;

                        return (
                   
                    <div
                        key={index}
                        className="w-full h-48 overflow-hidden rounded-lg shadow cursor-pointer group"
                        onClick={() => setSelectedImage(src)}
                        >
                         {isLoading  && (
                           <div className="w-10 h-10 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
                        )}
                        <img
                            src={src}
                            alt={`Image ${index}`}
                            onLoad={() => handleImageLoad(imageIndex)}
                            onError={() => handleImageError(imageIndex)}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                        );      
                })}
            </div>
                </FadeInWhenVisible>


                {/* Pagination Controls */}
            <div className="flex justify-center gap-4 mt-4 ">
                <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 bg-orange-800 hover:bg-orange-600 active:bg-orange-700 cursor-pointer disabled:cursor-no-drop  text-white rounded disabled:opacity-50"
                disabled={currentPage === 1}
                >
                Prev
                </button>
                <span className="text-lg font-semibold">
                Page {currentPage} of {totalPages}
                </span>
                <button
                onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-4 py-2 bg-orange-800 hover:bg-orange-600 active:bg-orange-700 cursor-pointer disabled:cursor-no-drop  text-white rounded disabled:opacity-50"
                disabled={currentPage === totalPages}
                >
                Next
                </button>
            </div>


            {/* Modal */}
            {selectImage && (
               
                    <div
                    className="fixed inset-0 bg-black bg-opacity-80  flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                    >
                         <FadeInWhenVisible>
                        <div className="relative max-w-3xl max-h-[90vh]">
                            <img
                            src={selectImage}
                            alt="Full View"
                            className="w-full h-auto max-h-[90vh] rounded-lg shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                            />
                            <button
                            className="absolute top-2  right-2 text-white text-2xl bg-black hover:bg-gray-800 active:bg-gray-700 hover:cursor-pointer bg-opacity-50 px-3 rounded-full hover:bg-opacity-80"
                            onClick={() => setSelectedImage(null)}
                            >
                            &times;
                            </button>
                        </div>
                        </FadeInWhenVisible>
                    </div>
            )}



            <div className="p-4 mt-3 flex justify-center w-full">
                <div className="w-[75%] border-b-3 border-indigo-300"></div>
            </div>
        </div>

        
    )
}