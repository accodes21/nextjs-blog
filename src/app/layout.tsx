import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogger's Hub",
  description: "Browse, create and read blog posts for free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-zinc-900 bg-zinc-100 flex flex-col min-h-screen`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
