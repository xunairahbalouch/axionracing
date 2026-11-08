// The orange statement block: "We refuse to blend in. So will your brand."
export default function Blend() {
    return (
    
        <section
            id="story"
            className="relative min-h-[560px] overflow-hidden bg-orange px-6 py-24 md:px-[5%] md:py-32"
        >
            {/* The texture, placed first so it sits behind the text */}
            <img
                src="/Rectangle.png"
                alt=""
                className="absolute bottom-[-12%] left-[-4%] w-[40%] max-w-none"
            />

            {/* The text sits in its own wrapper, above the texture */}
            <div className="relative z-10">
                <h2
                    style={{ fontFamily: '"Helvetica Neue Cyr", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    className="max-w-[16ch] text-[clamp(48px,7vw,104px)] font-normal leading-[1.05] text-white"
                >
                    We refuse to blend in. So will your brand.
                </h2>
            </div>
        </section>
    );
}