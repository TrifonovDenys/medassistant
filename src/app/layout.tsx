import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Home from "./page"
import Home2 from "./page1"

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "«МедАсистент»",
  description: "«МедАсистент» дає поради по лікуванню і профілактиці здоров’я для дорослих і дітей, для чоловіків і жінок, для алергіків, діабетиків і онкохворих. Пояснюємо, що робити при складних травмах і як надавати першу медичну допомогу. Розповідаємо, як лікувати залежність, підтримати здоров’я серця і відновити красу шкіри.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Home/>
        <Home2/>
        </main>
        </body>
    </html>
  );
}
