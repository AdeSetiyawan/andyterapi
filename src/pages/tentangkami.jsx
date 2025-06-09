import { Helmet } from "react-helmet";
import Profile  from '../assets/foto/andy.png';
import Logosaja from '../assets/img/logosaja.png'
import Footer from "../components/footer";
import FadeInWhenVisible from "../components/fadeinwhenvisible";
export default function TentangKami() {
    return (
        <div>
            <main className="flex flex-col md:flex-row w-full bg-indigo-100 relative"> 
                <Helmet>
                    <title>Tentang Kami | Andi Terapi Syaraf dan Tulang</title>
                    <meta name="description" content="Tentang Andi Pijat Syaraf dan Tulang yang sudah lama membantu orang-orang yang memiliki kendala dalam penyakit syaraf dan tulang" />
                </Helmet>
                <div className="md:w-70 text-center flex justify-center md:items-end">
                    <FadeInWhenVisible>
                        <img src={Profile} alt="Andy terapis (OWNER)" className="w-70 mx-auto md:mt-0 mt-3 " />
                    </FadeInWhenVisible>
                </div>
                <div className="w-full px-4">
                    <img src={Logosaja} alt="logo andy terapis" className="w-24 p-3 mx-auto hidden md:block " />
                    <h1 className=" font-extrabold text-3xl tracking-wider rubik text-center w-full p-4  md:mt-0 mt-3">
                        <FadeInWhenVisible>
                            TENTANG ANDY TERAPIS
                        </FadeInWhenVisible>
                    </h1>
                    <FadeInWhenVisible delay={0.5}>
                        <article className="p-2 mt-2 w-full ">
                            <p className=" text-justify tracking-wider font-light text-base">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure dolorum incidunt animi sunt, at repellendus molestiae doloremque facere sit aliquid non quos, dolore quo repudiandae cum maiores quod rem ducimus labore deleniti ea voluptate? Beatae culpa magnam aliquam, enim molestias delectus et ipsa, possimus id quo distinctio fugit dicta? Eligendi fugiat, magni molestiae dolorum soluta enim, laboriosam alias ipsa possimus quisquam ab natus odit, odio mollitia aspernatur ea ratione. Voluptate voluptates, sunt eveniet eum at, doloremque ducimus similique, mollitia repellendus perspiciatis sequi sed facilis pariatur nemo quidem ipsum commodi culpa libero debitis. Perspiciatis, animi aliquid. Officiis numquam reprehenderit alias ullam unde nostrum sapiente in obcaecati quo ipsam cupiditate, repellendus quas sequi molestias natus consectetur architecto tenetur, libero labore corrupti rem ut ex distinctio sunt! Harum quisquam, consequuntur dicta odit, doloremque quae aliquam nostrum neque, cumque maiores nihil placeat tempora. Laborum esse fugiat animi praesentium perferendis inventore natus et expedita!
                            </p>
                        </article>
                    </FadeInWhenVisible>
                </div>
            </main>
            <Footer/>
        </div>
    )
}