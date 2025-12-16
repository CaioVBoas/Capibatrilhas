import { Outfit, DM_Sans } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
