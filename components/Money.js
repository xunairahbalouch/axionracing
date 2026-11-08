// Each label has its full class names written out, so Tailwind includes them in the build.
const splits = [
    {
        label: "Branding",
        percent: "10%",
        text: "The ball, logo and type system, brand guidelines, car renders and animation, photo and video styling, and design tools.",
        place: "md:absolute md:left-[30%] md:top-[51%]",
    },
    {
        label: "Car",
        percent: "45%",
        text: "Materials (body, wheels, axles, bearings), CNC machining and 3D printing, new prototypes, paint and finishing, CO₂ cartridges, testing, and race-day costs such as entry and travel.",
        place: "md:absolute md:left-[8%] md:top-[60%]",
    },
    {
        label: "Marketing",
        percent: "25%",
        text: "Website domain, web hosting and upkeep. Instagram and Google ads for reach. Standees at the venue, plus pamphlets and brochures. Team and sponsor portfolios printed for meetings and the competition. Photo and video at the event.",
        place: "md:absolute md:left-[69%] md:top-[45%] md:w-[300px]",
    },
    {
        label: "Merchandise",
        percent: "20%",
        text: "Team shirts, caps, bags and kit, with printing or embroidery, plus the display items for race day. Your logo in every room.",
        place: "md:absolute md:left-[74%] md:top-[72%]",
    },
];

export default function Money() {
    return (
        // On desktop the section is a fixed-height canvas (md:h-[1000px]).
        // Everything inside is positioned against it, so the heading, labels, and star stay put.
        <section
            id="money"
            className="relative overflow-hidden bg-white px-6 pb-16 pt-24 md:h-[1000px] md:px-[5%] md:pb-0 md:pt-0"
        >
            {/* The heading: top-left on phones, positioned under the top labels on desktop */}
            <h2 className="relative z-10 text-[clamp(56px,8vw,120px)] font-bold leading-[0.95] tracking-tight md:absolute md:left-[5%] md:top-[21%]">
                Every Rupee,
                <br />
                Back on the Table
                <br />

            </h2>

            {/* md:contents removes this wrapper on desktop, so each label positions against the section */}
            <div className="mt-12 flex flex-col gap-10 md:contents">
                {splits.map((s) => (
                    <div key={s.label} className={`relative z-10 max-w-[260px] ${s.place}`}>
                        <p className="text-[clamp(24px,2.6vw,40px)] font-bold leading-tight">
                            {s.percent} {s.label}
                        </p>
                        <p className="mt-2 text-sm leading-snug">{s.text}</p>
                    </div>
                ))}
            </div>

            {/* The starburst: a window half the star's height, flush with the bottom edge */}
            <div className="hidden md:absolute md:bottom-0 md:left-1/2 md:block md:aspect-[2/1] md:w-[72%] md:max-w-[900px] md:-translate-x-1/2 md:overflow-hidden">
                <img src="/starburst.png" alt="" className="block w-full" />
            </div>
        </section>
    );
}