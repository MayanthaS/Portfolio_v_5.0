import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html  lang="en">
      <body  className={`${geistSans.variable} ${geistMono.variable}bg-zinc-950 text-zinc-100  antialiased`}>
        <div className="min-h-screen flex">
          <Sidebar/>
          <div className="flex-1 md:ml-[260px] ml-10px">
            <main className="min-h-screen">
             {children}
            </main>
            <Footer/>
          </div>
         </div>
         </body>
    </html>
  );
}
