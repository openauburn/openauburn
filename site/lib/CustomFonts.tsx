import localFont from "next/font/local";
import { Noto_Sans } from "next/font/google";
import { Noto_Sans_Mono } from "next/font/google";

// Font files can be colocated inside of `pages`
export const poppinsBold = localFont({
  src: [
    {
      path: "../public/static/fonts/Poppins/Poppins-Bold.ttf",
      weight: "800",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--poppins-font",
});

export const noto = Noto_Sans({ weight: "400", preload: false });

export const noto_mono = Noto_Sans_Mono({ weight: "400", preload: false });