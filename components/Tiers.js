// Edit the bullet lists here. Replace each [#] with a real number.
const tiers = [
    {
        name: "Platinum", price: "PKR 300,000", items: [
            "Largest logo on the car, website, and team merch",
            "[#] organic posts a month on Instagram and LinkedIn",
            "[#] Instagram paid ad campaigns",
            "Content calendar shared up front",
            "Monthly report: impressions and engagement",
            "Speaking or feature slot at team events",
        ]
    },
    {
        name: "Gold", price: "PKR 200,000", items: [
            "Large logo on the car and website",
            "[#] posts a month on Instagram and LinkedIn",
            "Logo on team merch",
            "Team visit or workshop for your staff",
        ]
    },
    {
        name: "Silver", price: "PKR 100,000", items: [
            "Medium logo on the car and team kit",
            "Logo on the sponsors page",
            "[#] posts a month",
        ]
    },
    {
        name: "Bronze", price: "PKR 50,000", items: [
            "Logo on the car and sponsors page",
            "One thank-you post",
        ]
    },
    {
        name: "Custom", price: "You tell us", items: [
            "Give more, or give differently",
            "We shape a package around what you want",
        ]
    },
];

export default function Tiers() {
    return (
        <section className="bg-orange px-6 py-16 text-white md:px-[5%]">
            <div className="grid gap-8 md:grid-cols-5">
                {tiers.map((t) => (
                    <div key={t.name}>
                        <p className="text-xs font-bold uppercase tracking-widest">{t.name}</p>
                        <p className="mt-2 text-2xl font-bold">{t.price}</p>
                        <ul className="mt-6 flex flex-col gap-3 text-sm leading-snug">
                            {t.items.map((i) => (
                                <li key={i}>{i}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}