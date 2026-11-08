import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Blend from "../components/Blend";
import Results from "../components/Results";
import Money from "../components/Money";
import Benefits from "../components/Benefits";
import Sponsors from "../components/Sponsors";
import Tiers from "../components/Tiers";
import Rack from "../components/Rack";
import Shot from "../components/Shot";
import Mission from "../components/Mission";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main>
            <Nav />
            <Hero />
            <Blend />
            <Results />
            <Money />
            <Benefits />
            <Sponsors />
            <Tiers />
            <Rack />
            <Shot />
            <Mission />
            <Footer />
        </main>
    );
}