// The top bar: the logo on the left, links and the contact button on the right.
export default function Nav() {
    return (
        <nav className="flex flex-col gap-4 border-b-2 border-black px-6 py-5 md:flex-row md:items-center md:justify-between md:px-[5%]">
            {/* The logo. h-10 sets its height, and w-auto keeps its proportions */}
            <a href="#">
                <img src="/logo.webp" alt="Axion Racing" className="h-16 w-auto" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-6">
                <a href="#results" className="hover:text-orange">Results</a>
                <a href="#story" className="hover:text-orange">Our story</a>
                <a href="#sponsors" className="hover:text-orange">Sponsors</a>
                <a href="#contact" className="bg-black px-5 py-3 font-extrabold text-white">
                    Contact us
                </a>
            </div>
        </nav>
    );
}