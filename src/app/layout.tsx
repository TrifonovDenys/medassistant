import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";



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
        <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
