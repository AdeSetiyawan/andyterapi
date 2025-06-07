//import component
import FadeInWhenVisible from "../components/fadeinwhenvisible";
import Footer from "../components/footer";
import GalleryComponent from "../components/galleryComponent";
import HeaderSeo from "../components/headerSEO";
import Hero from '../components/hero';
import LokasiComponent from '../components/lokasiComponent';
import TerapisComponent from "../components/terapisComponent";
import Testimoni from "../components/testimoni";



export default function Beranda (){

    return(
        <main>
            <HeaderSeo/>
            <Hero/>
            <LokasiComponent/>     
            <TerapisComponent/>     
            <FadeInWhenVisible delay={0.3}>
                <GalleryComponent/>
            </FadeInWhenVisible>
            <Testimoni />
            <Footer/>
        </main>
    )
}