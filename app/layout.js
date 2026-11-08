// Brings in the Tailwind styles and your colors, so every page can use them.
import "./globals.css";

// next/font downloads Monoton from Google when the site builds, so visitors don't wait for it
import { Monoton } from "next/font/google";

// Create the font, and give it a CSS variable name we can use in Tailwind
const monoton = Monoton({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-monoton",
});

// Metadata sets what appears in the browser tab and in link previews.
export const metadata = {
    title: "Axion Racing",
    description: "Race Pakistan team: back the last ball.",
};

// Every page on the site is placed inside this layout.
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}