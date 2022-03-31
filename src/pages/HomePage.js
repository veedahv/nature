import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import NewsSection from "../components/NewsSection";


export default function HomePage() {
    return (
        <div className="home">
            {/* <p className="">
                this is the home page
            </p> */}
            <HeroSection />
            <AboutSection />
            <NewsSection />
        </div>
    )
}