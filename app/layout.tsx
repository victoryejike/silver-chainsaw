import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "SOM Integrated Company - specializes in the supply of security and safety equipment",
  description: "Specializes in the supply of security and safety equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} antialiased px-3 lg:px-18 pt-6 pb-12 font-sans bg-white lg:bg-background`}
      >
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
