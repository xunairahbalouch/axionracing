import { Monoton } from "next/font/google";

const monoton = Monoton({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 px-6 pb-16 pt-12 md:relative md:block md:h-[620px] md:px-0">

      {/* "axion" in lowercase, upper left. Monoton draws the striped letters */}
      <h1
        className={`${monoton.className} text-[clamp(56px,12.5vw,200px)] leading-[0.9] md:absolute md:left-[2%] md:top-[20%]`}
      >
        axion
      </h1>

      {/* The car: bigger, starts at the top of the box so the cable touches the nav,
          and z-10 puts it above the letters so it overlaps "axion" like your Figma */}
      <img
        src="/car.png"
        alt="The AR-27 race car hanging from a crane hook"
        className="w-full max-w-[560px] md:absolute md:left-[26%] md:top-0 md:z-10 md:w-[52%] md:max-w-none"
      />

      {/* "racing" in lowercase, lower right */}
      <h1
        className={`${monoton.className} text-[clamp(56px,12.5vw,200px)] leading-[0.9] md:absolute md:bottom-[8%] md:right-[2%] md:text-right`}
      >
        racing
      </h1>

      {/* The button: Helvetica Neue Cyr, regular weight (no bold) */}
      <a
        href="#sponsors"
        style={{ fontFamily: '"Helvetica Neue Cyr", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
        className="inline-block self-start bg-orange px-6 py-4 text-base font-normal text-black md:absolute md:bottom-[8%] md:left-[2%]"
      >
        Become a sponsor
      </a>
    </section>
  );
}