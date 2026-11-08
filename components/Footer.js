import { Monoton } from "next/font/google";

const monoton = Monoton({ weight: "400", subsets: ["latin"] });


<img
    src="/footer-halftone.png"
    alt=""
    className="pointer-events-none absolute -bottom-10 -left-10 hidden w-[32%] md:block"
/>

export default function Footer() {
    return (
        <footer id="contact" className="relative overflow-hidden bg-orange px-6 py-16 text-white md:px-[5%]">
            {/* The halftone image in the bottom-left, bleeding off the edge */}
            <img
                src="/footer-halftone.png"
                alt=""
                className="pointer-events-none absolute -bottom-10 -left-10 hidden w-[32%] md:block"
            />

            <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-6 border-b-2 border-white pb-8">
                    <h2 className="text-[clamp(40px,5vw,72px)] font-bold leading-none">Ready to race?</h2>
                    <a href="mailto:you@example.com" className="text-[clamp(32px,4vw,56px)] font-bold">
                        Get in touch
                    </a>
                </div>

                <div className="mt-10 grid gap-10 text-sm md:grid-cols-3">
                    <div>
                        <p className="font-bold uppercase tracking-widest">Sitemap</p>
                        <ul className="mt-3 flex flex-col gap-2">
                            <li><a href="#results">Results</a></li>
                            <li><a href="#story">Our story</a></li>
                            <li><a href="#sponsors">Sponsors</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-bold uppercase tracking-widest">Social</p>
                        <ul className="mt-3 flex flex-col gap-2">
                            <li>
                                <a
                                    href="https://www.instagram.com/axionracing1?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/109869132/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold uppercase tracking-widest">Email</p>
                        <p className="mt-3">axionracing1@gmail.com</p>
                    </div>
                </div>

                <div className="mt-16 flex flex-wrap items-end justify-between gap-6">
                    <p className={`${monoton.className} text-[clamp(48px,8vw,120px)] leading-none`}>
                        axion racing                    </p>
                    <div className="text-sm">
                        <a href="#" className="font-bold">Back to top ↑</a>
                        <p className="mt-2">All rights reserved © 2026</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}