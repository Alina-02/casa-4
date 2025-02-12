/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        peach_dark: "#954300",
        peach_light: "#FFD7BA", // Peach color for login button
        peach_main: "#E87D27",
        pink_very_dark: "#AA0F93",
        pink_dark: "#D164C1",
        pink_light: "#FEF2FF",
        pink_main: "#FFDEFD",
        inputBg: "#FFE4E1", // Light pink for input backgrounds,
        FF8C00: "#FF8C00", // Orange color for circles
        FF69B4: "#FF69B4", // Pink color for buttons
        white: "#FFFFFF",
        black: "#000000",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    animation: {
      "fade-in": "fadeIn 0.5s ease-out",
      "slide-in": "slideIn 0.5s ease-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      slideIn: {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(0)" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
