import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Theme from "./theme";

const roboto  = Roboto({
  subsets: ["latin"],
  weight: [
    "100",
    "300",
    "400",
    "500",
    "700",
    "900"
  ],
  preload: false
})

export const metadata: Metadata = {
  title: "Calc",
  description: "Calculator build with NextJS + Chakra UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Theme>
          { children }
        </Theme>
      </body>
    </html>
  );
}
