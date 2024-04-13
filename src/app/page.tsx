import AboutSection from "@/components/AboutSection";
import FavoritesSection from "@/components/FavoritesSection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import NewsSection from "@/components/NewsSection";

function HomePage() {
    return (
        <>
            <HeroSection />
            <NewsSection />
            <AboutSection />
            <FavoritesSection />
            <LocationSection />
        </>
    );
}

export default HomePage;
