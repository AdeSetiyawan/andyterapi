//import component
import FadeInWhenVisible from "../components/fadeinwhenvisible";
import GalleryComponent from "../components/galleryComponent";
import HeaderSeo from "../components/headerSEO";
import Hero from '../components/hero';
import LokasiComponent from '../components/lokasiComponent';



export default function Beranda (){

    return(
        <main>
            <HeaderSeo/>
            <Hero/>
            <LokasiComponent/>            
            <FadeInWhenVisible delay={0.3}>
                <GalleryComponent/>
            </FadeInWhenVisible>
        </main>
    )
}