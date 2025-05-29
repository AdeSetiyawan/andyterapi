import { Helmet } from "react-helmet";

export default function HeaderSeo(
        {
            title = "Andi Terapi Syaraf dan Tulang - Terapi Aman, Alami & Profesional",
            description="Andi Terapi Syaraf dan Tulang melayani terapi aman dan alami untuk syaraf kejepit, nyeri punggung, keseleo, dan berbagai masalah tulang.",
            keywords="terapi syaraf, terapi tulang, terapi alami, pengobatan syaraf kejepit, tukang urut, andi terapi",
        }) 
    {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content="Andi Terapi Syaraf dan Tulang - Terapi Aman & Profesional" />
            <meta property="og:description" content="Layanan terapi syaraf dan tulang terbaik untuk nyeri dan gangguan gerak." />
            <meta property="og:image" content="https://example.com/images/og-image.jpg" />
            <meta property="og:url" content="https://anditerapis.com" />
            <meta name="twitter:card" content="summary                                                          _large_image" />
            <meta name="twitter:title" content="Andi Terapi Syaraf dan Tulang" />
            <meta name="twitter:description" content="Terapi alami, profesional, dan terpercaya untuk syaraf dan tulang Anda." />
        </Helmet>
    )
}