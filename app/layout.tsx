import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "24hr Iphone Repair",
  description: "Cell Phone Screen Repair Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
