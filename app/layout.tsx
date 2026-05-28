import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import { genre } from "@/types/movieTypes";
import Footer from "@/components/layout/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "КиноHOME — фильмы и сериалы онлайн",
  description:
    "Каталог фильмов и сериалов. Новинки кино, популярные фильмы, рейтинги и информация об актёрах.",
};

export type genresResponse = { genres: genre[] };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen `}
      >
        <header className="relative flex justify-center">
           <Header />
        </header>
        <main className=" flex-1 w-full md:pt-[80px] my-container">
          {children}
        </main>
        <footer className="my-container">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
