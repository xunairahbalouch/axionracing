// The results block: four circles, with 1st highlighted in white
const stats = [
    { value: "2nd", label: "Race performance" },
    { value: "1st", label: "Engineering & innovation", highlight: true },
    { value: "2", label: "Awards won" },
    { value: "4/4", label: "Runs, no failures" },
];

export default function Results() {
    return (
        <section id="results" className="bg-black px-6 py-24 text-white md:px-[5%] md:py-32">
            <h2 className="text-[clamp(48px,7vw,104px)] font-normal leading-[1.05]">
                Rack up the results.
            </h2>

            {/* flex-wrap lets the circles drop to a second row on phones */}
            <div className="mt-16 flex flex-wrap justify-center gap-8">
                {stats.map((stat) => (
                    <div
                        key={stat.value}
                        // The highlighted circle is filled white with black text. Others are outlined
                        className={`flex h-48 w-48 flex-col items-center justify-center rounded-full border-2 border-white text-center ${stat.highlight ? "bg-white text-black" : ""
                            }`}
                    >
                        <span className="text-5xl font-bold">{stat.value}</span>
                        <span className="mt-2 px-4 text-sm">{stat.label}</span>
                    </div>
                ))}
            </div>

            <p className="mt-16 max-w-[560px] text-lg leading-relaxed">
                Engineering and Innovation. Fastest Reaction Time. Three prototypes behind the AR-27.
                Finished 4th. This year designed to finish first.
            </p>
        </section>
    );
}