import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { Programs } from "../components/sections/Programs";
import { Method } from "../components/sections/Method";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQPreview } from "../components/sections/FAQPreview";
import { CTA } from "../components/sections/CTA";

export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Method />
            <Programs />
            <Testimonials />
            <FAQPreview />
            <CTA />
            <Footer />
        </>
    );
}
