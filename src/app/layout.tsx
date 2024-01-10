import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NETFLIX",
  description: "Watch your favorite movies and TV shows on Netflix.",
  icons: "favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="rootDiv">
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
          </Suspense>
        </div>
      </body>
    </html>
  );
}
