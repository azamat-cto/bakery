import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-montserrat)", ...fontFamily.sans],
                display: ["var(--font-dancing-script)"],
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;
