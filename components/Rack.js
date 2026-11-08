export default function Rack() {
    return (
        <section className="bg-black px-6 py-24 text-white md:px-[5%] md:py-32">
            <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                    <h2 className="text-[clamp(48px,6vw,96px)] font-bold leading-[0.95]">
                        Last year, we were one ball short.
                    </h2>
                    <div className="mt-10 space-y-6 text-lg leading-relaxed">
                        <p><strong>Sink the black early.</strong> You lose, however well you played before it.</p>
                        <p><strong>Sink it last.</strong> Every shot before it counts.</p>
                    </div>
                </div>

                <img
                    src="/rack.png"
                    alt="A rack of fifteen balls with the black ball in the center"
                    className="w-full max-w-[520px] justify-self-center"
                />
            </div>

        </section>
    );
}