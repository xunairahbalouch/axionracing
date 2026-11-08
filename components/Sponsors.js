export default function Sponsors() {
    return (
        <section id="sponsors" className="bg-white px-6 py-24 md:px-[5%] md:py-32">
            <h2 className="text-[clamp(48px,7vw,104px)] font-bold leading-[1] tracking-tight">
                Back the car, Own the story.
            </h2>

            {/* The five tier cards, exported from Figma. They scale to the screen width */}
            <img
                src="/Cards.png"
                alt="Sponsorship tiers: Platinum PKR 300,000, Gold PKR 200,000, Silver PKR 100,000, Bronze PKR 50,000, Custom"
                className="mt-16 w-full"
            />

            <p className="mt-16 text-center text-3xl font-bold leading-tight md:text-5xl">
                Sponsorships end. Stories don't.
            </p>
            <p className="mt-16 text-center text-3xl font leading-tight md:text-5xl">
                The result is a name that went where the attention was, back when it was still a bet.
            </p>
        </section>
    );
}