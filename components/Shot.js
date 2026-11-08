export default function Shot() {
    return (
        <section className="bg-white px-6 py-24 md:px-[5%] md:py-32">
            <p className="text-sm font-bold uppercase tracking-widest">Race Pakistan, Season II</p>

            <img
                src="/shot.png"
                alt="A numbered ball about to be struck with a cue"
                className="mt-10 w-full"
            />

            <h2 className="mt-10 text-[clamp(56px,9vw,140px)] font-bold leading-[0.9]">
                Last shot.
                <br />
                First place.
            </h2>
        </section>
    );
}