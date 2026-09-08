import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Read out of public/images/the-marketing-agent-wordmark.svg - the magenta the brackets
        // are filled with, #CE0247, is the brand. Taken from the vector rather than sampled off a
        // raster, so it is the exact value the logo uses and not a close neighbour.
        //
        // Same two-tone problem the CFO site has, for the same reason: at 41% lightness and
        // almost fully saturated, this magenta is legible on the light grounds and vibrates
        // against the near-black one. So `brand` is the wordmark colour and `brand-tint` is the
        // same hue lifted and desaturated, which is what the dark sections use.
        brand: {
          DEFAULT: "#CE0247",
          dark: "#8C0130",
          tint: "#E07B9D",
        },
        // The dark ground carries a trace of the brand hue rather than being neutral black, so
        // the magenta sits on something rather than beside it.
        ground: "#1C0B10",
        cream: "#F6F1F3",
        ink: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
