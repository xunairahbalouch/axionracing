// PostCSS is the tool that turns Tailwind's shorthand into normal CSS.
// This file tells Next.js to use the Tailwind plugin.
const config = {
    plugins: {
        "@tailwindcss/postcss": {},
    },
};

export default config;