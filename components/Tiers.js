const tiers = [
    {
        name: "Platinum", price: "PKR 300,000", items: [
            "Largest logo on the car, website home and team shirts and merch",
            "Organic posts on Instagram and LinkedIn: 10 a month",
            "Instagram paid ads: 2 campaigns featuring your brand",
            "Content calendar shared up front",
            "Monthly report: impressions and engagement",
            "Representation through standees.",
            "Logo on All Portfolios.",
            "Feature across every channel & represented internationally (if the teams gets to go)",
        ]
    },
    {
        name: "Gold", price: "PKR 200,000", items: [
            "Large logo on the car and website home",
            "6 posts a month on Instagram and LinkedIn",
            "Logo on merch",
            "1 paid ad to reach wider audience",
            "Marketing through standees",
            "Logo on Enterprise Portfolio.",
        ]
    },
    {
        name: "Silver", price: "PKR 100,000", items: [
            "Medium logo on the car and team kit",
            "Logo on the sponsors page",
            "6 posts a month",
            "Marketing through Standees",
        ]
    },
    {
        name: "Custom", price: "You tell us", items: [
            "Give more, or give differently: parts, tools, services, travel",
            "We shape a package around what you want",
        ]
    },
];

export default function Tiers() {
    return (
        <section className="bg-orange px-6 py-16 text-white md:px-[5%]">
            <div className="grid gap-8 md:grid-cols-4">
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