// The "What's in for you" block: heading at the top, then the stripes behind the full text area.
const benefits = [
    { title: "1. Be seen where it counts.", text: "Your logo sits on the car, our team shirts, the race-day standee, and our printed brochures, in the room where the race is decided." },
    { title: "2. Be in the feed, not just on the car.", text: "We post about you on Instagram and LinkedIn. Platinum sponsors also get paid Instagram ads, so your name reaches people who never attended the race." },
    { title: "3. Be the brand behind the build.", text: "Every prototype, test, and race becomes content, and you're part of the story from the first sketch to the finish line." },
    { title: "4. Back a team on the rise.", text: "We finished 4th of 36 teams on our first attempt, with awards for Engineering and Innovation and Fastest Reaction Time. Now we're going back for first place." },
    { title: "5. Be sure it worked.", text: "You get a content calendar before we start and a monthly report with impressions and engagement. At the end of the season, a summary with photos and results." },
];

export default function Benefits() {
    return (
        <section className="bg-black px-6 py-20 text-white md:px-[5%] md:py-28">

            {/* The heading sits in normal flow at the top */}
            <h2 className="text-[clamp(40px,5vw,72px)] font-bold leading-[1]">
                What's in for you?
            </h2>

            {/* This wrapper's height is set by the text. The stripes fill it */}
            <div className="relative mt-12">

                {/* The stripes as a background. cover fills the whole area, and bg-top keeps the ball at the top */}
                <div
                    className="absolute inset-0 hidden bg-[url('/Stripes.png')] bg-cover bg-top opacity-50 md:block"
                    aria-hidden="true"
                />

                {/* The text sits above the stripes. md:pt-[24vw] clears the ball */}
                <div className="relative z-10 grid gap-10 md:grid-cols-2 md:gap-x-24 md:pt-[24vw]">
                    {benefits.map((b) => (
                        <div key={b.title} className="max-w-[360px]">
                            <p className="text-lg font-bold">{b.title}</p>
                            <p className="mt-2 text-sm leading-relaxed">{b.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}