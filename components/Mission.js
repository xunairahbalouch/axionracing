export default function Mission() {
    return (
        <section className="relative overflow-hidden bg-white px-6 py-24 md:px-[5%] md:py-32">
            {/* The angled starburst, bleeding off the bottom-left corner */}
            <img
                src="/starburst-mission.png"
                alt=""
                className="pointer-events-none absolute -bottom-10 -left-10 hidden w-[45%] md:block"
            />

            <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-widest">Our mission this year is</p>

                <h2 className="mt-6 text-[clamp(48px,7vw,110px)] font-bold leading-[0.95]">
                    To be the best at Race Pakistan 2027.
                </h2>

                <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
                    <p className="max-w-[520px] text-lg leading-relaxed">
                        We can't promise a win. We can promise the work: the fastest car we can build, and a team
                        sponsors are proud to be seen with.
                    </p>

                    <img src="/mission.png" alt="" className="w-full" />
                </div>
            </div>
        </section>
    );
}